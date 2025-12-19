<script setup lang="ts"></script>

<template>
  <div id="top" class="flex justify-center flex-col items-center px-4 lg:px-0">
    <div
      class="flex flex-col lg:flex-row items-center justify-between gap-8 mt-4 lg:mt-8 lg:ml-47.5 lg:mr-12.5 w-full max-w-420"
    >
      <div class="text-center lg:text-left">
        <div class="font-bold text-3xl lg:text-5xl">
          САМЫЙ БЫСТРЫЙ<br />
          <span class="text-blue-custom">МОНИТОРИНГ</span>
          ОБЪЯВЛЕНИЙ<br />
          В РЕАЛЬНОМ ВРЕМЕНИ
        </div>

        <div class="text-base lg:text-xl font-light font-monserrat mt-4">
          Хватит тратить время на ручной поиск!<br />
          Получайте уведомления о новых объявлениях<br />
          мгновенно и будьте на шаг впереди конкурентов.
        </div>

        <div class="flex flex-col lg:flex-row gap-4 justify-center lg:justify-start">
          <button
            class="bg-blue-custom rounded-full items-center justify-center flex flex-row gap-2 lg:gap-4 w-full lg:w-91.5 h-16 lg:h-21 mt-8 px-4"
          >
            <img class="w-6 lg:w-8" src="/images/lightning.svg" alt="free" />
            <p class="font-inter font-semibold text-lg lg:text-xl">Попробовать бесплатно</p>
          </button>

          <button
            class="bg-gray-custom rounded-full items-center justify-center flex flex-row gap-2 lg:gap-4 w-full lg:w-91.5 h-16 lg:h-21 mt-4 lg:mt-8 px-4"
          >
            <img class="w-6 lg:w-8" src="/images/tag.svg" alt="rate" />
            <p class="font-inter font-semibold text-lg lg:text-xl">Выбрать тариф</p>
          </button>
        </div>
      </div>

      <img class="w-48 lg:w-173 h-auto lg:h-196 mt-8 lg:mt-0" src="/images/bg-phone.svg" alt="bg-phone" />
    </div>
  </div>
</template>

<style scoped>
/* Component-specific styles if needed */
</style>