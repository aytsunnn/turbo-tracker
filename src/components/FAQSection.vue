<script setup lang="ts">
import { faqQuestions } from './data/faqQuestions'
</script>

<template>
  <div class="flex justify-center mt-22 md:mt-37 lg:mt-44.5 px-7 md:px-14 lg:px-0">
    <div
      class="w-full max-w-382 h-auto lg:h-90.5 flex flex-col lg:flex-row justify-between gap-6 lg:gap-12"
    >
      <!-- Блок для lg версии  -->
      <div class="hidden lg:flex flex-col justify-between mb-6 lg:mb-0">
        <p
          class="font-montserrat text-center lg:text-left font-regular md:font-regular lg:font-bold text-sm md:text-xl lg:text-3xl leading-tight"
        >
          ЧАСТО<br />ЗАДАВАЕМЫЕ<br />ВОПРОСЫ
        </p>
        <button
          class="w-full md:w-78.25 lg:w-91 h-12 md:h-78.25 lg:h-17 rounded-full bg-blue-custom text-xs md:text-lg lg:text-lg font-inter font-semibold"
        >
          Связаться с нами <br class="md:block" />для консультации
        </button>
      </div>

      <!-- Блок для sm и md версии -->
      <div class="lg:hidden w-full space-y-6">
        <!-- Заголовок -->
        <p class="font-montserrat text-center font-regular md:font-regular text-sm md:text-xl">
          ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
        </p>

        <!-- Блок с вопросами (без кнопки для sm) -->
        <div
          class="bg-glass rounded-3xl p-2 px-4 md:p-4 md:px-8 flex flex-col md:flex-col md:justify-between"
        >
          <div
            v-for="question in faqQuestions"
            :key="question.id"
            class="flex items-start gap-3 md:gap-4 py-2 md:py-3"
          >
            <div class="w-3 md:w-4 h-1 bg-[#D9D9D9] flex-shrink-0 mt-2 md:mt-3" />
            <p class="font-montserrat text-xs md:text-xl leading-tight">
              {{ question.text }}
            </p>
          </div>

          <!-- Кнопка только для md (внутри блока) -->
          <div class="hidden md:flex justify-center mt-4">
            <button
              class="w-full md:w-78.25 h-14 md:h-17.25 rounded-full bg-blue-custom text-base font-inter font-semibold md:m-2"
            >
              Связаться с нами для консультации
            </button>
          </div>
        </div>

        <!-- Кнопка для sm -->
        <div class="md:hidden flex justify-center">
          <button class="w-full h-12 rounded-full bg-blue-custom text-xs font-inter font-semibold">
            Связаться с нами для консультации
          </button>
        </div>
      </div>

      <!-- Блок с вопросами для lg версии -->
      <div
        class="hidden lg:block bg-glass rounded-6xl w-full lg:w-261 h-full p-6 flex flex-col space-y-5"
      >
        <div
          v-for="question in faqQuestions"
          :key="question.id"
          class="flex items-start gap-4 py-3"
        >
          <div class="w-9.75 h-1 bg-[#D9D9D9] flex-shrink-0 mt-2" />
          <p class="font-montserrat text-lg leading-tight">
            {{ question.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
