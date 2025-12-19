<script setup lang="ts">
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import BackgroundShadows from './components/BackgroundShadows.vue'

const scrollToSection = (event: Event, id: string) => {
  event.preventDefault()
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="page-root">
    <BackgroundShadows />

    <div id="top" class="flex justify-center flex-col items-center px-4 lg:px-0">
      <!-- Главная секция -->
      <div id="top" class="flex justify-center flex-col items-center px-4 lg:px-0">
        <Header />

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

          <img
            class="w-48 lg:w-173 h-auto lg:h-196 mt-8 lg:mt-0"
            src="/images/bg-phone.svg"
            alt="bg-phone"
          />
        </div>
      </div>

      <!-- Статистика -->
      <div class="flex justify-center w-full mt-8 px-4 lg:px-0">
        <div
          class="w-full max-w-380 h-auto lg:h-46 bg-glass flex items-center justify-center py-6 lg:py-0"
        >
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div class="flex flex-col items-center text-center">
              <p class="text-4xl lg:text-5xl font-semibold font-inter mb-3">0.1</p>
              <div class="bg-white w-16 lg:w-20 h-1.5 rounded-full mb-3"></div>
              <p class="text-base lg:text-lg font-inter font-semibold">
                Секунды - скорость мониторинга
              </p>
            </div>

            <div class="flex flex-col items-center text-center">
              <p class="text-4xl lg:text-5xl font-semibold font-inter text-green-custom mb-3">5</p>
              <div class="bg-white w-16 lg:w-20 h-1.5 rounded-full mb-3"></div>
              <p class="text-base lg:text-lg font-inter font-semibold">Лет на рынке</p>
            </div>

            <div class="flex flex-col items-center text-center">
              <p class="text-4xl lg:text-5xl font-semibold font-inter text-purple-custom mb-3">
                1000+
              </p>
              <div class="bg-white w-16 lg:w-20 h-1.5 rounded-full mb-3"></div>
              <p class="text-base lg:text-lg font-inter font-semibold">Довольных пользователей</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Для кого -->
      <div id="for-whom" class="mt-8 lg:mt-53.5 flex flex-col items-center px-4 lg:px-0">
        <p class="font-montserrat text-2xl lg:text-4xl font-regular text-center mb-8 lg:mb-12">
          ДЛЯ КОГО НАШ СЕРВИС?
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <!-- Карточка 1 -->
          <div
            class="bg-glass1 w-full max-w-115 h-auto lg:h-105 rounded-2xl flex flex-col items-center justify-center text-center p-6 lg:p-8 hover-scale"
          >
            <div class="flex items-center justify-center mb-4 lg:mb-6">
              <img class="w-12 lg:w-17.5" src="/images/home.svg" alt="for-who-1" />
            </div>
            <p class="font-montserrat font-bold text-xl lg:text-3xl mb-3 lg:mb-4 italic">
              Риелторы
            </p>
            <p class="font-montserrat font-light text-sm lg:text-lg leading-relaxed">
              Узнавайте о новых объявлениях раньше<br />
              других и предлагайте свои услуги<br />
              первыми, существенно увеличивая<br />
              шансы на успешную сделку.
            </p>
          </div>

          <!-- Карточка 2 -->
          <div
            class="bg-glass1 w-full max-w-115 h-auto lg:h-105 rounded-2xl flex flex-col items-center justify-center text-center p-6 lg:p-8 hover-scale"
          >
            <div class="flex items-center justify-center mb-4 lg:mb-6">
              <img class="w-10 lg:w-15.5" src="/images/money.svg" alt="for-who-2" />
            </div>
            <p class="font-montserrat font-bold text-xl lg:text-3xl mb-3 lg:mb-4 italic">
              Перекупы
            </p>
            <p class="font-montserrat font-light text-sm lg:text-lg leading-relaxed">
              Быстрее покупаете, быстрее продаете,<br />
              быстрее зарабатываете. Наш сервис<br />
              помогает не упустить выгодные<br />
              предложения на рынке.
            </p>
          </div>

          <!-- Карточка 3 -->
          <div
            class="bg-glass1 w-full max-w-115 h-auto lg:h-105 rounded-2xl flex flex-col items-center justify-center text-center p-6 lg:p-8 hover-scale"
          >
            <div class="flex items-center justify-center mb-4 lg:mb-6">
              <img class="w-14 lg:w-20.5" src="/images/people.svg" alt="for-who-3" />
            </div>
            <p class="font-montserrat font-bold text-xl lg:text-3xl mb-3 lg:mb-4 italic">
              Покупатели
            </p>
            <p class="font-montserrat font-light text-sm lg:text-lg leading-relaxed">
              Настраивайте нужные критерии<br />
              поиска и покупайте выгодно.<br />
              Получайте уведомления только о тех<br />
              объявлениях, которые вам<br />
              действительно интересны.
            </p>
          </div>
        </div>
      </div>

      <!-- Настраивай поиск -->
      <div id="monitoring" class="flex flex-col items-center mt-8 lg:mt-53.5 px-4 lg:px-0">
        <p class="font-montserrat text-2xl lg:text-4xl font-regular text-center mb-8 lg:mb-12">
          НАСТРАИВАЙ ПОИСК ПОД СЕБЯ
        </p>

        <div
          class="bg-glass2 px-4 lg:px-62 py-6 lg:py-30 w-full max-w-full lg:max-w-full h-auto lg:h-172 flex flex-col justify-between"
        >
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-21">
            <!-- Карточка 1 -->
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

            <!-- Карточка 2 -->
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

            <!-- Карточка 3 -->
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

            <!-- Карточка 4 -->
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

            <!-- Карточка 5 -->
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

            <!-- Карточка 6 -->
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

      <!-- Преимущества -->
      <div class="flex flex-col items-center mt-8 lg:mt-53.5 px-4 lg:px-0">
        <p class="font-montserrat text-2xl lg:text-4xl font-regular text-center mb-8 lg:mb-12">
          НАШИ ПРЕИМУЩЕСТВА
        </p>

        <div class="flex flex-col lg:flex-row justify-center gap-4 lg:gap-8 w-full">
          <div
            class="bg-glass w-full lg:w-182.5 h-auto lg:h-105 p-6 lg:p-8 flex flex-col lg:flex-row justify-between items-start"
          >
            <div class="flex flex-col lg:flex-row items-center w-full">
              <p
                class="font-montserrat font-bold italic text-3xl lg:text-5xl w-full lg:w-[calc(100%-160px)] mb-4 lg:mb-0"
              >
                Самый быстрый<br />
                сервис
              </p>
              <img class="w-24 lg:w-40 ml-auto" src="/images/lightning2.svg" />
            </div>

            <p
              class="font-montserrat font-light text-lg lg:text-2xl w-full mt-4 lg:mt-0 lg:absolute lg:bottom-8 lg:left-8"
            >
              Наш сервис может мониторить с частотой<br />
              <span class="font-bold">до 0.1 секунды</span>, что делает его самым быстрым<br />
              на рынке и дает вам неоспоримое<br />
              преимущество перед конкурентами.
            </p>
          </div>

          <div class="flex flex-col gap-4 lg:gap-8 w-full lg:w-auto">
            <div class="bg-glass1 w-full lg:w-182.5 h-auto lg:h-47.5 p-6 lg:p-8">
              <p class="font-montserrat font-bold italic text-xl lg:text-3xl pb-2">
                Мониторинг разных площадок
              </p>
              <p class="font-montserrat font-light text-base lg:text-2xl">
                Наша система позволяет мониторить самые<br />
                популярные сайты с объявлениями.
              </p>
            </div>

            <div class="bg-glass1 w-full lg:w-182.5 h-auto lg:h-47.5 p-6 lg:p-8">
              <p class="font-montserrat font-bold italic text-xl lg:text-3xl pb-2">
                Доступные цены
              </p>
              <p class="font-montserrat font-light text-base lg:text-2xl">
                Наша система сделана таким образом, что мы<br />
                можем предлагать самые низкие цены на рынке.<br />
                Доступные тарифы для любого бюджета.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Тарифы -->
      <div id="tariffs" class="mt-8 lg:mt-57.5 mb-8 lg:mb-20 px-4 lg:px-0">
        <p class="font-montserrat font-semobold text-center text-2xl lg:text-4xl">
          ВЫБЕРИТЕ СВОЙ ТАРИФ
        </p>
        <p class="text-center font-montserrat font-light text-base lg:text-2xl mt-2 lg:mt-0">
          Вы получаете доступ на 31 день, даже если это февраль!<br />
          Все доступные тарифы доступны в нашем телеграм канале
        </p>
      </div>

      <div class="flex flex-col items-center px-4 lg:px-0">
        <div class="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-4">
          <!-- Левая карточка (бесплатный) -->
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

          <!-- Центральная карточка (1 секунда) -->
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

          <!-- Правая карточка (другие тарифы) -->
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

      <!-- FAQ -->
      <div class="flex justify-center mt-8 lg:mt-44.5 px-4 lg:px-0">
        <div
          class="w-full max-w-382 h-auto lg:h-90.5 flex flex-col lg:flex-row justify-between gap-6 lg:gap-12"
        >
          <div class="flex flex-col justify-between mb-6 lg:mb-0">
            <p class="font-montserrat font-bold text-2xl lg:text-3xl leading-tight">
              ЧАСТО<br />ЗАДАВАЕМЫЕ<br />ВОПРОСЫ
            </p>
            <button
              class="w-full lg:w-91 h-14 lg:h-17 rounded-full bg-blue-custom text-base lg:text-lg font-inter font-semibold mt-4 lg:mt-0"
            >
              Связаться с нами<br />для консультации
            </button>
          </div>

          <div
            class="bg-glass rounded-3xl lg:rounded-6xl w-full lg:w-261 h-full p-4 lg:p-6 flex flex-col justify-between"
          >
            <div class="flex items-center gap-3 lg:gap-4 py-2 lg:py-3">
              <div class="w-8 lg:w-9.75 h-1 bg-[#D9D9D9] flex-shrink-0" />
              <p class="font-montserrat text-base lg:text-lg">Как пользоваться сервисом?</p>
            </div>

            <div class="flex items-center gap-3 lg:gap-4 py-2 lg:py-3">
              <div class="w-8 lg:w-9.75 h-1 bg-[#D9D9D9] flex-shrink-0" />
              <p class="font-montserrat text-base lg:text-lg">Что это за секунды в тарифах?</p>
            </div>

            <div class="flex items-center gap-3 lg:gap-4 py-2 lg:py-3">
              <div class="w-8 lg:w-9.75 h-1 bg-[#D9D9D9] flex-shrink-0" />
              <p class="font-montserrat text-base lg:text-lg">
                Можно ли сделать так, чтобы уведомления приходили группе людей, а не одному?
              </p>
            </div>

            <div class="flex items-center gap-3 lg:gap-4 py-2 lg:py-3">
              <div class="w-8 lg:w-9.75 h-1 bg-[#D9D9D9] flex-shrink-0" />
              <p class="font-montserrat text-base lg:text-lg">
                Как работать со стоп или целевыми словами?
              </p>
            </div>

            <div class="flex items-center gap-3 lg:gap-4 py-2 lg:py-3">
              <div class="w-8 lg:w-9.75 h-1 bg-[#D9D9D9] flex-shrink-0" />
              <p class="font-montserrat text-base lg:text-lg">
                Сколько поисков я могу подключить и можно ли их менять?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer id="contacts" />
  </div>
</template>

<style scoped>
/* Адаптивные стили для скролл-отступов */
#for-whom,
#monitoring,
#tariffs,
#contacts {
  scroll-margin-top: 80px; /* Отступ для фиксированного хедера */
}

@media (max-width: 768px) {
  #for-whom,
  #monitoring,
  #tariffs,
  #contacts {
    scroll-margin-top: 60px;
  }
}
</style>
