<template>
  <div>
    <div id="tariffs" class="mt-8 lg:mt-57.5 mb-8 lg:mb-20 px-4 lg:px-0">
      <p class="font-montserrat font-semibold text-center text-2xl lg:text-4xl">
        ВЫБЕРИТЕ СВОЙ ТАРИФ
      </p>
      <p class="text-center font-montserrat font-light text-base lg:text-2xl mt-2 lg:mt-0">
        Вы получаете доступ на 31 день, даже если это февраль!<br />
        Все доступные тарифы доступны в нашем телеграм канале
      </p>
    </div>

    <div class="flex flex-col items-center px-4 lg:px-0">
      <div class="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-4">
        <!-- Free Card -->
        <div
          class="w-full lg:w-123 h-auto lg:h-148 rounded-2xl p-6 lg:p-8 flex flex-col justify-between relative overflow-hidden"
          style="
            backdrop-filter: blur(25.2px);
            border: 1px rgba(255, 255, 255, 0.01);
            background:
              linear-gradient(90deg, rgba(255, 255, 255, 0.25) 0%, rgba(153, 153, 153, 0.1) 100%),
              rgba(0, 0, 0, 0.3);
          "
        >
          <div>
            <p class="font-montserrat font-bold italic text-2xl lg:text-4xl mb-6 lg:mb-8">
              БЕСПЛАТНЫЙ
            </p>
            <div class="flex flex-row items-start gap-2">
              <p class="font-montserrat text-4xl lg:text-5xl mb-6 lg:mb-8">0₽</p>
              <p class="font-montserrat text-lg lg:text-xl mt-2">НА 24 ЧАСА</p>
            </div>
            <div class="w-full lg:w-90 h-0.5 bg-white/20 mb-4" />
            <ul class="font-montserrat text-base lg:text-xl space-y-3 lg:space-y-4">
              <li class="flex items-start lg:items-center gap-3">
                <img class="w-8 h-8 lg:w-12 lg:h-12 mt-1" src="/images/check.svg" alt="check" />
                <span>Скорость мониторинга 1 секунда</span>
              </li>
              <li class="flex items-start lg:items-center gap-3">
                <img class="w-8 h-8 lg:w-12 lg:h-12 mt-1" src="/images/check.svg" alt="check" />
                <span>
                  Мониторинг по выбранным<br />
                  фильтрам каждую секунду.
                </span>
              </li>
              <li class="flex items-start lg:items-center gap-3">
                <img class="w-8 h-8 lg:w-12 lg:h-12 mt-1" src="/images/check.svg" alt="check" />
                <span>Уведомления в Telegram</span>
              </li>
              <li class="flex items-start lg:items-center gap-3">
                <img class="w-8 h-8 lg:w-12 lg:h-12 mt-1" src="/images/check.svg" alt="check" />
                <span>Сервис поддержки</span>
              </li>
            </ul>
          </div>

          <button
            class="bg-blue-custom rounded-full items-center justify-center w-full lg:w-61.5 h-16 lg:h-20.75 mt-6 lg:mt-8 mx-auto py-3"
          >
            <p class="font-inter font-semibold text-lg lg:text-xl">Подключить<br />Бесплатно</p>
          </button>
        </div>

        <!-- 1 Second Card -->
        <div
          class="w-full lg:w-139 h-auto lg:h-172 p-6 lg:p-8 bg-glass flex flex-col justify-between relative overflow-hidden mt-6 lg:mt-0"
          style="backdrop-filter: blur(25.2px); border: 1px solid rgba(255, 255, 255, 0.01)"
        >
          <div class="absolute top-6 lg:top-10 -right-8 lg:-right-16">
            <div
              class="bg-[#D9D9D9] text-blue-custom font-montserrat font-bold text-xl lg:text-3xl px-16 lg:px-24 py-1 lg:py-2 transform rotate-40 shadow-md"
            >
              -20%
            </div>
          </div>

          <div>
            <p class="font-montserrat font-bold italic text-2xl lg:text-4xl mb-6 lg:mb-8">
              1 СЕКУНДА
            </p>
            <div class="flex flex-row items-start gap-2">
              <p class="font-montserrat text-4xl lg:text-5xl mb-6 lg:mb-8">1390₽</p>
              <p class="font-montserrat text-lg lg:text-xl mt-2">/месяц</p>
            </div>
            <div class="w-full lg:w-90 h-0.5 bg-white/20 mb-4" />
            <ul class="font-montserrat text-base lg:text-xl space-y-3 lg:space-y-4">
              <li class="flex items-start lg:items-center gap-3">
                <img class="w-8 h-8 lg:w-12 lg:h-12 mt-1" src="/images/check.svg" alt="check" />
                <span>Скорость мониторинга 1 секунда</span>
              </li>
              <li class="flex items-start lg:items-center gap-3">
                <img class="w-8 h-8 lg:w-12 lg:h-12 mt-1" src="/images/check.svg" alt="check" />
                <span>
                  Мониторинг по выбранным<br />
                  фильтрам каждую секунду.
                </span>
              </li>
              <li class="flex items-start lg:items-center gap-3">
                <img class="w-8 h-8 lg:w-12 lg:h-12 mt-1" src="/images/check.svg" alt="check" />
                <span>Уведомления в Telegram</span>
              </li>
              <li class="flex items-start lg:items-center gap-3">
                <img class="w-8 h-8 lg:w-12 lg:h-12 mt-1" src="/images/check.svg" alt="check" />
                <span>Сервис поддержки</span>
              </li>
            </ul>
          </div>

          <button
            class="bg-blue-custom rounded-full items-center justify-center flex gap-2 lg:gap-4 w-full lg:w-91.5 h-16 lg:h-21 mt-6 lg:mt-8 mx-auto py-3"
          >
            <p class="font-inter font-semibold text-lg lg:text-xl">Подключить</p>
          </button>
        </div>

        <!-- Other Tariffs Card -->
        <div
          class="w-full lg:w-123 h-auto lg:h-148 rounded-2xl p-6 lg:p-8 flex flex-col justify-between relative overflow-hidden mt-6 lg:mt-0"
          style="
            backdrop-filter: blur(25.2px);
            border: 1px rgba(255, 255, 255, 0.01);
            background:
              linear-gradient(90deg, rgba(153, 153, 153, 0.1) 0%, rgba(255, 255, 255, 0.25) 100%),
              rgba(0, 0, 0, 0.3);
          "
        >
          <div>
            <p
              class="font-montserrat font-bold italic text-2xl lg:text-4xl mt-2 lg:mt-4 mb-6 lg:mb-8"
            >
              ДРУГИЕ ТАРИФЫ
            </p>
            <div class="w-full lg:w-90 h-0.5 bg-white/20 mb-4" />
            <ul class="font-montserrat text-base lg:text-xl space-y-3 lg:space-y-4">
              <li class="flex items-start lg:items-center gap-3">
                <img class="w-8 h-8 lg:w-12 lg:h-12 mt-1" src="/images/check.svg" alt="check" />
                <span
                  >Выбери свою скорость,<br />
                  подходящую под твой рынок</span
                >
              </li>
              <li class="flex items-start lg:items-center gap-3">
                <img class="w-8 h-8 lg:w-12 lg:h-12 mt-1" src="/images/check.svg" alt="check" />
                <span>
                  Скорость мониторинга от 0.1 сек<br />
                  до часа
                </span>
              </li>
              <li class="flex items-start lg:items-center gap-3">
                <img class="w-8 h-8 lg:w-12 lg:h-12 mt-1" src="/images/check.svg" alt="check" />
                <span>Командное подключение</span>
              </li>
              <li class="flex items-start lg:items-center gap-3">
                <img class="w-8 h-8 lg:w-12 lg:h-12 mt-1" src="/images/check.svg" alt="check" />
                <span>Покупка категорий</span>
              </li>
            </ul>
          </div>
          <button
            class="bg-blue-custom rounded-full items-center justify-center w-full lg:w-61.5 h-16 lg:h-20.75 mt-6 lg:mt-8 mx-auto py-3"
          >
            <p class="font-inter font-semibold text-lg lg:text-xl">Посмотреть<br />Бесплатно</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
