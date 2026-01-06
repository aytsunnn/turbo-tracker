<script setup lang="ts"></script>

<template>
  <div id="top" class="w-full flex flex-col lg:items-center px-7 md:px-14 lg:px-0">
    <div
      class="relative flex flex-col md:flex-row md:items-center md:justify-between md:gap-18 lg:gap-54 md:mt-4 lg:mt-8 lg:ml-47.5 lg:mr-12.5 w-full max-w-420"
    >
      <div class="text-left z-3">
        <div class="font-bold font-montserrat text-sm md:text-2xl lg:text-5xl">
          САМЫЙ БЫСТРЫЙ<br />
          <span class="text-blue-custom">МОНИТОРИНГ</span>
          ОБЪЯВЛЕНИЙ<br />
          В РЕАЛЬНОМ ВРЕМЕНИ
        </div>

        <div
          class="text-[8px] md:text-sm lg:text-xl font-light font-montserrat sm:mt-2 md:mt-3 lg:mt-4"
        >
          Хватит тратить время на ручной поиск!<br />
          Получайте уведомления о новых объявлениях<br />
          мгновенно и будьте на шаг впереди конкурентов.
        </div>

        <div class="flex flex-col md:flex-row md:justify-start gap-0 md:gap-4 justify-center">
          <button
            class="bg-blue-custom md:rounded-full rounded-lg items-center justify-center flex flex-row gap-2 md:gap-0 lg:gap-4 w-45.5 lg:w-91.5 md:w-42.75 h-8.25 lg:h-21 md:h-8 mt-4 lg:mt-8 px-4"
          >
            <img class="w-4 md:w-4 lg:w-8" src="/images/lightning.svg" alt="free" />
            <p class="font-inter font-semibold text-[8px] md:text-[10px] lg:text-xl">
              Попробовать бесплатно
            </p>
          </button>

          <button
            class="bg-gray-custom md:rounded-full rounded-lg items-center justify-center flex flex-row gap-2 md:gap-1 lg:gap-4 w-45.5 lg:w-91.5 md:w-42.75 h-8.25 lg:h-21 md:h-8 mt-4 lg:mt-8 px-4"
          >
            <img class="w-4 md:w-4 lg:w-8" src="/images/tag.svg" alt="rate" />
            <p class="font-inter font-semibold text-[8px] md:text-[10px] lg:text-xl">
              Выбрать тариф
            </p>
          </button>
        </div>
      </div>

      <img
        class="absolute sm:block md:static z-0 w-56 h-65 md:w-72.75 md:h-83 lg:w-173 lg:h-196 -right-12 -top-5 md:-right-14 lg:mt-0"
        src="/images/bg-phone.svg"
        alt="bg-phone"
      />
    </div>
  </div>
</template>

<style scoped>
/* Component-specific styles if needed */
</style>
