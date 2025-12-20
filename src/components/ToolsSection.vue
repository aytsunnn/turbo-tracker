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

const loadSearches = () => {
  try {
    const savedSearches = localStorage.getItem('user_searches')
    if (savedSearches) {
      searches.value = JSON.parse(savedSearches)
    } else {
      searches.value = [...defaultSearches]
      saveSearches()
    }
  } catch (error) {
    console.error('Ошибка загрузки поисков:', error)
    searches.value = [...defaultSearches]
  }
}

const saveSearches = () => {
  try {
    localStorage.setItem('user_searches', JSON.stringify(searches.value))
  } catch (error) {
    console.error('Ошибка сохранения поисков:', error)
  }
}

const extendSearch = (id: number) => {
  const search = searches.value.find((s) => s.id === id)
  if (search) {
    const newDate = new Date(search.expires)
    newDate.setMonth(newDate.getMonth() + 1)
    search.expires = newDate.toISOString()
    saveSearches()
    console.log(`Поиск "${search.name}" продлен до ${formatDate(search.expires)}`)
  }
}

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

onMounted(() => {
  loadSearches()
})
</script>

<template>
  <div class="w-full justify-center items-center flex flex-col gap-1 sm:gap-2 md:gap-3">
    <p class="font-montserrat text-2xl sm:text-3xl md:text-4xl text-center px-4">
      НАСТРОЙКИ ВАШИХ ПОИСКОВ:
    </p>
    <p class="font-montserrat text-lg sm:text-xl md:text-2xl pb-4 sm:pb-6 text-center px-4">
      Здесь вы можете добавлять и редактировать нужные вам поиски
    </p>
    <div
      class="w-full bg-glass2 px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 justify-center rounded-xl sm:rounded-2xl"
    >
      <!-- Список карточек поисков -->
      <div class="space-y-3 sm:space-y-4">
        <!-- Карточка поиска -->
        <div
          v-for="search in searches"
          :key="search.id"
          class="bg-glass-active w-full px-4 sm:px-6 md:px-8 lg:px-15 py-4 sm:py-6 md:py-8 flex flex-col lg:flex-row justify-between items-center gap-3 sm:gap-4 md:gap-6 lg:gap-0 rounded-lg sm:rounded-xl"
        >
          <div class="flex flex-col w-full lg:w-auto">
            <p class="font-montserrat font-semibold text-lg sm:text-xl md:text-2xl">
              {{ search.name }}
            </p>
            <div
              class="flex flex-col sm:flex-row gap-1 sm:gap-2 lg:gap-4 font-montserrat font-light text-sm sm:text-base md:text-lg lg:text-xl mt-1 sm:mt-2"
            >
              <p>Тариф: {{ search.tariff }}</p>
              <p class="hidden sm:block lg:hidden xl:block">•</p>
              <p>До {{ formatDate(search.expires) }}</p>
            </div>
          </div>
          <div
            class="flex flex-wrap gap-2 sm:gap-3 lg:gap-10 mt-2 sm:mt-4 lg:mt-0 w-full lg:w-auto"
          >
            <router-link
              :to="`/edit-search/${search.id}`"
              class="font-montserrat font-light text-sm sm:text-base md:text-lg lg:text-2xl hover:text-blue-custom transition px-2 sm:px-3 py-1 sm:py-2 lg:px-0 lg:py-0"
            >
              Редактировать
            </router-link>
            <button
              @click="extendSearch(search.id)"
              class="font-montserrat font-light text-sm sm:text-base md:text-lg lg:text-2xl hover:text-blue-custom transition px-2 sm:px-3 py-1 sm:py-2 lg:px-0 lg:py-0"
            >
              Продлить
            </button>
            <button
              @click="deleteSearch(search.id)"
              class="font-montserrat font-light text-sm sm:text-base md:text-lg lg:text-2xl hover:text-red-400 transition px-2 sm:px-3 py-1 sm:py-2 lg:px-0 lg:py-0"
            >
              Удалить
            </button>
          </div>
        </div>

        <!-- Если нет поисков -->
        <div
          v-if="searches.length === 0"
          class="bg-glass-active w-full px-4 sm:px-6 md:px-15 py-6 sm:py-8 flex flex-col items-center justify-center text-center rounded-lg sm:rounded-xl"
        >
          <p class="font-montserrat font-light text-lg sm:text-xl md:text-2xl text-gray-400">
            У вас пока нет сохраненных поисков
          </p>
          <p
            class="font-montserrat font-light text-base sm:text-lg md:text-xl text-gray-500 mt-1 sm:mt-2"
          >
            Нажмите кнопку ниже, чтобы добавить первый поиск
          </p>
        </div>
      </div>

      <!-- Кнопка добавления -->
      <div class="flex justify-center mt-4 sm:mt-6">
        <router-link
          to="/edit-search/new"
          class="bg-blue-custom p-3 sm:p-4 rounded-full flex items-center justify-center text-base sm:text-lg md:text-xl font-inter font-semibold gap-2 sm:gap-3 lg:gap-4 w-full lg:w-91.5 h-12 sm:h-14 md:h-16 lg:h-21 hover:opacity-90 transition shadow-lg hover:shadow-xl"
        >
          <img src="/images/plus.svg" alt="plus" class="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
          Добавить поиск
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
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

/* Адаптивные радиусы */
@media (max-width: 640px) {
  .bg-glass-active {
    border-radius: 12px;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .bg-glass-active {
    border-radius: 16px;
  }
}
</style>
