<script setup lang="ts">
import { ref, onMounted } from 'vue'

const userName = ref('Кирилл')

onMounted(() => {
  const savedName = localStorage.getItem('dashboard_user_name')
  if (savedName) {
    userName.value = savedName
  } else {
    localStorage.setItem('КИРИЛЛ', userName.value)
  }
})
</script>

<template>
  <div
    class="w-full min-h-40 sm:min-h-44 md:min-h-48 lg:min-h-52 rounded-xl sm:rounded-2xl flex flex-col justify-center items-start px-4 sm:px-6 md:px-8 lg:px-10 xl:px-13 gap-3 sm:gap-4 py-6 sm:py-8"
    style="background: linear-gradient(90deg, rgba(20, 76, 125, 1) 0%, rgba(36, 138, 227, 1) 100%)"
  >
    <p class="font-montserrat font-semibold text-2xl sm:text-3xl md:text-4xl">
      ПРИВЕТ, {{ userName.toUpperCase() }}!
    </p>
    <p
      class="font-montserrat font-light text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed"
    >
      Вас приветствует команда TURBO TRACKER. Очень рады, что вы с нами! Наш сервис активно
      развивается и растёт, будем благодарны обратной связи. Желаем вам успешных и лёгких сделок.
    </p>
  </div>
</template>
