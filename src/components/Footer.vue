<script setup lang="ts"></script>

<template>
  <footer id="contacts" class="w-full bg-[#D9D9D9]/30 text-white mt-20 md:mt-30 lg:mt-29.5">
    <div class="container mx-auto h-full px-4 lg:px-8">
      <!-- Мобильная и планшетная версия (sm и md) -->
      <div class="lg:hidden py-6 md:py-8">
        <!-- Две колонки для контактов и полезных ссылок -->
        <div class="grid grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
          <!-- Колонка 1: Контакты -->
          <div class="flex flex-col items-start md:ml-13.75">
            <h3 class="font-montserrat text-sm md:text-2xl ml-8 md:ml-9 mb-3 md:mb-4 stroke-text">
              КОНТАКТЫ
            </h3>
            <div class="flex flex-col gap-2 sm:gap-1 md:gap-1 items-start">
              <!-- Телеграм бот -->
              <div class="flex items-center gap-2 sm:gap-1 md:gap-1">
                <img
                  src="/images/tg-logo.svg"
                  alt="Telegram"
                  class="w-6 sm:w-6 md:w-8 h-6 sm:h-6 md:h-8"
                />
                <a
                  href="https://t.me/turbotracker_bot"
                  class="font-montserrat font-light text-xs md:text-base hover:text-blue-400 transition whitespace-nowrap"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Telegram Bot
                </a>
              </div>

              <!-- Телеграм поддержка -->
              <div class="flex items-center gap-2 sm:gap-1 md:gap-1">
                <img
                  src="/images/tg-logo.svg"
                  alt="Telegram"
                  class="w-6 sm:w-6 md:w-8 h-6 sm:h-6 md:h-8"
                />
                <a
                  href="https://t.me/turbotracker_support"
                  class="font-montserrat font-light text-xs md:text-base hover:text-blue-400 transition whitespace-nowrap"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Telegram поддержка
                </a>
              </div>

              <!-- Группа ВК (для md версии прижата к левому краю) -->
              <div class="flex items-center gap-2 sm:gap-1 md:gap-1">
                <img
                  src="/images/vk-logo.svg"
                  alt="VK"
                  class="w-6 sm:w-6 md:w-8 h-6 sm:h-6 md:h-8"
                />
                <a
                  href="https://vk.com/turbotracker"
                  class="font-montserrat font-light text-xs md:text-base hover:text-blue-400 transition whitespace-nowrap"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Группа ВК
                </a>
              </div>
            </div>
          </div>

          <!-- Колонка 2: Полезные ссылки -->
          <div class="flex flex-col items-start">
            <h3 class="font-montserrat text-sm md:text-2xl mb-3 md:mb-4 stroke-text">
              ПОЛЕЗНЫЕ ССЫЛКИ
            </h3>
            <div class="flex flex-col gap-2 md:gap-3 items-start text-start">
              <a
                href="/user-agreement"
                class="font-montserrat font-light text-xs md:text-base hover:text-blue-400 transition sm:text-left md:text-left"
              >
                Пользовательское соглашение
              </a>
              <a
                href="/privacy-policy"
                class="font-montserrat font-light text-xs md:text-base hover:text-blue-400 transition sm:text-left md:text-left"
              >
                Политика конфиденциальности
              </a>
              <a
                href="https://turbotracker.ru"
                class="font-montserrat font-light text-xs md:text-base hover:text-blue-400 transition sm:text-left md:text-left"
                target="_blank"
                rel="noopener noreferrer"
              >
                TurboTracker.ru
              </a>
            </div>
          </div>
        </div>

        <!-- Логотип и описание под колонками -->
        <div class="flex flex-col items-center">
          <div class="flex flex-row items-center gap-4 md:gap-6 lg:gap-8">
            <!-- Логотип -->
            <div>
              <img src="/images/Logo.svg" alt="Logo" class="w-24 md:w-38 h-24 md:h-38" />
            </div>

            <!-- О компании -->
            <div class="text-left">
              <h3 class="font-montserrat text-sm md:text-2xl mb-3 stroke-text">О КОМПАНИИ</h3>
              <p class="font-montserrat font-light text-[10px] md:text-base leading-relaxed">
                Turbo tracker помогает вам<br class="sm:hidden block" />
                мгновенно узнавать о<br class="hidden sm:block" />
                новых предложениях на<br class="sm:hidden block" />
                популярных<br class="hidden sm:block" />
                площадках.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Десктопная версия (lg) -->
      <div
        class="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 py-6 lg:py-8"
      >
        <!-- Колонка 1: Логотип -->
        <div class="flex flex-col items-center lg:items-start">
          <img src="/images/Logo.svg" alt="Logo" class="w-24 lg:w-34.5 h-24 lg:h-34.5 mb-4" />
        </div>

        <!-- Колонка 2: О компании -->
        <div class="flex flex-col items-center lg:items-start">
          <h3 class="font-montserrat text-xl lg:text-2xl mb-3 lg:mb-4 stroke-text">О КОМПАНИИ</h3>
          <p
            class="font-montserrat font-light text-sm lg:text-base leading-relaxed text-center lg:text-left"
          >
            Turbo tracker помогает вам<br />
            мгновенно узнавать о новых<br />
            предложениях на популярных<br />
            площадках.
          </p>
        </div>

        <!-- Колонка 3: Контакты -->
        <div class="flex flex-col items-center lg:items-start">
          <h3 class="font-montserrat text-xl lg:text-2xl mb-3 lg:mb-4 stroke-text lg:ml-8">
            КОНТАКТЫ
          </h3>
          <div class="flex flex-col gap-2 lg:gap-1">
            <!-- Поддержка в Telegram -->
            <div class="flex items-center gap-2 lg:gap-1">
              <img src="/images/tg-logo.svg" alt="Telegram" class="w-6 lg:w-8 h-6 lg:h-8" />
              <a
                href="https://t.me/turbotracker_support"
                class="font-montserrat font-light text-sm lg:text-base hover:text-blue-400 transition whitespace-nowrap"
                target="_blank"
                rel="noopener noreferrer"
              >
                Поддержка
              </a>
            </div>

            <!-- Бот в Telegram -->
            <div class="flex items-center gap-2 lg:gap-1">
              <img src="/images/tg-logo.svg" alt="Telegram" class="w-6 lg:w-8 h-6 lg:h-8" />
              <a
                href="https://t.me/turbotracker_bot"
                class="font-montserrat font-light text-sm lg:text-base hover:text-blue-400 transition whitespace-nowrap"
                target="_blank"
                rel="noopener noreferrer"
              >
                Бот
              </a>
            </div>

            <!-- ВКонтакте -->
            <div class="flex items-center gap-2 lg:gap-1">
              <img src="/images/vk-logo.svg" alt="VK" class="w-6 lg:w-8 h-6 lg:h-8" />
              <a
                href="https://vk.com/turbotracker"
                class="font-montserrat font-light text-sm lg:text-base hover:text-blue-400 transition whitespace-nowrap"
                target="_blank"
                rel="noopener noreferrer"
              >
                ВКонтакте
              </a>
            </div>
          </div>
        </div>

        <!-- Колонка 4: Полезные ссылки -->
        <div class="flex flex-col items-center lg:items-start">
          <h3 class="font-montserrat text-xl lg:text-2xl mb-3 lg:mb-4 stroke-text lg:ml-8">
            ПОЛЕЗНЫЕ ССЫЛКИ
          </h3>
          <div class="flex flex-col gap-2 lg:gap-3 items-center lg:items-start">
            <a
              href="/user-agreement"
              class="font-montserrat font-light text-sm lg:text-base hover:text-blue-400 transition text-center lg:text-left"
            >
              Пользовательское соглашение
            </a>
            <a
              href="/privacy-policy"
              class="font-montserrat font-light text-sm lg:text-base hover:text-blue-400 transition text-center lg:text-left"
            >
              Политика конфиденциальности
            </a>
            <a
              href="https://turbotracker.ru"
              class="font-montserrat font-light text-sm lg:text-base hover:text-blue-400 transition text-center lg:text-left"
              target="_blank"
              rel="noopener noreferrer"
            >
              TurboTracker.ru
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Адаптивные отступы для якорных ссылок */
#contacts {
  scroll-margin-top: 60px;
}

@media (min-width: 1024px) {
  #contacts {
    scroll-margin-top: 80px;
  }
}
</style>
