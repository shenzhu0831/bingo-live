<script setup>
import GameBoard from './components/GameBoard.vue'
</script>

<template>
  <main
    class="flex min-h-screen flex-col items-center justify-center gap-8 bg-slate-50 px-4 py-10"
  >
    <h1 class="text-3xl font-bold text-slate-800 sm:text-4xl">
      圈圈叉叉
    </h1>
    <GameBoard />
  </main>
</template>
