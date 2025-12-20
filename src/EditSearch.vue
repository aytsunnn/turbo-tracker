<template>
  <div class="min-h-screen bg-dark-custom">
    <Header />

    <div class="mx-40 px-4 lg:px-8 py-8">
      <div class="mb-8 text-center">
        <p class="font-montserrat text-3xl lg:text-4xl font-bold mb-2">
          {{ isNewSearch ? 'Создание нового поиска' : 'Редактирование поиска' }}
        </p>
      </div>

      <div class="glass-gradient p-6 lg:p-8">
        <form @submit.prevent="saveSearch" class="space-y-8">
          <!-- 1. Название поиска -->
          <div class="flex flex-col lg:flex-row gap-6">
            <!-- Левая колонка -->
            <div class="lg:w-80 justify-start items-end flex flex-col">
              <p class="block font-montserrat font-semibold text-xl">Название поиска:</p>
            </div>

            <!-- Правая колонка -->
            <div class="flex-1">
              <input
                v-model="searchData.name"
                type="text"
                class="w-full h-14 bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-blue-custom"
                placeholder="Введите любое название..."
                required
              />
            </div>
          </div>

          <!-- 2. Ссылка на поиск -->
          <div class="flex flex-col lg:flex-row gap-6">
            <!-- Левая колонка -->
            <div class="lg:w-80 justify-start items-end flex flex-col">
              <p class="block font-montserrat font-semibold text-xl">Вставьте ссылку на поиск:</p>
              <button
                type="button"
                @click="showLinkHelp = !showLinkHelp"
                class="text-blue-custom text-sm mt-2 flex items-center gap-1"
              >
                Где взять ссылку?
              </button>
            </div>

            <!-- Правая колонка -->
            <div class="flex-1">
              <input
                v-model="searchData.url"
                type="url"
                class="w-full h-14 bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-blue-custom"
                placeholder="https://www.avito.ru/..."
                required
              />
            </div>
          </div>

          <!-- Всплывающая подсказка для ссылки -->
          <div v-if="showLinkHelp" class="flex flex-col lg:flex-row gap-6">
            <div class="lg:w-80"></div>
            <div class="flex-1 p-3 bg-blue-custom/10 border border-blue-custom/20 rounded-lg">
              <p class="text-blue-300 text-sm">
                1. Откройте Avito<br />
                2. Настройте нужные фильтры<br />
                3. Скопируйте URL из адресной строки<br />
                4. Вставьте в поле справа
              </p>
            </div>
          </div>

          <!-- 3. Выбор тарифа -->
          <div class="flex flex-col lg:flex-row gap-6">
            <div class="lg:w-80 justify-start items-end flex flex-col">
              <p class="block font-montserrat font-semibold text-xl">Выберите тариф:</p>
              <button class="text-blue-custom text-sm mt-2 flex items-center gap-1">
                Подробнее про тарифы
              </button>
            </div>

            <div class="flex-1 relative">
              <div
                class="w-full bg-white/10 border border-white/20 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <!-- ЗАГОЛОВОК (только здесь клик переключает dropdown) -->
                <div
                  class="px-6 py-5 hover:bg-white/5 transition cursor-pointer"
                  @click="showTariffDropdown = !showTariffDropdown"
                >
                  <div class="flex items-center justify-between gap-4">
                    <div class="font-montserrat font-medium text-xl">
                      {{ selectedTariffName || 'Выберите тариф' }}
                    </div>

                    <img
                      src="/images/keyboard_arrow_up.svg"
                      class="w-9.5 h-9.5 shrink-0 transition-transform duration-300"
                      :class="{ 'rotate-180': showTariffDropdown }"
                      alt="arrow"
                    />
                  </div>
                </div>

                <!-- КОНТЕНТ DROPDOWN (клик здесь не закрывает dropdown) -->
                <div v-if="showTariffDropdown" class="px-6 pb-5 space-y-6">
                  <div v-for="tariffGroup in tariffGroups" :key="tariffGroup.id" class="space-y-3">
                    <div class="flex font-montserrat flex-row gap-2 items-baseline">
                      <p class="font-extrabold text-xl">
                        {{ tariffGroup.name }}
                      </p>
                      <p class="text-sm text-white/69">
                        {{ tariffGroup.description }}
                      </p>
                    </div>

                    <div class="space-y-2">
                      <div
                        v-for="tariff in tariffGroup.tariffs"
                        :key="tariff.id"
                        @click="tempSelectedTariff = tariff.id"
                        class="p-4 cursor-pointer transition flex justify-between items-center"
                        :class="{
                          'selected-tariff': tempSelectedTariff === tariff.id,
                          'glass-for-tariffs': tempSelectedTariff !== tariff.id,
                        }"
                      >
                        <div class="font-inter font-semibold text-base">
                          {{ tariff.name }}
                        </div>
                        <div class="font-inter font-bold text-lg">
                          {{ tariff.price }}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p class="font-montserrat font-medium text-sm">
                    <span class="font-extrabold text-xl">Хотите изменить тариф?</span><br />
                    Напишите в нашу
                    <a
                      href="mailto:support@example.com"
                      class="font-semibold text-sm"
                      style="color: #248ae3"
                      @click.stop
                      target="_blank"
                    >
                      поддержку </a
                    ><br />
                    Вы можете перейти на другой тариф в любой момент — мы пересчитаем
                    неиспользованные дни и сделаем перерасчёт оплаты.
                  </p>

                  <button
                    @click="applyTariff"
                    :disabled="!tempSelectedTariff"
                    class="w-full py-3 bg-blue-custom hover:bg-blue-600 text-white font-inter font-semibold rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Выбрать тариф
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="ml-9 h-px bg-white/10"></div>

          <!-- 4. Целевые слова -->
          <div class="flex flex-col lg:flex-row gap-6">
            <!-- Левая колонка -->
            <div class="lg:w-80 justify-start items-end flex flex-col text-right">
              <p class="block font-montserrat font-semibold text-xl">Целевые слова:</p>
              <p class="text-xl text-white/50 mt-1">
                Cлова, которые должны присутствовать в объявлениях
              </p>
            </div>

            <!-- Правая колонка -->
            <div class="flex-1">
              <textarea
                v-model="searchFilters.includeKeywords"
                class="w-full min-h-22 bg-white/10 border border-white/20 rounded-2xl px-4 py-3 focus:outline-none focus:border-blue-custom placeholder:font-montserrat placeholder:text-white/28 placeholder:text-xl"
                placeholder="Вставляйте целевые слова через запятую: собственник, владелец...."
              ></textarea>
            </div>
          </div>

          <!-- 5. Минус слова -->
          <div class="flex flex-col lg:flex-row gap-6">
            <!-- Левая колонка -->
            <div class="lg:w-80 justify-start items-end flex flex-col text-right">
              <p class="block font-montserrat font-semibold text-xl">Минус слова:</p>
              <p class="text-xl text-white/50 mt-1">
                Слова, которые должны отсутствовать в объявлениях
              </p>
            </div>

            <!-- Правая колонка -->
            <div class="flex-1">
              <textarea
                v-model="searchFilters.excludeKeywords"
                class="w-full min-h-22 bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-blue-custom placeholder:font-montserrat placeholder:text-white/28 placeholder:text-xl"
                placeholder="Вставляйте минус слова через запятую: автосалон, риелтор, магазин..."
              ></textarea>
            </div>
          </div>

          <!-- 6. Блокировка продавцов -->
          <div class="flex flex-col lg:flex-row gap-6">
            <!-- Левая колонка -->
            <div class="lg:w-80 justify-start items-end flex flex-col text-right">
              <p class="block font-montserrat font-semibold text-xl">Заблокировать продавца:</p>
              <button
                type="button"
                @click="showSellerHelp = !showSellerHelp"
                class="text-blue-custom text-sm mt-2 flex items-center gap-1 self-end"
              >
                Где взять ID продавца?
              </button>
            </div>

            <!-- Правая колонка -->
            <div class="flex-1">
              <textarea
                v-model="searchFilters.blockedSellers"
                class="w-full min-h-22 bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-blue-custom placeholder:font-montserrat placeholder:text-white/28 placeholder:text-xl"
                placeholder="Вставляйте ID продавцов через запятую: 123456789, 987654321..."
              ></textarea>
            </div>
          </div>

          <!-- Всплывающая подсказка для продавца -->
          <div v-if="showSellerHelp" class="flex flex-col lg:flex-row gap-6">
            <div class="lg:w-80"></div>
            <div class="flex-1 p-3 bg-blue-custom/10 border border-blue-custom/20 rounded-lg">
              <p class="text-blue-300 text-sm">
                1. Откройте профиль продавца на Avito<br />
                2. В URL будет ID вида "user/123456789"<br />
                3. Скопируйте только цифры<br />
                4. Вставьте в поле справа
              </p>
            </div>
          </div>

          <!-- Кнопки действий -->
          <div class="flex flex-col lg:flex-row gap-4 pt-8 border-t border-white/10">
            <button
              type="submit"
              class="flex-1 bg-blue-custom rounded-2xl h-14 text-white font-inter font-semibold hover:opacity-90 transition flex items-center justify-center gap-2"
            >
              <svg
                v-if="isLoading"
                class="animate-spin h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span>{{ isNewSearch ? 'Создать поиск' : 'Сохранить изменения' }}</span>
            </button>

            <button
              v-if="!isNewSearch"
              type="button"
              @click="deleteSearch"
              class="flex-1 bg-red-500/20 text-red-300 rounded-2xl h-14 font-inter font-semibold hover:bg-red-500/30 transition flex items-center justify-center gap-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              Удалить поиск
            </button>

            <router-link
              to="/dashboard"
              class="flex-1 bg-gray-custom rounded-2xl h-14 text-white font-inter font-semibold hover:opacity-90 transition text-center flex items-center justify-center gap-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Отмена
            </router-link>
          </div>
        </form>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

interface SearchData {
  id: number
  name: string
  url: string
  tariff: string
}

interface SearchFilters {
  includeKeywords: string
  excludeKeywords: string
  blockedSellers: string
  minPrice: string
  maxPrice: string
  region: string
}

interface Tariff {
  id: string
  name: string
  price: string
  description: string
  groupId: string
}

interface TariffGroup {
  id: string
  name: string
  description: string
  tariffs: Tariff[]
}

const route = useRoute()
const router = useRouter()
const isLoading = ref(false)
const showLinkHelp = ref(false)
const showSellerHelp = ref(false)

// ID поиска
const searchId = computed(() => route.params.id as string)
const isNewSearch = computed(() => searchId.value === 'new')

// Тарифы
const showTariffDropdown = ref(false)
const selectedTariff = ref<string>('free_trial') // текущий выбранный тариф
const tempSelectedTariff = ref<string | null>(null) // временный выбор в dropdown

// Структура данных для тарифов
const tariffGroups = ref<TariffGroup[]>([
  {
    id: 'free',
    name: 'Бесплатный',
    description: 'Бесплатный доступ к тарифу 1 секунда на 24 часа',
    tariffs: [
      {
        id: 'free_trial',
        name: 'Бесплатный доступ на 24 часа',
        price: '0 ₽',
        description: 'Бесплатный доступ к тарифу 1 секунда на 24 часа',
        groupId: 'free',
      },
    ],
  },
  {
    id: 'standard',
    name: 'Стандартные',
    description:
      'Данных тарифов хватит для большинства рынков. У вас будет большое преимущество над конкурентами',
    tariffs: [
      {
        id: 'standard_30s',
        name: '30 секунд',
        price: '200 ₽',
        description: 'Данных тарифов хватит для большинства рынков',
        groupId: 'standard',
      },
      {
        id: 'standard_10s',
        name: '10 секунд',
        price: '790 ₽',
        description: 'Данных тарифов хватит для большинства рынков',
        groupId: 'standard',
      },
      {
        id: 'standard_1s',
        name: '1 секунда',
        price: '1390 ₽',
        description: 'Данных тарифов хватит для большинства рынков',
        groupId: 'standard',
      },
    ],
  },
  {
    id: 'turbo',
    name: 'Турбо',
    description:
      'Специально под ваш поиск выделяется отдельная виртуальная машина. Её мощности хватает чтобы обновлять и присылать уведомления на самой быстрой скорости. Кроме скорости вы получаете безотказную работу',
    tariffs: [
      {
        id: 'turbo_0.5s',
        name: '0.5 секунды',
        price: '9900 ₽',
        description: 'Специально под ваш поиск выделяется отдельная виртуальная машина',
        groupId: 'turbo',
      },
      {
        id: 'turbo_0.1s',
        name: '0.1 секунды',
        price: '15900 ₽',
        description: 'Специально под ваш поиск выделяется отдельная виртуальная машина',
        groupId: 'turbo',
      },
    ],
  },
])

// Получить все тарифы в одном массиве
const allTariffs = computed(() => {
  return tariffGroups.value.flatMap((group) => group.tariffs)
})

// Найти тариф по ID
function findTariffById(tariffId: string): Tariff | null {
  if (tariffId === 'free_trial') {
    return {
      id: 'free_trial',
      name: 'Бесплатный доступ на 24 часа',
      price: '0 ₽',
      description: 'Бесплатный доступ к тарифу 1 секунда на 24 часа',
      groupId: 'free',
    }
  }
  return allTariffs.value.find((tariff) => tariff.id === tariffId) || null
}

// Получить группу по ID тарифа
function findGroupByTariffId(tariffId: string): TariffGroup | null {
  return (
    tariffGroups.value.find((group) => group.tariffs.some((tariff) => tariff.id === tariffId)) ||
    null
  )
}

// Вычисляем высоту на основе количества элементов
const getCalculatedHeight = computed(() => {
  let height = 0

  // Высота каждого элемента (примерные значения в пикселях)
  const GROUP_HEADER = 30 // заголовок группы
  const GROUP_DESCRIPTION = 40 // описание группы
  const TARIFF_ITEM = 70 // один тариф
  const NOTE_BLOCK = 120 // блок примечания
  const BUTTON = 60 // кнопка
  const PADDING = 32 // отступы (px-6 py-4 = 24px + 16px = 40px)
  const GAP = 24 // промежутки между группами (space-y-6 = 1.5rem = 24px)

  tariffGroups.value.forEach((group) => {
    height += GROUP_HEADER + GROUP_DESCRIPTION + group.tariffs.length * TARIFF_ITEM
  })

  return height + NOTE_BLOCK + BUTTON + PADDING + tariffGroups.value.length * GAP
})

// Заголовок с названием выбранного тарифа
const selectedTariffName = computed(() => {
  const tariff = findTariffById(selectedTariff.value)
  return tariff ? tariff.name : 'Выберите тариф'
})

// Описание выбранного тарифа (из группы)
const selectedTariffDescription = computed(() => {
  const group = findGroupByTariffId(selectedTariff.value)
  return group ? group.description : 'Выберите подходящий тариф'
})

// Сбрасываем временный выбор при открытии dropdown
watch(showTariffDropdown, (newVal) => {
  if (newVal) {
    tempSelectedTariff.value = null // сбрасываем при открытии
  }
})

// Функция применения тарифа
function applyTariff() {
  if (tempSelectedTariff.value) {
    selectedTariff.value = tempSelectedTariff.value
    showTariffDropdown.value = false

    // Сохраняем в localStorage
    localStorage.setItem('selectedTariff', selectedTariff.value)

    console.log('Выбран тариф:', selectedTariff.value)

    // Сброс временного выбора
    tempSelectedTariff.value = null
  }
}

// Данные поиска
const searchData = ref<SearchData>({
  id: 0,
  name: '',
  url: '',
  tariff: 'free_trial',
})

// Фильтры
const searchFilters = ref<SearchFilters>({
  includeKeywords: '',
  excludeKeywords: '',
  blockedSellers: '',
  minPrice: '',
  maxPrice: '',
  region: '',
})

// Загрузка данных
const loadSearchData = () => {
  if (isNewSearch.value) {
    // Новый поиск
    searchData.value.id = Date.now()
    return
  }

  const id = parseInt(searchId.value)

  try {
    const savedSearches = localStorage.getItem('user_searches')
    if (savedSearches) {
      const searches: SearchData[] = JSON.parse(savedSearches)
      const search = searches.find((s: SearchData) => s.id === id)

      if (search) {
        searchData.value = { ...searchData.value, ...search }
        selectedTariff.value = search.tariff || 'free_trial'

        // Загружаем фильтры из другого хранилища
        const savedFilters = localStorage.getItem(`search_filters_${id}`)
        if (savedFilters) {
          searchFilters.value = JSON.parse(savedFilters)
        }
      }
    }
  } catch (error) {
    console.error('Ошибка загрузки данных:', error)
  }
}

// Сохранение
const saveSearch = async () => {
  isLoading.value = true

  try {
    // Подготовка данных
    const searchToSave: SearchData = {
      ...searchData.value,
      tariff: selectedTariff.value,
    }

    // Сохранение в LocalStorage
    const savedSearches = localStorage.getItem('user_searches')
    let searches: SearchData[] = savedSearches ? JSON.parse(savedSearches) : []

    const existingIndex = searches.findIndex((s: SearchData) => s.id === searchToSave.id)

    if (existingIndex !== -1) {
      searches[existingIndex] = searchToSave
    } else {
      searches.push(searchToSave)
    }

    localStorage.setItem('user_searches', JSON.stringify(searches))

    // Сохраняем фильтры отдельно
    localStorage.setItem(`search_filters_${searchToSave.id}`, JSON.stringify(searchFilters.value))

    alert(isNewSearch.value ? 'Поиск создан!' : 'Изменения сохранены!')
    router.push('/dashboard')
  } catch (error) {
    console.error('Ошибка сохранения:', error)
    alert('Ошибка сохранения')
  } finally {
    isLoading.value = false
  }
}

// Удаление
const deleteSearch = () => {
  if (confirm('Удалить этот поиск?')) {
    const savedSearches = localStorage.getItem('user_searches')
    if (savedSearches) {
      const searches: SearchData[] = JSON.parse(savedSearches)
      const filtered = searches.filter((s: SearchData) => s.id !== searchData.value.id)
      localStorage.setItem('user_searches', JSON.stringify(filtered))

      // Удаляем фильтры
      localStorage.removeItem(`search_filters_${searchData.value.id}`)
    }
    router.push('/dashboard')
  }
}

// Закрытие dropdown при клике вне его
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  const dropdownContainer = target.closest('.relative .bg-white\\/10')

  // Если клик был не внутри dropdown контейнера
  if (!dropdownContainer) {
    showTariffDropdown.value = false
  }
}

// Инициализация
onMounted(() => {
  loadSearchData()
  document.addEventListener('click', handleClickOutside)

  // Загружаем сохранённый тариф
  const savedTariff = localStorage.getItem('selectedTariff')
  if (savedTariff) {
    selectedTariff.value = savedTariff
  }
})
</script>

<style scoped>
/* Стиль для левой колонки */
.lg\:w-80 {
  width: 320px; /* 20rem */
}

/* Анимация спиннера */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.animate-spin {
  animation: spin 1s linear infinite;
}

/* Кастомные стили для текстовых полей */
input,
textarea,
select {
  transition: all 0.2s ease;
}

input:focus,
textarea:focus,
select:focus {
  box-shadow: 0 0 0 3px rgba(36, 138, 227, 0.1);
}

/* Адаптивность */
@media (max-width: 1024px) {
  .lg\:w-80 {
    width: 100%;
  }

  .mx-40 {
    margin-left: 1rem;
    margin-right: 1rem;
  }
}

/* Стили для dropdown */
.rotate-180 {
  transform: rotate(180deg);
}
</style>
