<template>
  <div class="scale-75-wrapper">
    <div class="min-h-screen bg-dark-custom">
      <Header />

      <div class="w-full max-w-7xl mx-auto flex flex-col items-center justify-center py-8">
        <div class="mb-8 text-center">
          <p class="font-montserrat text-3xl lg:text-4xl font-bold mb-2">
            {{ isNewSearch ? 'Создание нового поиска' : 'РЕДАКТИРОВАНИЕ ПОИСКА:' }}
          </p>
        </div>

        <div class="glass-gradient p-6 lg:p-25">
          <form @submit.prevent="saveSearch" class="space-y-8">
            <!-- 1. Название поиска -->
            <TextField
              :modelValue="searchData.name"
              @update:modelValue="searchData.name = $event"
              label="Название поиска:"
              placeholder="Введите любое название..."
            />

            <TextField
              :modelValue="searchData.url"
              @update:modelValue="searchData.url = $event"
              label="Вставьте ссылку на поиск:"
              type="url"
              placeholder="https://www.avito.ru/..."
              help-text="Где взять ссылку?"
              :show-help="showLinkHelp"
              @update:showHelp="showLinkHelp = $event"
            />

            <!-- Всплывающая подсказка для ссылки -->
            <HelpTooltip :show="showLinkHelp">
              1. Откройте Avito<br />
              2. Настройте нужные фильтры<br />
              3. Скопируйте URL из адресной строки<br />
              4. Вставьте в поле справа
            </HelpTooltip>

            <!-- 3. Выбор тарифа -->
            <TariffDropdown
              v-model:selected-tariff="selectedTariff"
              :tariff-groups="tariffGroups"
              v-model:show-dropdown="showTariffDropdown"
            />

            <div class="ml-9 h-px bg-white/10"></div>

            <!-- 4. Целевые слова -->
            <TextAreaField
              v-model="searchFilters.includeKeywords"
              label="Целевые слова:"
              description="Cлова, которые должны присутствовать в объявлениях"
              placeholder="Вставляйте целевые слова через запятую: собственник, владелец...."
            />

            <!-- 5. Минус слова -->
            <TextAreaField
              v-model="searchFilters.excludeKeywords"
              label="Минус слова:"
              description="Слова, которые должны отсутствовать в объявлениях"
              placeholder="Вставляйте минус слова через запятую: автосалон, риелтор, магазин..."
            />

            <!-- 6. Блокировка продавцов -->
            <TextAreaField
              v-model="searchFilters.blockedSellers"
              label="Заблокировать продавца:"
              description=""
              placeholder="Вставляйте ID продавцов через запятую: 123456789, 987654321..."
              help-text="Где взять ID продавца?"
              v-model:show-help="showSellerHelp"
            />

            <!-- Всплывающая подсказка для продавца -->
            <HelpTooltip :show="showSellerHelp">
              1. Откройте профиль продавца на Avito<br />
              2. В URL будет ID вида "user/123456789"<br />
              3. Скопируйте только цифры<br />
              4. Вставьте в поле справа
            </HelpTooltip>

            <!-- Обертка для всех трех переключателей -->
            <div class="mt-27.5 space-y-8">
              <SwitchField
                v-model="searchSettings.isNewAdsOnly"
                title="Искать только новые объявления"
                description="Если галочка нажата, будет присылать только новые объявления, которые ранее не публиковались."
              />

              <SwitchField
                v-model="searchSettings.showReducedPrice"
                title="Показывать объявления со сниженной ценой"
                description="Если стоит галочка Программа также будет присылать объявления, которые поданы уже не в первый раз, но цена на них снижена."
              />

              <SwitchField
                v-model="searchSettings.hideHighViews"
                title="Не показывать объявления с просмотрами > 50"
                description="программа проверяет просмотры объявления, и если у него более 50 просмотров, то не присылает его."
              />
            </div>

            <!-- Кнопка сохранения -->
            <div class="flex justify-center mt-6 sm:mt-8">
              <button
                :disabled="isLoading"
                @click="saveSearch"
                class="bg-blue-custom hover:bg-blue-600 rounded-full w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:w-91.5 h-12 sm:h-14 md:h-16 lg:h-20.75 py-3 px-6 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl active:shadow-md transform hover:-translate-y-0.5 active:translate-y-0 mx-auto"
              >
                <div class="flex items-center justify-center gap-2 sm:gap-3">
                  <svg
                    v-if="isLoading"
                    class="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
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
                  <p
                    class="font-inter font-semibold text-sm sm:text-base md:text-lg lg:text-xl whitespace-nowrap"
                  >
                    {{ isNewSearch ? 'Создать поиск' : 'Сохранить и подключить' }}
                  </p>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

// Импорт компонентов
import TextField from './components/EditSearch/TextField.vue'
import TextAreaField from './components/EditSearch/TextAreaField.vue'
import SwitchField from './components/EditSearch/SwitchField.vue'
import TariffDropdown from './components/EditSearch/TariffDropdown.vue'
import HelpTooltip from './components/EditSearch/HelpTooltip.vue'

// Типы
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

// Логика компонента
const route = useRoute()
const router = useRouter()
const isLoading = ref(false)
const showLinkHelp = ref(false)
const showSellerHelp = ref(false)
const showTariffDropdown = ref(false)
const selectedTariff = ref<string>('free_trial')

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

onMounted(() => {
  loadSearchData()
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

.scale-75-wrapper {
  width: 133.33% !important;
  height: 133.33% !important;
  transform: scale(0.75) !important;
  transform-origin: 0 0 !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
}

.mx-40 {
  margin-left: 1rem;
  margin-right: 1rem;
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
