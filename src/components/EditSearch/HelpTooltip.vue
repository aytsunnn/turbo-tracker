<template>
  <div v-if="show" class="flex flex-col sm:flex-row gap-4 sm:gap-6">
    <div class="hidden sm:block sm:w-85"></div>
    <div
      class="flex-1 p-3 sm:p-4 input-gradient rounded-lg sm:rounded-xl transition-all duration-300"
    >
      <p class="text-blue-300 text-xs sm:text-sm leading-relaxed sm:leading-normal">
        <slot />
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  show: boolean
}>()
</script>

<style scoped>
.input-gradient {
  background: linear-gradient(180deg, rgba(185, 185, 185, 0.13) 0%, rgba(153, 153, 153, 0.13) 100%);
  backdrop-filter: blur(136.9px);
  -webkit-backdrop-filter: blur(136.9px);
  border: 1px solid rgba(255, 255, 255, 0.72);
}

.sm\:w-85 {
  width: 340px;
}

/* Адаптивные стили */
@media (max-width: 640px) {
  .input-gradient {
    border-radius: 0.75rem;
    padding: 0.75rem;
  }
}

@media (max-width: 768px) {
  .sm\:w-85 {
    width: 100%;
  }
}

/* Плавные переходы для всех экранов */
@media (min-width: 641px) and (max-width: 1024px) {
  .input-gradient {
    border-radius: 1rem;
    padding: 1rem;
  }
}
</style>
