<title>Visual Workflow Engine</title>

A visual workflow / pipeline editor that allows users to design, connect, and analyze pipelines visually.

Users can create pipelines using draggable nodes, connect them visually, and submit the pipeline to a backend service that analyzes the structure of the graph.

---

## 🚀 Live Deployment

- **Frontend (Netlify):**  
  👉 https://visual-workflow-engine.netlify.app

- **Backend API (Render):**  
  👉 https://visual-workflow-engine-1.onrender.com  
  👉 Health check: https://visual-workflow-engine-1.onrender.com/
  
---

## ✨ Features

### 🔹 Node Abstraction
- Implemented a reusable **BaseNode** component to remove duplicated logic across nodes.
- Shared layout, styling, and handle logic are centralized.
- New nodes can be created with minimal code.

---

### 🔹 Demo Nodes (Abstraction Showcase)
To demonstrate the flexibility of the abstraction, the following demo nodes are included:
- Math
- Condition
- Delay
- API
- Logger

These nodes are intentionally simple and exist only to showcase scalability.

---

### 🔹 Text Node Logic
The Text node supports:
- **Auto-resizing textarea** as text grows.
- **Dynamic input handles** created from variables written in the format:


Each detected variable creates a corresponding input handle on the left side of the node.

---

### 🔹 Styling
- Clean and consistent dark-themed UI
- Unified styles applied across all nodes via the BaseNode abstraction

---

### 🔹 Backend Integration
- Frontend submits pipeline data (nodes and edges) to a FastAPI backend.
- Backend calculates:
  - Number of nodes
  - Number of edges
  - Whether the pipeline forms a **Directed Acyclic Graph (DAG)**
- Results are displayed to the user via an alert.

---

## 🧱 Tech Stack

### Frontend
- React (Create React App)
- React Flow
- Zustand

### Backend
- Python
- FastAPI

---

## 📁 Project Structure

visual-workflow-engine/
├── frontend/
│ ├── src/
│ │ ├── nodes/
│ │ │ ├── BaseNode.js
│ │ │ ├── inputNode.js
│ │ │ ├── outputNode.js
│ │ │ ├── llmNode.js
│ │ │ ├── textNode.js
│ │ │ ├── mathNode.js
│ │ │ ├── conditionNode.js
│ │ │ ├── delayNode.js
│ │ │ ├── apiNode.js
│ │ │ └── loggerNode.js
│ │ ├── ui.js
│ │ ├── toolbar.js
│ │ ├── submit.js
│ │ └── App.js
│ └── package.json
└── backend/
└── main.py

---

## ▶️ How to Run

### 1️⃣ Frontend
```bash
cd frontend
npm install
npm start

Open: http://localhost:3000


2️⃣ Backend
bash
Copy code
cd backend
pip install fastapi uvicorn
uvicorn main:app --reload

Backend runs at: http://localhost:8000


🧪 How to Test

Drag nodes from the toolbar onto the canvas

Connect nodes using handles

Click Submit

View pipeline analysis in the alert

Create a cycle in the graph to verify DAG detection.

📝 Notes

Demo nodes are included only to demonstrate abstraction flexibility.

Frontend and backend are deployed separately using Netlify and Render.

👤 Author

Dileep Patrapalli
Frontend / Full-Stack Developer
