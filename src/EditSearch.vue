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
                class="text-blue-custom hover:underline text-sm mt-2 flex items-center gap-1"
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
              <router-link
                to="/tariffs"
                class="text-blue-custom hover:underline text-sm mt-2 flex items-center gap-1"
              >
                Подробнее про тарифы
              </router-link>
            </div>

            <div class="flex-1 relative">
              <!-- Основной контейнер -->
              <div
                class="w-full bg-white/10 border border-white/20 rounded-2xl overflow-hidden transition-all duration-300"
                :class="{
                  'h-[72px]': !showTariffDropdown,
                  'h-auto max-h-[900px]': showTariffDropdown,
                }"
              >
                <!-- Список тарифов -->
                <div v-if="showTariffDropdown" class="px-6 py-4 space-y-3">
                  <!-- Бесплатный тариф -->
                  <div
                    @click="tempSelectedTariff = 'free'"
                    class="p-4 rounded-xl border cursor-pointer transition"
                    :class="{
                      'border-blue-custom bg-blue-custom/10': tempSelectedTariff === 'free',
                      'border-white/20 hover:border-white/40': tempSelectedTariff !== 'free',
                    }"
                  >
                    <div class="flex justify-between items-start">
                      <div class="flex flex-col">
                        <span class="font-inter font-semibold text-white">Бесплатный</span>
                      </div>
                      <span class="font-inter font-bold text-white">0 ₽</span>
                    </div>
                  </div>

                  <!-- Стандартные тарифы -->
                  <div class="space-y-3">
                    <h3 class="font-inter font-semibold text-white mb-2">Стандартные</h3>
                    <div
                      v-for="tariff in standardTariffs"
                      :key="tariff.id"
                      @click="tempSelectedTariff = tariff.id"
                      class="p-4 rounded-xl border cursor-pointer transition"
                      :class="{
                        'border-blue-custom bg-blue-custom/10': tempSelectedTariff === tariff.id,
                        'border-white/20 hover:border-white/40': tempSelectedTariff !== tariff.id,
                      }"
                    >
                      <div class="flex justify-between items-start">
                        <div class="flex flex-col">
                          <span class="font-inter font-semibold text-white">{{ tariff.name }}</span>
                          <span class="text-gray-400 text-sm mt-1"
                            >Данных тарифов хватит для большинства рынков</span
                          >
                        </div>
                        <span class="font-inter font-bold text-white">{{ tariff.price }}</span>
                      </div>
                    </div>
                  </div>

                  <!-- Турбо тарифы -->
                  <div class="space-y-3">
                    <h3 class="font-inter font-semibold text-white mb-2">Турбо</h3>
                    <div
                      v-for="tariff in turboTariffs"
                      :key="tariff.id"
                      @click="tempSelectedTariff = tariff.id"
                      class="p-4 rounded-xl border cursor-pointer transition"
                      :class="{
                        'border-blue-custom bg-blue-custom/10': tempSelectedTariff === tariff.id,
                        'border-white/20 hover:border-white/40': tempSelectedTariff !== tariff.id,
                      }"
                    >
                      <div class="flex justify-between items-start">
                        <div class="flex flex-col">
                          <span class="font-inter font-semibold text-white">{{ tariff.name }}</span>
                          <span class="text-gray-400 text-sm mt-1">{{ tariff.description }}</span>
                        </div>
                        <span class="font-inter font-bold text-white">{{ tariff.price }}</span>
                      </div>
                    </div>
                  </div>

                  <!-- Примечание -->
                  <div class="p-4 bg-white/5 rounded-xl border border-white/10 mb-4">
                    <p class="text-gray-400 text-sm">
                      <span class="font-semibold text-white">Хотите изменить тариф?</span><br />
                      Напишите в нашу поддержку. Вы можете перейти на другой тариф в любой момент –
                      мы пересчитаем неиспользованные дни и сделаем перерасчёт оплаты.
                    </p>
                  </div>

                  <!-- Кнопка выбора тарифа -->
                  <div class="pb-4">
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
          </div>

          <div class="ml-9 h-px bg-white/10"></div>

          <!-- 4. Целевые слова -->
          <div class="flex flex-col lg:flex-row gap-6">
            <!-- Левая колонка -->
            <div class="lg:w-80 justify-start items-end flex flex-col">
              <p class="block font-montserrat font-semibold text-xl">Целевые слова:</p>
            </div>

            <!-- Правая колонка -->
            <div class="flex-1">
              <textarea
                v-model="filters.includeKeywords"
                class="w-full min-h-32 bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-blue-custom"
                placeholder="Вставляйте целевые слова через запятую: собственник, владелец..."
              ></textarea>
              <p class="text-gray-400 text-sm mt-2">
                Слова, которые должны присутствовать в объявлениях
              </p>
            </div>
          </div>

          <!-- 5. Минус слова -->
          <div class="flex flex-col lg:flex-row gap-6">
            <!-- Левая колонка -->
            <div class="lg:w-80 justify-start items-end flex flex-col">
              <p class="block font-montserrat font-semibold text-xl">Минус слова:</p>
            </div>

            <!-- Правая колонка -->
            <div class="flex-1">
              <textarea
                v-model="filters.excludeKeywords"
                class="w-full min-h-32 bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-blue-custom"
                placeholder="Вставляйте минус слова через запятую: автосалон, риелтор, магазин..."
              ></textarea>
              <p class="text-gray-400 text-sm mt-2">
                Слова, которые должны отсутствовать в объявлениях
              </p>
            </div>
          </div>

          <!-- 6. Блокировка продавцов -->
          <div class="flex flex-col lg:flex-row gap-6">
            <!-- Левая колонка -->
            <div class="lg:w-80 justify-start items-end flex flex-col">
              <p class="block font-montserrat font-semibold text-xl">Заблокировать продавца:</p>
              <button
                type="button"
                @click="showSellerHelp = !showSellerHelp"
                class="text-blue-custom hover:underline text-sm mt-2 flex items-center gap-1"
              >
                Где взять ID продавца?
              </button>
            </div>

            <!-- Правая колонка -->
            <div class="flex-1">
              <textarea
                v-model="filters.blockedSellers"
                class="w-full min-h-32 bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-blue-custom"
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
              <span>{{ searchId === 'new' ? 'Создать поиск' : 'Сохранить изменения' }}</span>
            </button>

            <button
              v-if="searchId !== 'new'"
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
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const route = useRoute()
const router = useRouter()
const isLoading = ref(false)
const showLinkHelp = ref(false)
const showSellerHelp = ref(false)

// ID поиска
const searchId = computed(() => route.params.id)
const isNewSearch = computed(() => searchId.value === 'new')

// Тарифы
const tariffs = ref([
  { id: 'free', name: 'БЕСПЛАТНЫЙ', description: '24 часа, скорость 5 сек', price: '0₽' },
  { id: 'standard', name: 'СТАНДАРТ', description: '1 секунда', price: '790₽/месяц' },
  { id: 'premium', name: 'ПРЕМИУМ', description: '0.1 секунды', price: '1390₽/месяц' },
  { id: 'pro', name: 'ПРО', description: '0.05 секунды + API', price: '2990₽/месяц' },
])

const showTariffDropdown = ref(false)
const selectedTariff = ref('free')

const standardTariffs = ref([
  {
    id: '30sec',
    name: '30 секунд',
    price: '200 ₽',
    description: 'Данных тарифов хватит для большинства рынков',
  },
  {
    id: '10sec',
    name: '10 секунд',
    price: '790 ₽',
    description: 'Данных тарифов хватит для большинства рынков',
  },
  {
    id: '1sec',
    name: '1 секунда',
    price: '1390 ₽',
    description: 'Данных тарифов хватит для большинства рынков',
  },
])

const turboTariffs = ref([
  {
    id: '0.5sec',
    name: '0.5 секунды',
    price: '9900 ₽',
    description: 'Специально под ваш поиск выделяется отдельная виртуальная машина',
  },
  {
    id: '0.1sec',
    name: '0.1 секунды',
    price: '15900 ₽',
    description: 'Специально под ваш поиск выделяется отдельная виртуальная машина',
  },
])

const selectedTariffName = computed(() => {
  if (selectedTariff.value === 'free') return 'Бесплатный'
  const allTariffs = [...standardTariffs.value, ...turboTariffs.value]
  const tariff = allTariffs.find((t) => t.id === selectedTariff.value)
  return tariff ? tariff.name : 'Выберите тариф'
})

const selectedTariffDescription = computed(() => {
  if (selectedTariff.value === 'free') return 'Бесплатный доступ к тарифу 1 секунда на 24 часа'
  const allTariffs = [...standardTariffs.value, ...turboTariffs.value]
  const tariff = allTariffs.find((t) => t.id === selectedTariff.value)
  return tariff ? tariff.description : ''
})

function selectTariff(id) {
  selectedTariff.value = id
  showTariffDropdown.value = false
}

// Данные поиска
const searchData = ref({
  id: 0,
  name: '',
  url: '',
  tariff: 'standard',
})

// Фильтры
const filters = ref({
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

  const id = parseInt(searchId.value as string)

  try {
    const savedSearches = localStorage.getItem('user_searches')
    if (savedSearches) {
      const searches = JSON.parse(savedSearches)
      const search = searches.find((s: any) => s.id === id)

      if (search) {
        searchData.value = { ...searchData.value, ...search }
        selectedTariff.value = search.tariff || 'standard'

        if (search.filters) {
          filters.value = { ...filters.value, ...search.filters }
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
    const searchToSave = {
      ...searchData.value,
      tariff: selectedTariff.value,
      filters: { ...filters.value },
    }

    // Сохранение в LocalStorage
    const savedSearches = localStorage.getItem('user_searches')
    let searches = savedSearches ? JSON.parse(savedSearches) : []

    const existingIndex = searches.findIndex((s: any) => s.id === searchToSave.id)

    if (existingIndex !== -1) {
      searches[existingIndex] = searchToSave
    } else {
      searches.push(searchToSave)
    }

    localStorage.setItem('user_searches', JSON.stringify(searches))

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
      const searches = JSON.parse(savedSearches)
      const filtered = searches.filter((s: any) => s.id !== searchData.value.id)
      localStorage.setItem('user_searches', JSON.stringify(filtered))
    }
    router.push('/dashboard')
  }
}

// Закрытие dropdown при клике вне его
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (!target.closest('.relative')) {
    showTariffDropdown.value = false
  }
}

// Инициализация
onMounted(() => {
  loadSearchData()
  document.addEventListener('click', handleClickOutside)
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
