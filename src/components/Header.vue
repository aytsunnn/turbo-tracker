<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// Изменяем логику: проверяем не только /dashboard, но и другие страницы личного кабинета
const isDashboard = computed(() => {
  return (
    route.path === '/dashboard' ||
    route.path.startsWith('/edit-search') ||
    route.path.startsWith('/search/') ||
    // добавьте другие пути личного кабинета при необходимости
    false
  )
})

const goHome = () => {
  router.push('/')
}

const goToDashboard = () => {
  router.push('/dashboard')
}

const scrollToSection = (event: Event, id: string) => {
  if (isDashboard.value) return

  event.preventDefault()
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
  isMobileMenuOpen.value = false
}

const scrollToTop = (event: Event) => {
  event.preventDefault()
  if (isDashboard.value) {
    router.push('/')
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  isMobileMenuOpen.value = false
}

const isMobileMenuOpen = ref(false)
</script>

<template>
  <header
    class="w-full h-auto bg-transparent lg:mt-8 lg:h-23.5 lg:py-0 py-4 px-4 lg:px-10 backdrop-blur-sm z-50"
  >
    <div class="container mx-auto flex justify-between items-center">
      <!-- Логотип -->
      <div class="flex flex-row gap-3 items-center cursor-pointer" @click="goHome">
        <img src="/images/Logo.svg" alt="Logo" class="w-10 lg:w-auto" />
        <div class="flex flex-col font-bold font-montserrat text-xl lg:text-2xl">
          <p>TURBO</p>
          <p>TRACER</p>
        </div>
      </div>

      <!-- Десктопное меню для главной страницы -->
      <nav
        v-if="!isDashboard"
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
          @click="goToDashboard"
          class="bg-blue-custom rounded-2xl items-center justify-center flex flex-row gap-2 lg:gap-4 w-28 lg:w-38.5 h-10 lg:h-14 px-4 hover:opacity-90 transition"
        >
          <img class="w-5 lg:w-7" src="/images/user.svg" alt="user" />
          <span class="font-inter font-semibold text-sm lg:text-xl">Войти</span>
        </button>
      </nav>

      <!-- Десктопное меню для dashboard и редактирования поиска -->
      <nav
        v-else
        class="hidden lg:flex flex-row items-center gap-8 lg:gap-12 font-inter text-base lg:text-lg"
      >
        <router-link to="/" class="hover:text-blue-custom transition whitespace-nowrap text-white">
          ГЛАВНАЯ
        </router-link>
        <router-link
          to="/dashboard"
          class="hover:text-blue-custom transition whitespace-nowrap text-white"
        >
          МОНИТОРИНГИ
        </router-link>
        <a href="#tariff" class="hover:text-blue-custom transition whitespace-nowrap text-white">
          ТАРИФ
        </a>
        <a href="#settings" class="hover:text-blue-custom transition whitespace-nowrap text-white">
          НАСТРОЙКИ
        </a>

        <button
          @click="goHome"
          class="bg-blue-custom rounded-2xl items-center justify-center flex flex-row gap-2 lg:gap-4 w-28 lg:w-38.5 h-10 lg:h-14 px-4 hover:opacity-90 transition"
        >
          <img class="w-5 lg:w-7" src="/images/user.svg" alt="user" />
          <span class="font-inter font-semibold text-sm lg:text-xl">Выйти</span>
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
            'w-6 h-0.5 transition-all duration-300',
            isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '',
            isDashboard ? 'bg-white' : 'bg-white',
          ]"
        ></span>
        <span
          :class="[
            'w-6 h-0.5 my-1.5 transition-all duration-300',
            isMobileMenuOpen ? 'opacity-0' : '',
            isDashboard ? 'bg-white' : 'bg-white',
          ]"
        ></span>
        <span
          :class="[
            'w-6 h-0.5 transition-all duration-300',
            isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : '',
            isDashboard ? 'bg-white' : 'bg-white',
          ]"
        ></span>
      </button>
    </div>

    <!-- Мобильное меню: выпадающий список для главной страницы -->
    <div
      v-if="!isDashboard"
      :class="[
        'lg:hidden overflow-hidden transition-all duration-300',
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
      ]"
    >
      <div class="container mx-auto py-4 flex flex-col items-center gap-4">
        <a
          href="#top"
          @click="scrollToTop"
          class="text-lg hover:text-blue-custom transition py-2 text-white"
          >ГЛАВНАЯ</a
        >
        <a
          href="#for-whom"
          @click="(e) => scrollToSection(e, 'for-whom')"
          class="text-lg hover:text-blue-custom transition py-2 text-white"
          >ДЛЯ КОГО</a
        >
        <a
          href="#monitoring"
          @click="(e) => scrollToSection(e, 'monitoring')"
          class="text-lg hover:text-blue-custom transition py-2 text-white"
          >МОНИТОРИНГ</a
        >
        <a
          href="#tariffs"
          @click="(e) => scrollToSection(e, 'tariffs')"
          class="text-lg hover:text-blue-custom transition py-2 text-white"
          >ТАРИФЫ</a
        >
        <a
          href="#contacts"
          @click="(e) => scrollToSection(e, 'contacts')"
          class="text-lg hover:text-blue-custom transition py-2 text-white"
          >КОНТАКТЫ</a
        >
        <button
          @click="goToDashboard"
          class="bg-blue-custom rounded-2xl items-center justify-center flex flex-row gap-2 w-full max-w-xs h-12 mt-2 px-4 hover:opacity-90 transition"
        >
          <img class="w-6" src="/images/user.svg" alt="user" />
          <span class="font-inter font-semibold text-base text-white">Войти</span>
        </button>
      </div>
    </div>

    <!-- Мобильное меню: выпадающий список для dashboard и редактирования поиска -->
    <div
      v-else
      :class="[
        'lg:hidden overflow-hidden transition-all duration-300',
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
      ]"
    >
      <div class="container mx-auto py-4 flex flex-col items-center gap-4">
        <router-link
          to="/"
          @click="isMobileMenuOpen = false"
          class="text-lg hover:text-blue-custom transition py-2 text-white w-full text-center"
        >
          ГЛАВНАЯ
        </router-link>
        <router-link
          to="/dashboard"
          @click="isMobileMenuOpen = false"
          class="text-lg hover:text-blue-custom transition py-2 text-white w-full text-center"
        >
          МОНИТОРИНГИ
        </router-link>
        <a
          href="#tariff"
          @click="isMobileMenuOpen = false"
          class="text-lg hover:text-blue-custom transition py-2 text-white w-full text-center"
        >
          ТАРИФ
        </a>
        <a
          href="#settings"
          @click="isMobileMenuOpen = false"
          class="text-lg hover:text-blue-custom transition py-2 text-white w-full text-center"
        >
          НАСТРОЙКИ
        </a>
        <a
          href="#profile"
          @click="isMobileMenuOpen = false"
          class="text-lg hover:text-blue-custom transition py-2 text-white w-full text-center"
        >
          ПРОФИЛЬ
        </a>

        <button
          @click="goHome"
          class="bg-blue-custom rounded-2xl items-center justify-center flex flex-row gap-2 w-full max-w-xs h-12 mt-2 px-4 hover:opacity-90 transition"
        >
          <span class="font-inter font-semibold text-base text-white">Выйти</span>
        </button>
      </div>
    </div>
  </header>
</template>
