# 圈圈叉叉（Tic-Tac-Toe）

使用 Vue 3 + Vite + TailwindCSS 製作的雙人圈圈叉叉遊戲。

## 技術棧

- Vue 3（Composition API + `<script setup>`）
- Vite
- TailwindCSS
- ESLint

## 開始使用

```bash
npm install     # 安裝相依套件
npm run dev     # 啟動開發伺服器
npm run build   # 建置正式版
npm run preview # 預覽建置結果
npm run lint    # 執行 ESLint 檢查
```

## 專案結構

```
src/
├── main.js                 # 進入點
├── App.vue                 # 根元件
├── style.css               # Tailwind 樣式
├── components/
│   ├── GameBoard.vue       # 棋盤容器
│   ├── BoardCell.vue       # 單一格子
│   └── GameStatus.vue      # 狀態列
└── composables/
    └── useTicTacToe.js     # 遊戲邏輯
```

## 文件

- [需求規格書](./docs/requirements.md)
