<template>
  <div class="flex flex-col md:flex-row gap-4 md:gap-6">
    <!-- Левая колонка с заголовком -->
    <div class="md:w-85 flex flex-col items-start md:items-end text-left md:text-right">
      <p class="font-montserrat font-semibold text-lg sm:text-xl md:text-2xl mb-2 md:mb-0">
        Выберите тариф:
      </p>
      <button
        class="font-montserrat font-semibold text-sm sm:text-base md:text-xl text-blue-custom mt-1 md:mt-2 flex items-center gap-1 hover:text-blue-400 transition-colors"
      >
        Подробнее про тарифы
      </button>
    </div>

    <!-- Правая колонка с dropdown -->
    <div class="flex-1 relative">
      <div
        class="input-gradient w-full rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
      >
        <!-- Хедер dropdown -->
        <div
          class="h-12 md:h-14 px-4 md:px-6 transition-all duration-300 cursor-pointer flex items-center hover:bg-white/5 active:bg-white/10"
          @click.stop="toggleDropdown"
        >
          <div class="flex items-center justify-between gap-3 md:gap-4 w-full">
            <div class="font-montserrat font-medium text-base sm:text-lg md:text-xl truncate">
              {{ selectedTariffName }}
            </div>
            <img
              src="/images/keyboard_arrow_up.svg"
              class="w-7 h-7 md:w-9.5 md:h-9.5 shrink-0 transition-all duration-300"
              :class="{ 'rotate-180': internalShowDropdown }"
              alt="arrow"
            />
          </div>
        </div>

        <!-- Выпадающий список -->
        <transition
          enter-active-class="transition-all duration-300 ease-out"
          leave-active-class="transition-all duration-200 ease-in"
          enter-from-class="opacity-0 transform -translate-y-4"
          leave-to-class="opacity-0 transform -translate-y-4"
        >
          <div
            v-if="internalShowDropdown"
            class="px-4 md:px-6 py-4 md:pb-5 space-y-4 md:space-y-6 max-h-80 md:max-h-96 overflow-y-auto"
          >
            <!-- Группы тарифов -->
            <div
              v-for="tariffGroup in tariffGroups"
              :key="tariffGroup.id"
              class="space-y-2 md:space-y-3"
            >
              <div
                class="flex font-montserrat flex-col md:flex-row md:items-baseline gap-1 md:gap-2"
              >
                <p class="font-extrabold text-base md:text-lg lg:text-xl">{{ tariffGroup.name }}</p>
                <p class="text-xs md:text-sm font-medium text-white/69 leading-relaxed">
                  {{ tariffGroup.description }}
                </p>
              </div>

              <div class="space-y-1.5 md:space-y-2">
                <div
                  v-for="tariff in tariffGroup.tariffs"
                  :key="tariff.id"
                  @click="tempSelectedTariff = tariff.id"
                  class="p-3 md:p-4 cursor-pointer transition-all duration-300 font-montserrat font-medium flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 dropdown-item hover:bg-white/5 active:scale-[0.98]"
                  :class="{
                    'selected-tariff': tempSelectedTariff === tariff.id,
                  }"
                >
                  <div class="text-sm md:text-base lg:text-xl">{{ tariff.name }}</div>
                  <div class="text-base md:text-lg lg:text-2xl font-bold">{{ tariff.price }}</div>
                </div>
              </div>
            </div>

            <!-- Информация о смене тарифа -->
            <div
              class="font-montserrat font-medium text-xs md:text-sm pt-2 md:pt-4 border-t border-white/10"
            >
              <p class="font-extrabold text-sm md:text-base lg:text-xl mb-1 md:mb-2">
                Хотите изменить тариф?
              </p>
              <p class="text-white/80 leading-relaxed mb-0 md:mb-1">
                Напишите в нашу
                <a
                  href="mailto:support@example.com"
                  class="font-semibold underline hover:text-blue-400 transition-colors"
                  style="color: #248ae3"
                  @click.stop
                  target="_blank"
                >
                  поддержку
                </a>
              </p>
              <p class="text-white/70 text-xs md:text-sm leading-relaxed">
                Вы можете перейти на другой тариф в любой момент — мы пересчитаем неиспользованные
                дни и сделаем перерасчёт оплаты.
              </p>
            </div>

            <!-- Кнопка выбора тарифа -->
            <div class="flex justify-center">
              <button
                @click="applyTariff"
                :disabled="!tempSelectedTariff"
                class="text-xl font-inter font-semibold bg-blue-custom hover:bg-blue-600 rounded-full w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:w-91.5 h-12 sm:h-14 md:h-16 lg:h-20.75 py-3 px-6 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl active:shadow-md transform hover:-translate-y-0.5 active:translate-y-0 mx-auto"
              >
                Выбрать тариф
              </button>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

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

const props = defineProps<{
  selectedTariff: string
  tariffGroups: TariffGroup[]
  showDropdown?: boolean
}>()

const emit = defineEmits<{
  'update:selectedTariff': [value: string]
  'update:showDropdown': [value: boolean]
}>()

const internalShowDropdown = ref(props.showDropdown || false)
const tempSelectedTariff = ref<string | null>(null)

const allTariffs = computed(() => {
  return props.tariffGroups.flatMap((group) => group.tariffs)
})

const selectedTariffName = computed(() => {
  const tariff = allTariffs.value.find((t) => t.id === props.selectedTariff)
  return tariff ? tariff.name : 'Выберите тариф'
})

watch(
  () => props.showDropdown,
  (newVal) => {
    internalShowDropdown.value = newVal || false
  },
)

const toggleDropdown = () => {
  internalShowDropdown.value = !internalShowDropdown.value
  emit('update:showDropdown', internalShowDropdown.value)
}

const applyTariff = () => {
  if (tempSelectedTariff.value) {
    emit('update:selectedTariff', tempSelectedTariff.value)
    localStorage.setItem('selectedTariff', tempSelectedTariff.value)
    tempSelectedTariff.value = null
    internalShowDropdown.value = false
    emit('update:showDropdown', false)
  }
}

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  const dropdownContainer = target.closest('.relative .input-gradient')

  if (!dropdownContainer) {
    internalShowDropdown.value = false
    emit('update:showDropdown', false)
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.input-gradient {
  background: linear-gradient(180deg, rgba(185, 185, 185, 0.13) 0%, rgba(153, 153, 153, 0.13) 100%);
  backdrop-filter: blur(136.9px);
  -webkit-backdrop-filter: blur(136.9px);
  border: 1px solid rgba(255, 255, 255, 0.72);
}

.dropdown-item {
  background: linear-gradient(180deg, rgba(185, 185, 185, 0.13) 0%, rgba(153, 153, 153, 0.13) 100%);
  backdrop-filter: blur(136.9px);
  -webkit-backdrop-filter: blur(136.9px);
  border: 1px solid rgba(255, 255, 255, 0.72);
  border-radius: 0.5rem;
}

.selected-tariff {
  background: linear-gradient(180deg, rgba(36, 138, 227, 0.13) 100%, rgba(36, 138, 227, 0.13) 100%);
  backdrop-filter: blur(136.9px);
  -webkit-backdrop-filter: blur(136.9px);
  border: 1px solid rgba(0, 123, 255, 0.72);
  border-radius: 0.5rem;
}

.input-gradient:focus {
  border-color: rgba(36, 138, 227, 0.8);
  box-shadow: 0 0 0 3px rgba(36, 138, 227, 0.1);
}

.rotate-180 {
  transform: rotate(180deg);
}

/* Адаптивные стили */
.md\:w-85 {
  width: 340px;
}

@media (max-width: 768px) {
  .md\:w-85 {
    width: 100%;
  }
}

/* Плавные анимации для всех состояний */
* {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Улучшенный скроллбар для выпадающего списка */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.3);
}
</style>
