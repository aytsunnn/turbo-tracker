<template>
  <div class="min-h-screen bg-dark-custom">
    <Header />

    <div class="mx-40 px-4 lg:px-8 py-8">
      <div class="mb-8 text-center">
        <p class="font-montserrat text-3xl lg:text-4xl font-bold mb-2">
          {{ isNewSearch ? 'Создание нового поиска' : 'РЕДАКТИРОВАНИЕ ПОИСКА:' }}
        </p>
      </div>

      <div class="glass-gradient p-6 lg:p-25">
        <form @submit.prevent="saveSearch" class="space-y-8">
          <!-- 1. Название поиска -->
          <div class="flex flex-col lg:flex-row gap-6">
            <div class="lg:w-85 flex flex-col items-end text-right">
              <p class="font-montserrat font-semibold text-2xl">Название поиска:</p>
            </div>

            <div class="flex-1">
              <input
                v-model="searchData.name"
                type="text"
                class="input-gradient w-full h-14 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-blue-custom placeholder:font-montserrat placeholder:font-medium placeholder:text-xl placeholder:text-white/28"
                placeholder="Введите любое название..."
                required
              />
            </div>
          </div>

          <!-- 2. Ссылка на поиск -->
          <div class="flex flex-col lg:flex-row gap-6">
            <div class="lg:w-85 flex flex-col items-end text-right">
              <p class="font-montserrat font-semibold text-2xl">Вставьте ссылку на поиск:</p>
              <button
                type="button"
                @click="showLinkHelp = !showLinkHelp"
                class="font-montserrat font-semibold text-xl text-blue-custom mt-2 flex items-center gap-1"
              >
                Где взять ссылку?
              </button>
            </div>

            <div class="flex-1">
              <input
                v-model="searchData.url"
                type="url"
                class="input-gradient w-full h-14 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-blue-custom placeholder:font-montserrat placeholder:font-medium placeholder:text-xl placeholder:text-white/28"
                placeholder="https://www.avito.ru/..."
                required
              />
            </div>
          </div>

          <!-- Всплывающая подсказка для ссылки -->
          <div v-if="showLinkHelp" class="flex flex-col lg:flex-row gap-6">
            <div class="lg:w-85"></div>
            <div class="flex-1 p-3 input-gradient rounded-lg">
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
            <div class="lg:w-85 flex flex-col items-end text-right">
              <p class="font-montserrat font-semibold text-2xl">Выберите тариф:</p>
              <button
                class="font-montserrat font-semibold text-xl text-blue-custom mt-2 flex items-center gap-1"
              >
                Подробнее про тарифы
              </button>
            </div>

            <div class="flex-1 relative">
              <div
                class="input-gradient w-full rounded-2xl overflow-hidden transition-all duration-300"
              >
                <div
                  class="dropdown-header px-6 py-5 hover:bg-white/5 transition cursor-pointer"
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

                <div v-if="showTariffDropdown" class="px-6 pb-5 space-y-6">
                  <div v-for="tariffGroup in tariffGroups" :key="tariffGroup.id" class="space-y-3">
                    <div class="flex font-montserrat flex-row gap-2 items-baseline">
                      <p class="font-extrabold text-xl">{{ tariffGroup.name }}</p>
                      <p class="text-sm text-white/69">{{ tariffGroup.description }}</p>
                    </div>

                    <div class="space-y-2">
                      <div
                        v-for="tariff in tariffGroup.tariffs"
                        :key="tariff.id"
                        @click="tempSelectedTariff = tariff.id"
                        class="p-4 cursor-pointer transition flex justify-between items-center"
                        :class="{
                          'selected-tariff': tempSelectedTariff === tariff.id,
                          'dropdown-item': tempSelectedTariff !== tariff.id,
                        }"
                      >
                        <div class="font-inter font-semibold text-base">{{ tariff.name }}</div>
                        <div class="font-inter font-bold text-lg">{{ tariff.price }}</div>
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
            <div class="lg:w-85 flex flex-col items-end text-right">
              <p class="font-montserrat font-semibold text-2xl">Целевые слова:</p>
              <p class="font-montserrat font-medium text-xl text-white/50 mt-1">
                Cлова, которые должны присутствовать в объявлениях
              </p>
            </div>

            <div class="flex-1">
              <textarea
                v-model="searchFilters.includeKeywords"
                class="input-gradient w-full min-h-22 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-blue-custom placeholder:font-montserrat placeholder:font-medium placeholder:text-xl placeholder:text-white/28"
                placeholder="Вставляйте целевые слова через запятую: собственник, владелец...."
              ></textarea>
            </div>
          </div>

          <!-- 5. Минус слова -->
          <div class="flex flex-col lg:flex-row gap-6">
            <div class="lg:w-85 flex flex-col items-end text-right">
              <p class="font-montserrat font-semibold text-2xl">Минус слова:</p>
              <p class="font-montserrat font-medium text-xl text-white/50 mt-1">
                Слова, которые должны отсутствовать в объявлениях
              </p>
            </div>

            <div class="flex-1">
              <textarea
                v-model="searchFilters.excludeKeywords"
                class="input-gradient w-full min-h-22 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-blue-custom placeholder:font-montserrat placeholder:font-medium placeholder:text-xl placeholder:text-white/28"
                placeholder="Вставляйте минус слова через запятую: автосалон, риелтор, магазин..."
              ></textarea>
            </div>
          </div>

          <!-- 6. Блокировка продавцов -->
          <div class="flex flex-col lg:flex-row gap-6">
            <div class="lg:w-85 flex flex-col items-end text-right">
              <p class="font-montserrat font-semibold text-2xl">Заблокировать продавца:</p>
              <button
                type="button"
                @click="showSellerHelp = !showSellerHelp"
                class="font-montserrat font-semibold text-xl text-blue-custom mt-2 flex items-center gap-1"
              >
                Где взять ID продавца?
              </button>
            </div>

            <div class="flex-1">
              <textarea
                v-model="searchFilters.blockedSellers"
                class="input-gradient w-full min-h-22 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-blue-custom placeholder:font-montserrat placeholder:font-medium placeholder:text-xl placeholder:text-white/28"
                placeholder="Вставляйте ID продавцов через запятую: 123456789, 987654321..."
              ></textarea>
            </div>
          </div>

          <!-- Всплывающая подсказка для продавца -->
          <div v-if="showSellerHelp" class="flex flex-col lg:flex-row gap-6">
            <div class="lg:w-85"></div>
            <div class="flex-1 p-3 input-gradient rounded-lg">
              <p class="text-blue-300 text-sm">
                1. Откройте профиль продавца на Avito<br />
                2. В URL будет ID вида "user/123456789"<br />
                3. Скопируйте только цифры<br />
                4. Вставьте в поле справа
              </p>
            </div>
          </div>

          <!-- Обертка для всех трех переключателей -->
          <div class="mt-27.5 space-y-8">
            <!-- Первый переключатель -->
            <div
              class="input-gradient w-full rounded-2xl items-center justify-between flex flex-row"
            >
              <div class="flex flex-col font-montserrat p-4">
                <p class="font-semibold text-2xl">Искать только новые объявления</p>
                <p class="font-medium text-xl text-white/56">
                  Если галочка нажата, будет присылать только новые объявления, которые ранее не
                  публиковались.
                </p>
              </div>
              <div class="p-4 flex items-center justify-center">
                <button
                  type="button"
                  class="switch-toggle relative w-22.25 h-11.75 rounded-[20px] transition-all duration-300 overflow-hidden"
                  :style="{
                    backgroundColor: searchSettings.isNewAdsOnly ? '#D9D9D9' : '#515151',
                  }"
                  role="switch"
                  :aria-checked="searchSettings.isNewAdsOnly"
                  @click="toggleNewAdsOnly"
                >
                  <span
                    class="switch-toggle-thumb absolute w-10.75 h-10.75 rounded-[20px] transition-all duration-300"
                    :style="{
                      backgroundColor: searchSettings.isNewAdsOnly ? '#515151' : '#D9D9D9',
                      left: searchSettings.isNewAdsOnly ? 'calc(100% - 45px)' : '2px',
                      top: '2px',
                    }"
                  ></span>
                </button>
              </div>
            </div>

            <!-- Второй переключатель -->
            <div
              class="input-gradient w-full rounded-2xl items-center justify-between flex flex-row"
            >
              <div class="flex flex-col font-montserrat p-4">
                <p class="font-semibold text-2xl">Показывать объявления со сниженной ценой</p>
                <p class="font-medium text-xl text-white/56">
                  Если стоит галочка Программа также будет присылать объявления, которые поданы уже
                  не в первый раз, но цена на них снижена.
                </p>
              </div>
              <div class="p-4 flex items-center justify-center">
                <button
                  type="button"
                  class="switch-toggle relative w-22.25 h-11.75 rounded-[20px] transition-all duration-300 overflow-hidden"
                  :style="{
                    backgroundColor: searchSettings.showReducedPrice ? '#D9D9D9' : '#515151',
                  }"
                  role="switch"
                  :aria-checked="searchSettings.showReducedPrice"
                  @click="toggleReducedPrice"
                >
                  <span
                    class="switch-toggle-thumb absolute w-10.75 h-10.75 rounded-[20px] transition-all duration-300"
                    :style="{
                      backgroundColor: searchSettings.showReducedPrice ? '#515151' : '#D9D9D9',
                      left: searchSettings.showReducedPrice ? 'calc(100% - 45px)' : '2px',
                      top: '2px',
                    }"
                  ></span>
                </button>
              </div>
            </div>

            <!-- Третий переключатель -->
            <div
              class="input-gradient w-full rounded-2xl items-center justify-between flex flex-row"
            >
              <div class="flex flex-col font-montserrat p-4">
                <p class="font-semibold text-2xl">Не показывать объявления с просмотрами > 50</p>
                <p class="font-medium text-xl text-white/56">
                  программа проверяет просмотры объявления, и если у него более 50 просмотров, то не
                  присылает его.
                </p>
              </div>
              <div class="p-4 flex items-center justify-center">
                <button
                  type="button"
                  class="switch-toggle relative w-22.25 h-11.75 rounded-[20px] transition-all duration-300 overflow-hidden"
                  :style="{
                    backgroundColor: searchSettings.hideHighViews ? '#D9D9D9' : '#515151',
                  }"
                  role="switch"
                  :aria-checked="searchSettings.hideHighViews"
                  @click="toggleHideHighViews"
                >
                  <span
                    class="switch-toggle-thumb absolute w-10.75 h-10.75 rounded-[20px] transition-all duration-300"
                    :style="{
                      backgroundColor: searchSettings.hideHighViews ? '#515151' : '#D9D9D9',
                      left: searchSettings.hideHighViews ? 'calc(100% - 45px)' : '2px',
                      top: '2px',
                    }"
                  ></span>
                </button>
              </div>
            </div>
          </div>

          <div class="flex justify-center mt-8">
            <button
              class="bg-blue-custom rounded-full items-center justify-center w-full lg:w-91.5 h-16 lg:h-20.75 mt-6 lg:mt-8 mx-auto py-3"
            >
              <p class="font-inter font-semibold text-lg lg:text-xl">Сохранить и подключить</p>
            </button>
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
}

interface SearchSettings {
  isNewAdsOnly: boolean
  showReducedPrice: boolean
  hideHighViews: boolean
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
const showTariffDropdown = ref(false)
const selectedTariff = ref<string>('free_trial')
const tempSelectedTariff = ref<string | null>(null)

const searchId = computed(() => route.params.id as string)
const isNewSearch = computed(() => searchId.value === 'new')

const searchSettings = ref<SearchSettings>({
  isNewAdsOnly: true,
  showReducedPrice: false,
  hideHighViews: false,
})

const searchData = ref<SearchData>({
  id: 0,
  name: '',
  url: '',
  tariff: 'free_trial',
})

const searchFilters = ref<SearchFilters>({
  includeKeywords: '',
  excludeKeywords: '',
  blockedSellers: '',
})

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

const allTariffs = computed(() => {
  return tariffGroups.value.flatMap((group) => group.tariffs)
})

const selectedTariffName = computed(() => {
  const tariff = allTariffs.value.find((t) => t.id === selectedTariff.value)
  return tariff ? tariff.name : 'Выберите тариф'
})

const toggleNewAdsOnly = () => {
  searchSettings.value.isNewAdsOnly = !searchSettings.value.isNewAdsOnly
}

const toggleReducedPrice = () => {
  searchSettings.value.showReducedPrice = !searchSettings.value.showReducedPrice
}

const toggleHideHighViews = () => {
  searchSettings.value.hideHighViews = !searchSettings.value.hideHighViews
}

const applyTariff = () => {
  if (tempSelectedTariff.value) {
    selectedTariff.value = tempSelectedTariff.value
    showTariffDropdown.value = false
    localStorage.setItem('selectedTariff', selectedTariff.value)
    tempSelectedTariff.value = null
  }
}

const loadSearchData = () => {
  if (isNewSearch.value) {
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

        const savedFilters = localStorage.getItem(`search_filters_${id}`)
        if (savedFilters) {
          searchFilters.value = JSON.parse(savedFilters)
        }

        const savedSettings = localStorage.getItem(`search_settings_${id}`)
        if (savedSettings) {
          searchSettings.value = JSON.parse(savedSettings)
        }
      }
    }
  } catch (error) {
    console.error('Ошибка загрузки данных:', error)
  }
}

const saveSearch = async () => {
  isLoading.value = true

  try {
    const searchToSave: SearchData = {
      ...searchData.value,
      tariff: selectedTariff.value,
    }

    const savedSearches = localStorage.getItem('user_searches')
    let searches: SearchData[] = savedSearches ? JSON.parse(savedSearches) : []

    const existingIndex = searches.findIndex((s: SearchData) => s.id === searchToSave.id)

    if (existingIndex !== -1) {
      searches[existingIndex] = searchToSave
    } else {
      searches.push(searchToSave)
    }

    localStorage.setItem('user_searches', JSON.stringify(searches))
    localStorage.setItem(`search_filters_${searchToSave.id}`, JSON.stringify(searchFilters.value))
    localStorage.setItem(`search_settings_${searchToSave.id}`, JSON.stringify(searchSettings.value))

    alert(isNewSearch.value ? 'Поиск создан!' : 'Изменения сохранены!')
    router.push('/dashboard')
  } catch (error) {
    console.error('Ошибка сохранения:', error)
    alert('Ошибка сохранения')
  } finally {
    isLoading.value = false
  }
}

const deleteSearch = () => {
  if (confirm('Удалить этот поиск?')) {
    const savedSearches = localStorage.getItem('user_searches')
    if (savedSearches) {
      const searches: SearchData[] = JSON.parse(savedSearches)
      const filtered = searches.filter((s: SearchData) => s.id !== searchData.value.id)
      localStorage.setItem('user_searches', JSON.stringify(filtered))

      localStorage.removeItem(`search_filters_${searchData.value.id}`)
      localStorage.removeItem(`search_settings_${searchData.value.id}`)
    }
    router.push('/dashboard')
  }
}

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  const dropdownContainer = target.closest('.relative .input-gradient')

  if (!dropdownContainer) {
    showTariffDropdown.value = false
  }
}

onMounted(() => {
  loadSearchData()
  document.addEventListener('click', handleClickOutside)

  const savedTariff = localStorage.getItem('selectedTariff')
  if (savedTariff) {
    selectedTariff.value = savedTariff
  }
})
</script>

<style scoped>
.lg\:w-85 {
  width: 340px;
}

.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.rotate-180 {
  transform: rotate(180deg);
}

/* Стиль для градиентного фона блоков */
.input-gradient {
  background: linear-gradient(180deg, rgba(185, 185, 185, 0.13) 0%, rgba(153, 153, 153, 0.13) 100%);
  backdrop-filter: blur(136.9px);
  -webkit-backdrop-filter: blur(136.9px);
  border: 1px solid rgba(255, 255, 255, 0.72);
}

/* Стиль для элементов внутри dropdown */
.dropdown-item {
  background: linear-gradient(180deg, rgba(185, 185, 185, 0.13) 0%, rgba(153, 153, 153, 0.13) 100%);
  backdrop-filter: blur(136.9px);
  -webkit-backdrop-filter: blur(136.9px);
  border: 1px solid rgba(255, 255, 255, 0.72);
  border-radius: 0.75rem;
}

.selected-tariff {
  background: linear-gradient(180deg, rgba(36, 138, 227, 0.8) 0%, rgba(36, 138, 227, 0.28) 100%);
  backdrop-filter: blur(136.9px);
  -webkit-backdrop-filter: blur(136.9px);
  border: 1px solid rgba(255, 255, 255, 0.72);
  border-radius: 0.75rem;
}

/* Стиль для заголовка dropdown */
.dropdown-header {
  background: linear-gradient(180deg, rgba(185, 185, 185, 0.13) 0%, rgba(153, 153, 153, 0.13) 100%);
  backdrop-filter: blur(136.9px);
  -webkit-backdrop-filter: blur(136.9px);
}

/* Убираем стандартные border у полей ввода */
.input-gradient:focus {
  border-color: rgba(36, 138, 227, 0.8);
  box-shadow: 0 0 0 3px rgba(36, 138, 227, 0.1);
}

@media (max-width: 1024px) {
  .lg\:w-85 {
    width: 100%;
  }

  .mx-40 {
    margin-left: 1rem;
    margin-right: 1rem;
  }
}
</style>
