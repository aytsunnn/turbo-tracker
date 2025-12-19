<template>
  <div id="monitoring" class="flex flex-col items-center mt-8 lg:mt-53.5 px-4 lg:px-0">
    <p class="font-montserrat text-2xl lg:text-4xl font-regular text-center mb-8 lg:mb-12">
      НАСТРАИВАЙ ПОИСК ПОД СЕБЯ
    </p>

    <div class="bg-glass2 px-4 lg:px-62 py-6 lg:py-30 w-full max-w-full lg:max-w-full h-auto lg:h-172 flex flex-col justify-between">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-21">
        <!-- Card 1 -->
        <div class="flex items-start gap-3 lg:gap-4">
          <img class="w-16 lg:w-24" src="/images/filter.svg" alt="filter" />
          <div class="flex-1">
            <p class="font-montserrat font-bold text-lg lg:text-xl mb-2">Гибкие фильтры</p>
            <p class="font-montserrat font-light text-sm lg:text-base">
              Устанавливай фильтры под<br />
              любой свой запрос и получай<br />
              только релевантные результаты
            </p>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="flex items-start gap-3 lg:gap-4">
          <img class="w-10 lg:w-13" src="/images/basket.svg" alt="notification" />
          <div class="flex-1">
            <p class="font-montserrat font-bold text-lg lg:text-xl mb-2">Умное исключение</p>
            <p class="font-montserrat font-light text-sm lg:text-base">
              Исключай бесполезные<br />
              объявления с помощью<br />
              настраиваемых стоп-слов
            </p>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="flex items-start gap-3 lg:gap-4">
          <img class="w-8 lg:w-10.25" src="/images/star.svg" alt="search" />
          <div class="flex-1">
            <p class="font-montserrat font-bold text-lg lg:text-xl mb-2">Только новое</p>
            <p class="font-montserrat font-light text-sm lg:text-base">
              Ищи только новые<br />
              объявления, без повторов и<br />
              поднятых за деньги
            </p>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="flex items-start gap-3 lg:gap-4">
          <img class="w-10 lg:w-12.5" src="/images/block.svg" alt="location" />
          <div class="flex-1">
            <p class="font-montserrat font-bold text-lg lg:text-xl mb-2">Блок продавцов</p>
            <p class="font-montserrat font-light text-sm lg:text-base">
              Исключи нежелательных<br />
              продавцов из результатов<br />
              поиска
            </p>
          </div>
        </div>

        <!-- Card 5 -->
        <div class="flex items-start gap-3 lg:gap-4">
          <img class="w-7 lg:w-8.75" src="/images/description.svg" alt="schedule" />
          <div class="flex-1">
            <p class="font-montserrat font-bold text-lg lg:text-xl mb-2">Детальное описание</p>
            <p class="font-montserrat font-light text-sm lg:text-base">
              Получай подробное описание<br />
              объявлений для быстрого<br />
              принятия решений
            </p>
          </div>
        </div>

        <!-- Card 6 -->
        <div class="flex items-start gap-3 lg:gap-4">
          <img class="w-12 lg:w-16.25" src="/images/team.svg" alt="analytics" />
          <div class="flex-1">
            <p class="font-montserrat font-bold text-lg lg:text-xl mb-2">Командный доступ</p>
            <p class="font-montserrat font-light text-sm lg:text-base">
              Получай объявления вместе<br />
              с коллегами в общем чате
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row justify-center items-center gap-4 mt-6 lg:mt-0">
        <button
          class="bg-blue-custom p-4 rounded-full flex items-center justify-center text-lg lg:text-xl font-inter font-semibold gap-2 w-full lg:w-91.5 h-16 lg:h-21"
        >
          Начать мониторинг
        </button>
        <button
          class="bg-blue-custom p-4 rounded-full flex items-center justify-center h-16 lg:h-21 w-16 lg:w-21"
        >
          <img src="/images/arrowLink.svg" alt="link" />
        </button>
      </div>
    </div>
  </div>
</template>