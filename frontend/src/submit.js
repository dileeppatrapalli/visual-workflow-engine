import { useStore } from "./store";

// 👉 Production backend URL (Render)
const API_BASE_URL = "https://visual-workflow-engine-1.onrender.com";

export function SubmitButton() {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/pipelines/parse`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ nodes, edges }),
        }
      );

      const data = await response.json();

      alert(
        `Pipeline Analysis:\n\n` +
        `Nodes: ${data.num_nodes}\n` +
        `Edges: ${data.num_edges}\n` +
        `Is DAG: ${data.is_dag ? "Yes" : "No"}`
      );
    } catch (error) {
      alert("Failed to submit pipeline");
      console.error(error);
    }
  };

  return (
    <button
      onClick={handleSubmit}
      style={{
        margin: "12px",
        padding: "6px 12px",
        cursor: "pointer",
      }}
    >
      Submit
    </button>
  );
}
