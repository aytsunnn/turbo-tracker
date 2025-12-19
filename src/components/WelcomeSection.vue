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
    class="w-full h-52 rounded-2xl flex flex-col justify-center items-start px-13 gap-4"
    style="background: linear-gradient(90deg, rgba(20, 76, 125, 1) 0%, rgba(36, 138, 227, 1) 100%)"
  >
    <p class="font-montserrat font-semibold text-4xl">ПРИВЕТ, {{ userName.toUpperCase() }}!</p>
    <p class="font-montserrat font-light text-2xl">
      Вас приветствует команда TURBO TRACKER. Очень рады, что вы с нами! Наш сервис активно
      развивается и<br />
      растёт, будем благодарны обратной связи. Желаем вам успешных и лёгких сделок.
    </p>
  </div>
</template>
