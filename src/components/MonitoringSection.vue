<script setup lang="ts">
import { monitoringCards } from './data/monitoringCards'
</script>

<template>
  <div
    id="monitoring"
    class="flex flex-col mt-13.5 md:mt-31 lg:mt-53.5 px-7 md:px-14 lg:px-0 relative"
  >
    <p
      class="font-montserrat text-sm md:text-xl lg:text-4xl font-regular text-center mb-8 lg:mb-12"
    >
      НАСТРАИВАЙ ПОИСК ПОД СЕБЯ
    </p>

    <!-- Контейнер для стеклянного блока и картинки -->
    <div class="relative">
      <div class="absolute inset-0 flex items-center justify-center z-0">
        <img
          src="/images/avito.svg"
          alt="avito"
          class="w-48 md:w-55.75 lg:w-96 opacity-60 md:opacity-50 blur-[18.5px] md:blur-none"
        />
      </div>

      <!-- Блок для md и lg (один большой glass) -->
      <div
        class="hidden md:block bg-glass2 px-4 items-center py-6 lg:py-30 w-full h-auto md:px-4 md:py-10 md:h-86.5 lg:h-172 flex flex-col justify-between relative z-10"
      >
        <div class="flex justify-center items-center">
          <div class="lg:w-348 lg:h-88 flex justify-center items-center">
            <div
              class="grid grid-cols-1 md:grid-cols-3 md:gap-x-6 lg:gap-x-52 md:gap-y-10 lg:gap-y-15"
            >
              <!-- Карточки генерируются динамически -->
              <div
                v-for="card in monitoringCards"
                :key="card.id"
                class="flex items-start md:gap-2 lg:gap-4"
              >
                <img class="lg:w-10 md:w-5 w-6" :src="card.icon" :alt="card.title" />
                <div class="flex-1">
                  <p
                    class="font-montserrat font-bold italic text-lg md:text-sm lg:text-xl md:mb-1 lg:mb-2"
                  >
                    {{ card.title }}
                  </p>
                  <p class="font-montserrat font-light text-sm md:text-[10px] lg:text-base">
                    <span v-for="(line, index) in card.description" :key="index">
                      {{ line }}<br v-if="index < card.description.length - 1" />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col lg:flex-row justify-center items-center lg:mt-0 md:mt-8 mt-6">
          <button
            class="bg-blue-custom p-4 rounded-full flex items-center justify-center text-lg md:text-sm lg:text-xl font-inter font-semibold gap-2 w-full md:w-55.25 lg:w-91.5 h-16 md:h-10.75 lg:h-21"
          >
            Начать мониторинг
          </button>
          <button
            class="hidden lg:flex bg-blue-custom p-4 rounded-full items-center justify-center h-16 lg:h-21 w-16 lg:w-21"
          >
            <img src="/images/arrowLink.svg" alt="link" />
          </button>
        </div>
      </div>

      <!-- Блок для sm (отдельные карточки с glass) -->
      <div class="md:hidden relative z-10">
        <div class="grid grid-cols-2 gap-x-4 gap-y-2">
          <!-- Карточки для sm -->
          <div
            v-for="card in monitoringCards"
            :key="card.id"
            class="bg-glass2 h-34.5 rounded py-4 px-0 flex flex-col items-center text-center"
          >
            <div class="flex flex-col items-center gap-2 mb-2">
              <img class="w-4.5" :src="card.icon" :alt="card.title" />
              <p class="font-montserrat font-bold italic text-xs">
                {{ card.title }}
              </p>
            </div>
            <p class="font-montserrat font-light text-[10px] leading-tight">
              <span v-for="(line, index) in card.description" :key="index">
                {{ line }}<br v-if="index < card.description.length - 1" />
              </span>
            </p>
          </div>
        </div>

        <!-- Кнопка для sm -->
        <div class="flex justify-center mt-4">
          <button
            class="bg-blue-custom p-4 rounded-full flex items-center justify-center text-xs font-inter font-semibold w-full h-10.75"
          >
            Начать мониторинг
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
