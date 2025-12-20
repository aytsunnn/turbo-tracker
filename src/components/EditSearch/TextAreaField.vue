<template>
  <div class="flex flex-col md:flex-row gap-4 md:gap-6">
    <!-- Левая колонка с меткой и описанием -->
    <div class="md:w-85 flex flex-col items-start md:items-end text-left md:text-right">
      <label
        :for="id"
        class="font-montserrat font-semibold text-lg sm:text-xl md:text-2xl mb-1 md:mb-0"
      >
        {{ label }}
      </label>

      <p
        v-if="description"
        class="font-montserrat font-medium text-sm md:text-base lg:text-xl text-white/50 mt-1 md:mt-2 leading-relaxed"
      >
        {{ description }}
      </p>

      <button
        v-if="helpText"
        type="button"
        @click="toggleHelp"
        class="font-montserrat font-semibold text-sm md:text-base lg:text-xl text-blue-custom mt-2 md:mt-3 flex items-center gap-1 hover:text-blue-400 transition-colors group"
      >
        {{ helpText }}
      </button>
    </div>

    <!-- Правая колонка с textarea -->
    <div class="flex-1">
      <div class="relative group">
        <textarea
          :id="id"
          :value="modelValue"
          :placeholder="placeholder"
          @input="onInput"
          rows="4"
          class="input-gradient w-full min-h-32 md:min-h-36 lg:min-h-22 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 text-white focus:outline-none focus:border-blue-custom focus:ring-2 focus:ring-blue-500/30 placeholder:font-montserrat placeholder:font-medium placeholder:text-sm md:placeholder:text-base lg:placeholder:text-xl placeholder:text-white/28 resize-y transition-all duration-300 hover:border-white/40"
          :class="{
            'pr-10': props.helpText,
          }"
        ></textarea>

        <!-- Индикатор символов (опционально) -->
        <div
          v-if="modelValue.length > 0"
          class="absolute bottom-2 right-3 text-xs text-white/40 font-medium"
        >
          {{ modelValue.length }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue: string
  label: string
  description?: string
  placeholder?: string
  helpText?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'toggle-help': []
}>()

const id = computed(() => `textarea-${Math.random().toString(36).substr(2, 9)}`)

const onInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement
  emit('update:modelValue', target.value)
}

const toggleHelp = () => {
  emit('toggle-help')
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
  textarea {
    font-size: 0.875rem;
    line-height: 1.5;
  }

  .input-gradient {
    border-radius: 0.75rem;
    min-height: 120px;
  }

  textarea:focus {
    box-shadow:
      0 0 0 2px rgba(36, 138, 227, 0.8),
      0 2px 8px rgba(36, 138, 227, 0.1);
  }
}

@media (min-width: 641px) and (max-width: 767px) {
  textarea {
    font-size: 1rem;
    line-height: 1.6;
  }

  .input-gradient {
    border-radius: 1rem;
    min-height: 140px;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  textarea {
    font-size: 1.125rem;
    line-height: 1.7;
  }

  .input-gradient {
    min-height: 144px;
  }
}

/* Кастомный скроллбар */
textarea::-webkit-scrollbar {
  width: 8px;
}

textarea::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
  margin: 4px;
}

textarea::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}

textarea::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.3);
}

/* Плавная анимация для всех состояний */
textarea,
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
textarea:focus {
  transform: translateY(-1px);
  transition-duration: 300ms;
}

/* Для очень маленьких экранов */
@media (max-width: 380px) {
  .font-semibold {
    font-size: 1rem;
  }

  .font-medium {
    font-size: 0.875rem;
  }

  textarea {
    min-height: 100px;
    font-size: 0.875rem;
    padding: 0.75rem;
  }

  .input-gradient {
    border-radius: 0.625rem;
  }
}
</style>
