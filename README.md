# ⚖️ Precision Converter

A simple React + TypeScript tool that helps Solidity developers convert between precision-scaled values (like `1e18` wei) and human-readable values (like `1 ETH`).

---

## 🚀 Features

- Convert from **precision (e.g., `1200000000000000000`)** to **human-readable** format (e.g., `1.2`)
- Convert from **human-readable** format to **precision**
- Toggle between both modes

---

## 🤔 Why This Tool?

In Solidity, values are often scaled up for precision (like `1 ETH = 1e18 wei`). This tool helps quickly convert between:

- Human values ↔ Solidity-scaled values
- Ideal for dApp frontend work, testing, and smart contract debugging

## 🛠️ Getting Started

### Prerequisites

- Node.js
- Yarn
- Vite (comes installed with setup)

### Installation

```bash
git clone https://github.com/yourusername/solidity-precision-converter.git
cd precision-converter
yarn
yarn dev
```

## Project Structure

```
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── src
│   ├── App.tsx
│   ├── main.tsx
│   ├── styles.css
│   └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── yarn.lock
```
