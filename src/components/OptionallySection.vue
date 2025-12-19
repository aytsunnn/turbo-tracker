<template>
  <div class="flex flex-col items-center gap-8">
    <p class="font-montserrat text-4xl">ДОПОЛНИТЕЛЬНО</p>
    <div class="w-full max-w-550 mx-auto">
      <div class="grid grid-cols-2 gap-4 mb-4">
        <div
          class="w-174.5 h-80 px-10 py-6 relative"
          style="
            background-color: rgba(255, 255, 255, 0.13);
            border: 1px solid rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(25.2px);
            -webkit-backdrop-filter: blur(25.2px);
            border-radius: 20px;
          "
        >
          <p class="font-montserrat text-3xl font-semibold">Инструкция</p>
          <img
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src="/images/blue-arrow.svg"
          />
        </div>

        <div class="flex flex-col justify-between gap-4">
          <button class="w-174.5 h-35 bg-glass-custom relative flex items-center px-10 pr-14">
            <div class="flex flex-col items-start text-left">
              <p class="font-montserrat font-semibold text-3xl">Остались вопросы?</p>
              <p class="font-montserrat font-light text-xl">
                На них с радостью ответит наша поддержка<br />
                @TurboTrackerInfo
              </p>
            </div>
            <img
              src="/images/blue-arrow.svg"
              class="h-30 absolute right-2 top-1/2 transform -translate-y-1/2"
            />
          </button>

          <button class="w-174.5 h-35 bg-glass-custom relative flex items-center px-10">
            <div class="flex flex-col items-start text-left">
              <p class="font-montserrat font-semibold text-3xl">Новостной канал</p>
              <p class="font-montserrat font-light text-xl">
                Следите за новостями и скидками в<br />
                нашем новостном канале
              </p>
            </div>
            <img
              src="/images/blue-arrow.svg"
              class="h-30 absolute right-2 top-1/2 transform -translate-y-1/2"
            />
          </button>
        </div>
      </div>
      <div class="grid grid-cols-1 mt-10 gap-6">
        <div class="w-367.25 h-25.5 custom-gradient flex items-center gap-4 px-6">
          <div class="bg-blue-custom w-15 h-15 rounded-2xl" />
          <p class="font-montserrat text-3xl">Тарифы</p>
        </div>
        <div class="w-367.25 h-25.5 custom-gradient flex items-center gap-4 px-6">
          <div class="bg-blue-custom w-15 h-15 rounded-2xl" />
          <p class="font-montserrat text-3xl">Удалить аккаунт</p>
        </div>
      </div>
    </div>
  </div>
</template>
