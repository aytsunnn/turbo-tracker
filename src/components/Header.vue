<script setup lang="ts">
import { ref } from 'vue'

// Функция для плавной прокрутки
const scrollToSection = (event: Event, id: string) => {
  event.preventDefault()
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
  // Закрываем мобильное меню после клика
  isMobileMenuOpen.value = false
}

// Состояние для мобильного меню
const isMobileMenuOpen = ref(false)

// Функция для прокрутки наверх
const scrollToTop = (event: Event) => {
  event.preventDefault()
  window.scrollTo({ top: 0, behavior: 'smooth' })
  isMobileMenuOpen.value = false
}
</script>

<template>
  <header
    class="w-full h-auto mt-0 lg:mt-8 lg:h-23.5 py-4 lg:py-0 px-4 lg:px-10 backdrop-blur-sm z-50"
  >
    <div class="container mx-auto flex justify-between items-center">
      <!-- Логотип -->
      <div class="flex flex-row gap-3 items-center">
        <img src="/images/Logo.svg" alt="Logo" class="w-10 lg:w-auto" />
        <div class="flex flex-col font-bold font-montserrat text-xl lg:text-2xl">
          <p>TURBO</p>
          <p>TRACER</p>
        </div>
      </div>

      <!-- Десктопное меню -->
      <nav
        class="hidden lg:flex flex-row items-center gap-8 lg:gap-12 font-inter text-base lg:text-lg"
      >
        <a
          href="#top"
          @click="scrollToTop"
          class="hover:text-blue-custom transition whitespace-nowrap"
          >ГЛАВНАЯ</a
        >
        <a
          href="#for-whom"
          @click="(e) => scrollToSection(e, 'for-whom')"
          class="hover:text-blue-custom transition whitespace-nowrap"
          >ДЛЯ КОГО</a
        >
        <a
          href="#monitoring"
          @click="(e) => scrollToSection(e, 'monitoring')"
          class="hover:text-blue-custom transition whitespace-nowrap"
          >МОНИТОРИНГ</a
        >
        <a
          href="#tariffs"
          @click="(e) => scrollToSection(e, 'tariffs')"
          class="hover:text-blue-custom transition whitespace-nowrap"
          >ТАРИФЫ</a
        >
        <a
          href="#contacts"
          @click="(e) => scrollToSection(e, 'contacts')"
          class="hover:text-blue-custom transition whitespace-nowrap"
          >КОНТАКТЫ</a
        >
        <button
          class="bg-blue-custom rounded-2xl items-center justify-center flex flex-row gap-2 lg:gap-4 w-28 lg:w-38.5 h-10 lg:h-14 px-4 hover:opacity-90 transition"
        >
          <img class="w-5 lg:w-7" src="/images/user.svg" alt="user" />
          <span class="font-inter font-semibold text-sm lg:text-xl">Войти</span>
        </button>
      </nav>

      <!-- Мобильное меню: кнопка бургер -->
      <button
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="lg:hidden flex flex-col justify-center items-center w-10 h-10"
        aria-label="Меню"
      >
        <span
          :class="[
            'w-6 h-0.5 bg-white transition-all duration-300',
            isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '',
          ]"
        ></span>
        <span
          :class="[
            'w-6 h-0.5 bg-white my-1.5 transition-all duration-300',
            isMobileMenuOpen ? 'opacity-0' : '',
          ]"
        ></span>
        <span
          :class="[
            'w-6 h-0.5 bg-white transition-all duration-300',
            isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : '',
          ]"
        ></span>
      </button>
    </div>

    <!-- Мобильное меню: выпадающий список -->
    <div
      :class="[
        'lg:hidden overflow-hidden transition-all duration-300',
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
      ]"
    >
      <div class="container mx-auto py-4 flex flex-col items-center gap-4">
        <a href="#top" @click="scrollToTop" class="text-lg hover:text-blue-custom transition py-2"
          >ГЛАВНАЯ</a
        >
        <a
          href="#for-whom"
          @click="(e) => scrollToSection(e, 'for-whom')"
          class="text-lg hover:text-blue-custom transition py-2"
          >ДЛЯ КОГО</a
        >
        <a
          href="#monitoring"
          @click="(e) => scrollToSection(e, 'monitoring')"
          class="text-lg hover:text-blue-custom transition py-2"
          >МОНИТОРИНГ</a
        >
        <a
          href="#tariffs"
          @click="(e) => scrollToSection(e, 'tariffs')"
          class="text-lg hover:text-blue-custom transition py-2"
          >ТАРИФЫ</a
        >
        <a
          href="#contacts"
          @click="(e) => scrollToSection(e, 'contacts')"
          class="text-lg hover:text-blue-custom transition py-2"
          >КОНТАКТЫ</a
        >
        <button
          class="bg-blue-custom rounded-2xl items-center justify-center flex flex-row gap-2 w-full max-w-xs h-12 mt-2 px-4 hover:opacity-90 transition"
        >
          <img class="w-6" src="/images/user.svg" alt="user" />
          <span class="font-inter font-semibold text-base">Войти</span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Стили для плавной анимации */
.transition-all {
  transition-property: all;
}
</style>
