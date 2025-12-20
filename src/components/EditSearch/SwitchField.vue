<template>
  <div
    class="input-gradient w-full rounded-2xl items-center justify-between flex flex-col sm:flex-row p-4 sm:p-6"
  >
    <div class="flex flex-col font-montserrat w-full sm:w-auto mb-4 sm:mb-0">
      <p class="font-semibold text-lg sm:text-xl lg:text-2xl mb-1 sm:mb-2">{{ title }}</p>
      <p
        class="font-medium text-sm sm:text-base lg:text-xl text-white/56 leading-relaxed sm:leading-normal"
      >
        {{ description }}
      </p>
    </div>
    <div class="flex items-center justify-center sm:justify-end w-full sm:w-auto">
      <button
        type="button"
        class="switch-toggle relative w-16 h-8 sm:w-18 sm:h-9 lg:w-22.25 lg:h-11.75 rounded-[20px] transition-all duration-300 overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-transparent"
        :style="{
          backgroundColor: modelValue ? '#D9D9D9' : '#515151',
        }"
        role="switch"
        :aria-checked="modelValue"
        :aria-label="title"
        @click="toggle"
      >
        <span
          class="switch-toggle-thumb absolute w-6 h-6 sm:w-7 sm:h-7 lg:w-10.75 lg:h-10.75 rounded-[20px] transition-all duration-300 shadow-sm"
          :style="{
            backgroundColor: modelValue ? '#515151' : '#D9D9D9',
            left: modelValue ? 'calc(100% - 44px)' : '2px',
            top: '50%',
            transform: 'translateY(-50%)',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          }"
        ></span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
  title: string
  description: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const toggle = () => {
  emit('update:modelValue', !props.modelValue)
}
</script>

<style scoped>
.input-gradient {
  background: linear-gradient(180deg, rgba(185, 185, 185, 0.13) 0%, rgba(153, 153, 153, 0.13) 100%);
  backdrop-filter: blur(136.9px);
  -webkit-backdrop-filter: blur(136.9px);
  border: 1px solid rgba(255, 255, 255, 0.72);
}

/* Улучшенные анимации */
.switch-toggle {
  transition:
    background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.switch-toggle:active:not(:disabled) {
  transform: scale(0.95);
}

.switch-toggle-thumb {
  transition:
    left 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Ховер эффекты */
.switch-toggle:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Адаптивные тени для переключателя */
@media (max-width: 640px) {
  .switch-toggle {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .switch-toggle-thumb {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .switch-toggle {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  }

  .switch-toggle-thumb {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
}

@media (min-width: 1025px) {
  .switch-toggle {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .switch-toggle-thumb {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
}

/* Адаптивные размеры контейнера */
@media (max-width: 640px) {
  .input-gradient {
    border-radius: 1rem;
    padding: 1rem;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .input-gradient {
    border-radius: 1.25rem;
    padding: 1.25rem;
  }
}

/* Плавное изменение размера текста на очень маленьких экранах */
@media (max-width: 380px) {
  .font-semibold {
    font-size: 1rem;
  }

  .font-medium {
    font-size: 0.875rem;
  }

  .switch-toggle {
    width: 56px;
    height: 28px;
  }

  .switch-toggle-thumb {
    width: 24px;
    height: 24px;
  }
}
</style>
