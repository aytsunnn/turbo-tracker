<script setup lang="ts"></script>

<template>
  <footer id="contacts" class="w-full bg-[#D9D9D9]/30 text-white mt-8 lg:mt-29.5">
    <div class="container mx-auto h-full px-4 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 py-6 lg:py-8">
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
            Turbo tracker помогает вам мгновенно узнавать о новых предложениях на популярных
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
