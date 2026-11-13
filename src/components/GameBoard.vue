<script setup>
import { useTicTacToe } from '../composables/useTicTacToe'
import BoardCell from './BoardCell.vue'
import GameStatus from './GameStatus.vue'

const {
  board,
  currentPlayer,
  winner,
  winningLine,
  isGameOver,
  handleCellClick,
  handleReset,
} = useTicTacToe()

const isWinningCell = (index) => Boolean(winningLine.value?.includes(index))
</script>

<template>
  <section class="flex flex-col items-center gap-6">
    <GameStatus
      :current-player="currentPlayer"
      :winner="winner"
    />

    <div
      class="grid w-full max-w-sm grid-cols-3 gap-2 rounded-2xl bg-slate-300 p-2"
      role="grid"
      aria-label="圈圈叉叉棋盤"
    >
      <BoardCell
        v-for="(cell, index) in board"
        :key="index"
        :value="cell"
        :index="index"
        :is-winning="isWinningCell(index)"
        :disabled="isGameOver"
        @cell-click="handleCellClick"
      />
    </div>

    <button
      type="button"
      class="rounded-xl bg-sky-600 px-6 py-3 text-base font-semibold text-white transition-colors duration-150 hover:bg-sky-700 focus:outline-none focus:ring-4 focus:ring-sky-300"
      @click="handleReset"
    >
      重新開始
    </button>
  </section>
</template>
