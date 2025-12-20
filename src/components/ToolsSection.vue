<template>
  <div class="w-full justify-center items-center flex flex-col gap-1">
    <p class="font-montserrat text-4xl">НАСТРОЙКИ ВАШИХ ПОИСКОВ:</p>
    <p class="font-montserrat text-2xl pb-6">
      Здесь вы можете добавлять и редактировать нужные вам поиски
    </p>
    <div class="w-full bg-glass2 px-10 py-8 justify-center">
      <!-- Список карточек поисков -->
      <div class="space-y-4">
        <!-- Карточка поиска -->
        <div
          v-for="search in searches"
          :key="search.id"
          class="bg-glass-active w-full px-15 py-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-0"
        >
          <div class="flex flex-col">
            <p class="font-montserrat font-semibold text-xl lg:text-2xl">{{ search.name }}</p>
            <div
              class="flex flex-col lg:flex-row gap-2 lg:gap-4 font-montserrat font-light text-lg lg:text-xl mt-2"
            >
              <p>Тариф: {{ search.tariff }}</p>
              <p>До {{ formatDate(search.expires) }}</p>
            </div>
          </div>
          <div class="flex flex-wrap gap-3 lg:gap-10 mt-4 lg:mt-0">
            <!-- Заменяем кнопку на router-link -->
            <router-link
              :to="`/edit-search/${search.id}`"
              class="font-montserrat font-light text-base lg:text-2xl hover:text-blue-custom transition px-3 py-2 lg:px-0 lg:py-0"
            >
              Редактировать
            </router-link>
            <button
              @click="extendSearch(search.id)"
              class="font-montserrat font-light text-base lg:text-2xl hover:text-blue-custom transition px-3 py-2 lg:px-0 lg:py-0"
            >
              Продлить
            </button>
            <button
              @click="deleteSearch(search.id)"
              class="font-montserrat font-light text-base lg:text-2xl hover:text-red-400 transition px-3 py-2 lg:px-0 lg:py-0"
            >
              Удалить
            </button>
          </div>
        </div>

        <!-- Если нет поисков -->
        <div
          v-if="searches.length === 0"
          class="bg-glass-active w-full px-15 py-8 flex flex-col items-center justify-center text-center"
        >
          <p class="font-montserrat font-light text-2xl text-gray-400">
            У вас пока нет сохраненных поисков
          </p>
          <p class="font-montserrat font-light text-xl text-gray-500 mt-2">
            Нажмите кнопку ниже, чтобы добавить первый поиск
          </p>
        </div>
      </div>

      <!-- Кнопка добавления -->
      <div class="flex justify-center mt-6">
        <!-- Добавляем новую кнопку для создания поиска -->
        <router-link
          to="/edit-search/new"
          class="bg-blue-custom p-4 rounded-full flex items-center justify-center text-lg lg:text-xl font-inter font-semibold gap-4 w-full lg:w-91.5 h-16 lg:h-21 hover:opacity-90 transition"
        >
          <img src="/images/plus.svg" alt="plus" class="w-7 h-7" />
          Добавить поиск
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

interface SearchItem {
  id: number
  name: string
  tariff: string
  expires: string
  status?: string
  speed?: string
  updates?: number
}

const router = useRouter()

// Начальные данные (заглушка для LocalStorage)
const defaultSearches: SearchItem[] = [
  {
    id: 1,
    name: 'Авто до 1млн',
    tariff: 'БЕСПЛАТНЫЙ',
    expires: '2025-12-12T12:25:00',
    status: 'active',
    speed: '1 секунда',
    updates: 45,
  },
  {
    id: 2,
    name: 'Квартиры в Москве',
    tariff: 'ПРЕМИУМ',
    expires: '2025-03-20T14:30:00',
    status: 'active',
    speed: '0.1 секунды',
    updates: 156,
  },
  {
    id: 3,
    name: 'Участки МО',
    tariff: 'СТАНДАРТ',
    expires: '2025-04-15T10:00:00',
    status: 'paused',
    speed: '5 секунд',
    updates: 23,
  },
]

const searches = ref<SearchItem[]>([])

// Загрузка данных из LocalStorage
const loadSearches = () => {
  try {
    const savedSearches = localStorage.getItem('user_searches')
    if (savedSearches) {
      searches.value = JSON.parse(savedSearches)
    } else {
      // Если нет сохраненных данных, используем заглушку
      searches.value = [...defaultSearches]
      saveSearches()
    }
  } catch (error) {
    console.error('Ошибка загрузки поисков:', error)
    searches.value = [...defaultSearches]
  }
}

// Сохранение в LocalStorage
const saveSearches = () => {
  try {
    localStorage.setItem('user_searches', JSON.stringify(searches.value))
  } catch (error) {
    console.error('Ошибка сохранения поисков:', error)
  }
}

// Продление поиска
const extendSearch = (id: number) => {
  const search = searches.value.find((s) => s.id === id)
  if (search) {
    const newDate = new Date(search.expires)
    newDate.setMonth(newDate.getMonth() + 1) // Добавляем месяц

    search.expires = newDate.toISOString()
    saveSearches()

    console.log(`Поиск "${search.name}" продлен до ${formatDate(search.expires)}`)
  }
}

// Удаление поиска
const deleteSearch = (id: number) => {
  if (confirm('Вы уверены, что хотите удалить этот поиск?')) {
    const searchIndex = searches.value.findIndex((s) => s.id === id)
    if (searchIndex !== -1) {
      const deletedSearch = searches.value[searchIndex]
      searches.value.splice(searchIndex, 1)
      saveSearches()
      console.log(`Поиск "${deletedSearch.name}" удален`)
    }
  }
}

// Форматирование даты для отображения
const formatDate = (dateString: string) => {
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  } catch (error) {
    return 'дата не определена'
  }
}

// Инициализация
onMounted(() => {
  loadSearches()
})

// Экспортируем функции для использования в других компонентах (опционально)
defineExpose({
  searches,
  deleteSearch,
})
</script>

<style scoped>
/* Адаптивные стили для карточек */
.bg-glass-active {
  backdrop-filter: blur(25.2px);
  border-radius: 20px;
  background: linear-gradient(
    to bottom,
    rgba(185, 185, 185, 0.12) 0%,
    rgba(153, 153, 153, 0.12) 28%
  );
  border: 1px solid rgba(255, 255, 255, 0.79);
}

/* Адаптивность */
@media (max-width: 1024px) {
  .bg-glass-active {
    padding: 2rem 1.5rem;
  }
}

@media (max-width: 768px) {
  .bg-glass-active {
    padding: 1.5rem 1rem;
  }
}
</style>
