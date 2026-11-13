<script setup>
import { computed } from 'vue'

const props = defineProps({
  currentPlayer: {
    type: String,
    required: true,
  },
  winner: {
    type: String,
    default: null,
  },
})

const statusText = computed(() => {
  if (props.winner === 'draw') {
    return '平手！'
  }
  if (props.winner) {
    return `${props.winner} 獲勝！`
  }
  return `輪到 ${props.currentPlayer}`
})

const statusColorClass = computed(() => {
  if (props.winner === 'draw') {
    return 'text-slate-600'
  }
  if (props.winner === 'X' || props.currentPlayer === 'X') {
    return 'text-sky-600'
  }
  return 'text-rose-500'
})
</script>

<template>
  <p
    class="text-center text-xl font-semibold sm:text-2xl"
    :class="statusColorClass"
    role="status"
    aria-live="polite"
  >
    {{ statusText }}
  </p>
</template>
