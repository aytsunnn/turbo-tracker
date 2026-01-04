<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { TariffCard } from './data/tariffCards'
import { tariffCards as defaultTariffs } from './data/tariffCards'

const STORAGE_KEY = 'tariffCards'
const tariffCards = ref<TariffCard[]>([])

const initializeTariffs = () => {
  const storedCards = localStorage.getItem(STORAGE_KEY)

  if (storedCards) {
    tariffCards.value = JSON.parse(storedCards)
  } else {
    tariffCards.value = defaultTariffs
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultTariffs))
  }
}

onMounted(() => {
  initializeTariffs()
})

// Функция для получения стилей карточки
const getCardStyles = (style: string) => {
  switch (style) {
    case 'free':
      return {
        background:
          'linear-gradient(90deg, rgba(255, 255, 255, 0.25) 0%, rgba(153, 153, 153, 0.1) 100%), rgba(0, 0, 0, 0.3)',
        border: '1px  rgba(255, 255, 255, 0.01)',
      }
    case 'premium':
      return {
        background:
          'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%), rgba(0, 0, 0, 0.3)',
        border: '1px solid #CACACA',
      }
    case 'other':
      return {
        background:
          'linear-gradient(90deg, rgba(153, 153, 153, 0.1) 0%, rgba(255, 255, 255, 0.25) 100%), rgba(0, 0, 0, 0.3)',
        border: '1px  rgba(255, 255, 255, 0.1)',
      }
    default:
      return {}
  }
}

// Функция для получения текста кнопки по разрешению
const getButtonText = (card: TariffCard) => {
  // Если есть адаптивные настройки
  if (card.buttonLines) {
    return card.buttonText // Используем как fallback
  }
  return card.buttonText
}
</script>

<template>
  <div>
    <div id="tariffs" class="mt-26.75 md:mt-20.75 lg:mt-57.5 mb-3 lg:mb-20 px-7 md:px-14 lg:px-0">
      <p class="font-montserrat font-semibold text-center text-sm md:text-xl lg:text-4xl">
        ВЫБЕРИТЕ СВОЙ ТАРИФ
      </p>
      <p
        class="text-center font-montserrat font-light text-[10px] md:text-sm lg:text-2xl mt-2 lg:mt-0"
      >
        Вы получаете доступ на 31 день, даже если это февраль!<br />
        Все доступные тарифы доступны в нашем телеграм канале
      </p>
    </div>

    <div class="flex flex-col items-center px-4 lg:px-0">
      <div class="flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-0">
        <!-- Динамическое создание карточек -->
        <div
          v-for="card in tariffCards"
          :key="card.id"
          class="w-full sm:w-58.25 md:w-108.25 lg:w-92.5 rounded-2xl p-6 md:py-6 md:px-8 lg:p-8 flex flex-col justify-between relative overflow-hidden"
          :class="{
            'sm:h-74 lg:w-123.25 lg:h-148.75 mt-6 lg:mt-0': card.id !== 2,
            'lg:w-139 lg:h-166.75': card.id === 2,
            'mt-6 lg:mt-0': card.id !== 1,
            'md:w-108.25': true,
            'md:h-auto': true,
          }"
          :style="{
            backdropFilter: 'blur(25.2px)',
            ...getCardStyles(card.style),
          }"
        >
          <!-- Скидка для премиум карточки -->
          <div
            v-if="card.hasDiscount && card.discountText"
            class="absolute top-6 lg:top-10 -right-10 lg:-right-16"
          >
            <div
              class="bg-[#D9D9D9] text-blue-custom font-montserrat font-bold text-lg lg:text-3xl px-20 lg:px-24 py-1 lg:py-2 transform rotate-40 shadow-md"
            >
              {{ card.discountText }}
            </div>
          </div>

          <div>
            <!-- Заголовок -->
            <p
              class="font-montserrat font-bold italic text-sm md:text-base lg:text-4xl mb-2 md:mb-0 lg:mb-8"
            >
              {{ card.title }}
            </p>

            <!-- Цена и период -->
            <div class="flex flex-row items-start gap-1 md:gap-2">
              <p
                v-if="card.price"
                class="font-montserrat text-2xl md:text-3xl lg:text-5xl mb-2 lg:mb-8"
              >
                {{ card.price }}
              </p>
              <p v-if="card.period" class="font-montserrat text-xs md:text-base lg:text-xl lg:mt-2">
                {{ card.period }}
              </p>
            </div>

            <!-- Разделитель -->
            <div
              v-if="card.price || card.period"
              class="w-23.5 md:w-39 lg:w-90 h-0.5 bg-white/20 mb-4"
            />

            <!-- Список преимуществ -->
            <ul
              class="font-montserrat text-sm md:text-sm lg:text-xl space-y-3 mt-2 md:mt-6 lg:mt-0 lg:space-y-4"
            >
              <li
                v-for="(feature, index) in card.features"
                :key="index"
                class="flex items-start lg:items-start gap-1 md:gap-3"
              >
                <img
                  class="check-style w-5 h-5 md:w-4 md:h-4 lg:w-6 lg:h-6"
                  src="/images/check.svg"
                  alt="check"
                />
                <span class="text-sm md:text-sm lg:text-base">
                  <span v-for="(line, lineIndex) in feature.text.split('\n')" :key="lineIndex">
                    {{ line }}
                    <br v-if="lineIndex < feature.text.split('\n').length - 1" />
                  </span>
                </span>
              </li>
            </ul>
          </div>

          <!-- Кнопка -->
          <button
            class="bg-blue-custom rounded-full flex items-center justify-center w-full mx-auto py-3 mt-8.25 md:mt-8 lg:mt-0 px-4"
            :class="{
              'w-36 h-10': true,
              'md:w-50.5 md:h-12.5': card.id !== 2,
              'md:w-49.75 md:h-12.5': card.id === 2,
              'lg:w-61.5 lg:h-20.75': card.id !== 2,
              'lg:w-85.25 lg:h-20.75': card.id === 2,
            }"
          >
            <p class="font-inter font-semibold text-sm md:text-base lg:text-xl text-center">
              <!-- Для первой карточки (Бесплатный тариф) -->
              <template v-if="card.id === 1">
                <!-- Для lg: 2 строки -->
                <span class="hidden lg:block">
                  <span>Подключить</span><br />
                  <span>Бесплатно</span>
                </span>
                <!-- Для md: 1 строка -->
                <span class="hidden md:block lg:hidden"> Подключить Бесплатно </span>
                <!-- Для sm: 2 строки -->
                <span class="md:hidden">
                  <span>Подключить</span><br />
                  <span>Бесплатно</span>
                </span>
              </template>
              <!-- Для остальных карточек -->
              <template v-else>
                {{ card.buttonText }}
              </template>
            </p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.check-style {
  flex-shrink: 0;
}

@media (max-width: 767px) {
  .text-sm {
    font-size: 14px;
  }

  .text-2xl {
    font-size: 24px;
  }

  .text-xl {
    font-size: 20px;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .md\:text-base {
    font-size: 16px;
  }

  .md\:text-sm {
    font-size: 14px;
  }

  .md\:text-3xl {
    font-size: 30px;
  }
}
</style>
