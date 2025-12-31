# Visual Workflow Builder

A modern, interactive visual workflow builder built using **React (functional components)** and **JavaScript**, designed to demonstrate complex state management, component architecture, and custom UI development without relying on third-party UI or diagramming libraries.

This project was developed as part of a **frontend engineering assignment**.

---

## ✨ Features

- 📌 Visual workflow canvas with a root **Start** node
- 🧩 Support for multiple node types:
  - **Action** – single sequential step
  - **Branch (Condition)** – decision point with multiple paths
  - **End** – terminal node
- ➕ Add nodes dynamically using context-sensitive controls
- ✏️ Edit node labels inline
- ❌ Delete nodes with automatic parent-child reconnection
- 🔄 Undo / Redo support for structural changes
- 💾 Save workflow (logs complete JSON structure to console)
- 🎨 Modern SaaS-style UI using pure CSS
- 🌙 Glassmorphism, gradients, and subtle micro-interactions

---

## 🧠 Technical Highlights

- **Custom data modeling** using a normalized node graph structure
- **Recursive rendering** of workflow nodes
- **Manual undo/redo implementation** without external libraries
- **Pure CSS styling** (no UI or animation libraries)
- **Scalable component architecture**
- **No workflow/diagramming libraries** (e.g., React Flow, GoJS)

---

## 🛠 Tech Stack

- **React** (Functional Components + Hooks)
- **JavaScript (ES6+)**
- **Vite** (Build tool)
- **CSS** (Custom, no frameworks)

---
## 📁 Project Structure
src/
├── components/
│ ├── WorkflowCanvas.jsx
│ ├── NodeRenderer.jsx
│ ├── NodeCard.jsx
│ ├── AddNodeMenu.jsx
│ ├── Toolbar.jsx
│ └── Footer.jsx
│
├── data/
│ └── initialWorkflow.js
│
├── utils/
│ ├── workflowHelpers.js
│ └── historyHelpers.js
│
├── App.jsx
├── main.jsx
└── styles.css

---

---

## 🚀 Getting Started
```bash
 1. Install dependencies
  npm install
2. Start development server
  npm run dev
3. Build for production
  npm run build
```
