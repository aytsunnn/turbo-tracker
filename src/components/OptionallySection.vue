<template>
  <div class="flex flex-col items-center gap-6 sm:gap-8">
    <p class="font-montserrat text-2xl sm:text-3xl md:text-4xl text-center px-4">ДОПОЛНИТЕЛЬНО</p>
    <div class="w-full max-w-full sm:max-w-550 mx-auto px-4 sm:px-0">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
        <div
          class="w-full cursor-pointer h-48 sm:h-60 md:h-64 lg:h-72 xl:h-80 px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 relative rounded-xl sm:rounded-2xl"
          style="
            background-color: rgba(255, 255, 255, 0.13);
            border: 1px solid rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(25.2px);
            -webkit-backdrop-filter: blur(25.2px);
            border-radius: 20px;
          "
        >
          <p class="font-montserrat text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-4">
            Инструкция
          </p>
          <img
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
            src="/images/blue-arrow.svg"
            alt="Инструкция"
          />
        </div>

        <div class="flex flex-col justify-between gap-4 sm:gap-6">
          <button
            class="w-full h-28 sm:h-32 md:h-35 bg-glass-custom relative flex items-center px-4 sm:px-6 md:px-10 rounded-xl sm:rounded-2xl"
          >
            <div class="flex flex-col items-start text-left w-full">
              <p class="font-montserrat font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">
                Остались вопросы?
              </p>
              <p
                class="font-montserrat font-light text-sm sm:text-base md:text-lg lg:text-xl mt-1 sm:mt-2"
              >
                На них с радостью ответит наша поддержка<br class="hidden sm:block" />
                @TurboTrackerInfo
              </p>
            </div>
            <img
              src="/images/blue-arrow.svg"
              class="h-16 sm:h-20 md:h-24 lg:h-30 absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2"
              alt="Стрелка"
            />
          </button>

          <button
            class="w-full h-28 sm:h-32 md:h-35 bg-glass-custom relative flex items-center px-4 sm:px-6 md:px-10 rounded-xl sm:rounded-2xl"
          >
            <div class="flex flex-col items-start text-left w-full">
              <p class="font-montserrat font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl">
                Новостной канал
              </p>
              <p
                class="font-montserrat font-light text-sm sm:text-base md:text-lg lg:text-xl mt-1 sm:mt-2"
              >
                Следите за новостями и скидками в<br class="hidden sm:block" />
                нашем новостном канале
              </p>
            </div>
            <img
              src="/images/blue-arrow.svg"
              class="h-16 sm:h-20 md:h-24 lg:h-30 absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2"
              alt="Стрелка"
            />
          </button>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-4 sm:gap-6 mt-8 sm:mt-10">
        <button
          class="w-full h-16 sm:h-20 md:h-22 lg:h-25.5 custom-gradient flex items-center gap-3 sm:gap-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl"
        >
          <div
            class="bg-blue-custom w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-15 lg:h-15 rounded-lg sm:rounded-xl md:rounded-2xl"
          />
          <p class="font-montserrat text-lg sm:text-xl md:text-2xl lg:text-3xl">Тарифы</p>
        </button>
        <button
          class="w-full h-16 sm:h-20 md:h-22 lg:h-25.5 custom-gradient flex items-center gap-3 sm:gap-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl"
        >
          <div
            class="bg-blue-custom w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-15 lg:h-15 rounded-lg sm:rounded-xl md:rounded-2xl"
          />
          <p class="font-montserrat text-lg sm:text-xl md:text-2xl lg:text-3xl">Удалить аккаунт</p>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-glass-custom {
  background-color: rgba(255, 255, 255, 0.13);
  border: 1px solid rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(25.2px);
  -webkit-backdrop-filter: blur(25.2px);
}

.custom-gradient {
  background: linear-gradient(135deg, rgba(185, 185, 185, 0.12) 0%, rgba(153, 153, 153, 0.12) 100%);
  border: 1px solid rgba(255, 255, 255, 0.79);
  backdrop-filter: blur(25.2px);
  -webkit-backdrop-filter: blur(25.2px);
}

/* Адаптивные радиусы для мобильных */
@media (max-width: 640px) {
  div[style*='background-color'],
  .bg-glass-custom,
  .custom-gradient {
    border-radius: 12px;
  }
}

@media (min-width: 641px) and (max-width: 768px) {
  div[style*='background-color'],
  .bg-glass-custom,
  .custom-gradient {
    border-radius: 16px;
  }
}
</style>
