<script setup lang="ts"></script>

<template>
  <header class="justify-between flex items-center w-380 h-23.5 m-10">
    <div class="flex flex-row gap-3 items-center">
      <img src="/images/Logo.svg" alt="Logo" />
      <div class="flex flex-col font-bold font-montserrat text-2xl">
        <p>TURBO</p>
        <p>TRACER</p>
      </div>
    </div>

    <div class="flex flex-row items-center gap-12 font-inter text-lg">
      <div>ГЛАВНАЯ</div>
      <div>ДЛЯ КОГО</div>
      <div>МОНИТОРИНГ</div>
      <div>ТАРИФЫ</div>
      <div>КОНТАКТЫ</div>
      <button
        class="bg-blue-custom rounded-2xl items-center justify-center flex flex-row gap-4 w-38.5 h-14"
      >
        <img class="w-7" src="/images/user.svg" alt="user" />
        <p class="font-inter font-semibold text-xl">Войти</p>
      </button>
    </div>
  </header>
</template>
