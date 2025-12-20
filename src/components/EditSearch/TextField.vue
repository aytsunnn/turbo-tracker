<template>
  <div class="flex flex-col md:flex-row gap-4 md:gap-6">
    <!-- Левая колонка с меткой и кнопкой помощи -->
    <div class="md:w-85 flex flex-col items-start md:items-end text-left md:text-right">
      <label
        :for="id"
        class="font-montserrat font-semibold text-lg sm:text-xl md:text-2xl mb-1 md:mb-0"
      >
        {{ label }}
      </label>

      <button
        v-if="helpText"
        type="button"
        @click="toggleHelp"
        class="font-montserrat font-semibold text-sm md:text-base lg:text-xl text-blue-custom mt-2 md:mt-3 flex items-center gap-1 hover:text-blue-400 transition-colors group"
        :aria-expanded="props.showHelp"
        :aria-controls="`help-${id}`"
      >
        {{ helpText }}
      </button>
    </div>

    <!-- Правая колонка с полем ввода -->
    <div class="flex-1">
      <div class="relative group">
        <input
          :id="id"
          :value="modelValue"
          :type="type"
          :placeholder="placeholder"
          :required="required"
          @input="onInput"
          @focus="onFocus"
          @blur="onBlur"
          class="input-gradient w-full h-12 md:h-14 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 text-white focus:outline-none focus:border-blue-custom focus:ring-2 focus:ring-blue-500/30 placeholder:font-montserrat placeholder:font-medium placeholder:text-sm md:placeholder:text-base lg:placeholder:text-xl placeholder:text-white/28 transition-all duration-300 hover:border-white/40 peer"
          :aria-describedby="helpText ? `help-${id}` : undefined"
        />

        <!-- Индикатор валидации (для required полей) -->
        <div
          v-if="required && !modelValue"
          class="absolute top-1/2 right-3 md:right-4 transform -translate-y-1/2"
        >
          <span class="text-red-400 text-xs font-medium animate-pulse">*</span>
        </div>

        <!-- Индикатор фокуса -->
        <div
          class="absolute inset-0 rounded-xl md:rounded-2xl border-2 border-transparent peer-focus:border-blue-500/30 pointer-events-none transition-all duration-300"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue: string
  label: string
  placeholder?: string
  type?: string
  required?: boolean
  helpText?: string
  showHelp?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'update:showHelp': [value: boolean]
  'toggle-help': []
}>()

const id = computed(() => `field-${Math.random().toString(36).substr(2, 9)}`)

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

const onFocus = () => {
  // Можно добавить дополнительную логику при фокусе
}

const onBlur = () => {
  // Можно добавить дополнительную логику при потере фокуса
}

const toggleHelp = () => {
  emit('toggle-help')
  emit('update:showHelp', !props.showHelp)
}
</script>

<style scoped>
.input-gradient {
  background: linear-gradient(180deg, rgba(185, 185, 185, 0.13) 0%, rgba(153, 153, 153, 0.13) 100%);
  backdrop-filter: blur(136.9px);
  -webkit-backdrop-filter: blur(136.9px);
  border: 1px solid rgba(255, 255, 255, 0.72);
}

.input-gradient:focus {
  border-color: rgba(36, 138, 227, 0.8);
  box-shadow:
    0 0 0 3px rgba(36, 138, 227, 0.1),
    0 4px 12px rgba(36, 138, 227, 0.15);
}

/* Адаптивная ширина левой колонки */
.md\:w-85 {
  width: 280px;
}

@media (min-width: 768px) and (max-width: 1023px) {
  .md\:w-85 {
    width: 320px;
  }
}

@media (min-width: 1024px) {
  .md\:w-85 {
    width: 340px;
  }
}

/* Адаптивные тени и эффекты */
@media (max-width: 640px) {
  input {
    font-size: 0.875rem;
    height: 2.75rem;
  }

  .input-gradient {
    border-radius: 0.75rem;
  }

  input:focus {
    box-shadow:
      0 0 0 2px rgba(36, 138, 227, 0.8),
      0 2px 8px rgba(36, 138, 227, 0.1);
  }
}

@media (min-width: 641px) and (max-width: 767px) {
  input {
    font-size: 1rem;
    height: 3rem;
  }

  .input-gradient {
    border-radius: 1rem;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  input {
    font-size: 1.125rem;
    height: 3.25rem;
  }
}

/* Плавная анимация для всех состояний */
input,
button {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

/* Эффект при наведении на кнопку помощи */
button:hover {
  transform: translateY(-1px);
}

/* Анимация увеличения при фокусе */
input:focus {
  transform: translateY(-1px);
  transition-duration: 300ms;
}

/* Эффект пульсации для обязательных полей */
@keyframes pulse-soft {
  0%,
  100% {
    opacity: 0.7;
  }
  50% {
    opacity: 1;
  }
}

.animate-pulse {
  animation: pulse-soft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Для очень маленьких экранов */
@media (max-width: 380px) {
  .font-semibold {
    font-size: 1rem;
  }

  input {
    height: 2.5rem;
    font-size: 0.875rem;
    padding: 0.5rem 0.75rem;
  }

  .input-gradient {
    border-radius: 0.625rem;
  }

  button {
    font-size: 0.875rem;
  }
}

/* Стили для разных типов полей */
input[type='url'] {
  font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
}

input[type='text'] {
  letter-spacing: 0.01em;
}

/* Кастомное выделение текста */
::selection {
  background-color: rgba(36, 138, 227, 0.3);
  color: white;
}

/* Улучшенный автозаполнение */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
  -webkit-text-fill-color: white;
  -webkit-box-shadow: 0 0 0px 1000px rgba(185, 185, 185, 0.08) inset;
  transition: background-color 5000s ease-in-out 0s;
}
</style>
