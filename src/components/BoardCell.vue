<script setup>
import { computed } from 'vue'

const props = defineProps({
  value: {
    type: String,
    default: null,
  },
  index: {
    type: Number,
    required: true,
  },
  isWinning: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['cellClick'])

const cellLabel = computed(() => {
  const position = props.index + 1
  if (props.value) {
    return `第 ${position} 格，已放置 ${props.value}`
  }
  return `第 ${position} 格，空格`
})

const markColorClass = computed(() => {
  if (props.value === 'X') {
    return 'text-sky-600'
  }
  if (props.value === 'O') {
    return 'text-rose-500'
  }
  return 'text-transparent'
})

const handleActivate = () => {
  if (props.disabled || props.value) {
    return
  }
  emit('cellClick', props.index)
}
</script>

<template>
  <div
    class="flex aspect-square select-none items-center justify-center rounded-xl text-5xl font-bold transition-colors duration-150 sm:text-6xl"
    :class="[
      markColorClass,
      isWinning ? 'bg-amber-200' : 'bg-slate-100',
      !value && !disabled
        ? 'cursor-pointer hover:bg-slate-200 focus:outline-none focus:ring-4 focus:ring-sky-300'
        : 'cursor-default',
    ]"
    role="button"
    :tabindex="value || disabled ? -1 : 0"
    :aria-label="cellLabel"
    :aria-disabled="Boolean(value) || disabled"
    @click="handleActivate"
    @keydown.enter.prevent="handleActivate"
    @keydown.space.prevent="handleActivate"
  >
    {{ value ?? '' }}
  </div>
</template>
