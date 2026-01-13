from fastapi.testclient import TestClient
import importlib.util
import json
import pathlib

main_path = pathlib.Path(__file__).parent / "main.py"
spec = importlib.util.spec_from_file_location("backend.main", str(main_path))
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)
app = getattr(module, "app")

client = TestClient(app)
resp = client.post(
    "/pipelines/parse",
    json={"nodes": [{"id": "a"}, {"id": "b"}], "edges": [{"source": "a", "target": "b"}]},
)

print(json.dumps(resp.json()))
