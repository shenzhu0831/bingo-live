import { computed, ref } from 'vue'

const BOARD_SIZE = 9
const FIRST_PLAYER = 'X'

const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

const DRAW_RESULT = 'draw'

const createEmptyBoard = () => Array(BOARD_SIZE).fill(null)

const findWinningLine = (cells) =>
  WINNING_LINES.find(([first, second, third]) => {
    const mark = cells[first]
    return mark !== null && mark === cells[second] && mark === cells[third]
  }) ?? null

const calculateResult = (cells) => {
  const winningLine = findWinningLine(cells)
  if (winningLine) {
    return { winner: cells[winningLine[0]], line: winningLine }
  }

  const isBoardFull = cells.every((cell) => cell !== null)
  if (isBoardFull) {
    return { winner: DRAW_RESULT, line: null }
  }

  return { winner: null, line: null }
}

export const useTicTacToe = () => {
  const board = ref(createEmptyBoard())
  const currentPlayer = ref(FIRST_PLAYER)
  const winner = ref(null)
  const winningLine = ref(null)

  const isDraw = computed(() => winner.value === DRAW_RESULT)
  const isGameOver = computed(() => winner.value !== null)

  const switchPlayer = () => {
    currentPlayer.value = currentPlayer.value === 'X' ? 'O' : 'X'
  }

  const handleCellClick = (index) => {
    if (isGameOver.value || board.value[index] !== null) {
      return
    }

    board.value[index] = currentPlayer.value

    const result = calculateResult(board.value)
    if (result.winner !== null) {
      winner.value = result.winner
      winningLine.value = result.line
      return
    }

    switchPlayer()
  }

  const handleReset = () => {
    board.value = createEmptyBoard()
    currentPlayer.value = FIRST_PLAYER
    winner.value = null
    winningLine.value = null
  }

  return {
    board,
    currentPlayer,
    winner,
    winningLine,
    isDraw,
    isGameOver,
    handleCellClick,
    handleReset,
  }
}
