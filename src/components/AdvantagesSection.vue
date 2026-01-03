<template>
  <div class="flex flex-col items-center mt-23.25 md:mt-30.25 lg:mt-53.5 px-7 md:px-14 lg:px-0">
    <p
      class="font-montserrat text-sm md:text-xl lg:text-4xl font-regular text-center mb-8 lg:mb-12"
    >
      НАШИ ПРЕИМУЩЕСТВА
    </p>

    <div class="flex flex-col md:flex-row justify-center gap-4 md:gap-6.5 lg:gap-16 w-full">
      <div
        class="bg-glass w-full md:w-79.25 lg:w-182.5 h-31 md:h-94 lg:h-105 px-6 py-2 md:p-6 lg:p-8 flex flex-col lg:justify-between items-start relative"
      >
        <!-- Для sm: иконка справа, заголовок и текст слева -->
        <div class="flex justify-between items-start w-full lg:flex md:block">
          <!-- Левая часть для sm -->
          <div class="flex flex-col md:block">
            <p
              class="font-montserrat font-bold italic text-sm md:text-base lg:text-5xl w-full mb-0"
            >
              Самый быстрый сервис
            </p>

            <p class="font-montserrat font-light text-[10px] md:hidden mt-1">
              Наш сервис может мониторить с частотой<br />
              <span class="font-bold">до 0.1 секунды</span>, что делает его самым быстрым<br />
              на рынке и дает вам неоспоримое<br />
              преимущество перед конкурентами.
            </p>
          </div>
          <img
            class="w-18 md:w-37 lg:w-40 md:absolute md:bottom-6 md:right-6 lg:static lg:ml-auto order-last"
            src="/images/lightning2.svg"
          />
        </div>

        <!-- Текст для md/lg -->
        <p
          class="hidden md:block font-montserrat font-light text-[10px] md:text-sm lg:text-2xl w-full mt-4 md:mt-2 lg:mt-0 lg:absolute lg:bottom-8 lg:left-8"
        >
          Наш сервис может мониторить с частотой<br />
          <span class="font-bold">до 0.1 секунды</span>, что делает его самым быстрым<br />
          на рынке и дает вам неоспоримое<br />
          преимущество перед конкурентами.
        </p>
      </div>

      <div class="flex flex-col gap-4 md:gap-6 lg:gap-10 md:w-79.25 lg:w-auto">
        <div class="bg-glass1 w-full lg:w-182.5 h-auto lg:h-47.5 py-2 md:py-5 lg:py-5 px-6">
          <p class="font-montserrat font-bold italic text-sm md:text-base lg:text-3xl pb-1">
            Мониторинг разных площадок
          </p>
          <p class="font-montserrat font-light text-[10px] md:text-sm lg:text-2xl">
            Наша система позволяет мониторить самые<br />
            популярные сайты с объявлениями.
          </p>
        </div>

        <div class="bg-glass1 w-full lg:w-182.5 h-auto lg:h-47.5 py-2 md:py-5 lg:py-5 px-6">
          <p class="font-montserrat font-bold italic text-sm md:text-base lg:text-3xl pb-1">
            Доступные цены
          </p>
          <p class="font-montserrat font-light text-[10px] md:text-sm lg:text-2xl">
            Наша система сделана таким образом, что мы<br />
            можем предлагать самые низкие цены на рынке.<br />
            Доступные тарифы для любого бюджета.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
