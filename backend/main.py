from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import os

app = FastAPI(title="Visual Workflow Engine API")

# CORS CONFIG
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "https://visual-workflow-engine.netlify.app",  # ✅ Netlify frontend
    ],
    allow_credentials=False,  # ✅ MUST be False for cross-domain fetch
    allow_methods=["*"],
    allow_headers=["*"],
)

# MODELS
class Node(BaseModel):
    id: str

class Edge(BaseModel):
    source: str
    target: str

class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

# LOGIC
def is_dag(nodes, edges):
    graph = {node.id: [] for node in nodes}

    for edge in edges:
        if edge.source in graph:
            graph[edge.source].append(edge.target)

    visited = set()
    stack = set()

    def dfs(node):
        if node in stack:
            return False
        if node in visited:
            return True

        stack.add(node)
        for neighbor in graph.get(node, []):
            if not dfs(neighbor):
                return False
        stack.remove(node)
        visited.add(node)
        return True

    return all(dfs(node.id) for node in nodes)

# ROUTES
@app.get("/")
def health_check():
    return {
        "status": "ok",
        "message": "Visual Workflow Engine backend is running"
    }

@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    return {
        "num_nodes": len(pipeline.nodes),
        "num_edges": len(pipeline.edges),
        "is_dag": is_dag(pipeline.nodes, pipeline.edges),
    }

# LOCAL DEV ONLY
# (Render ignores this)
if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", 8000))
    uvicorn.run("main:app", host="0.0.0.0", port=port, reload=True)
