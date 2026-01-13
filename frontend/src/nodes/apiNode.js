import React from "react";
import BaseNode from "./BaseNode";

const APINode = () => {
  return (
    <BaseNode
      title="API Request"
      inputs={[{ id: "url" }]}
      outputs={[{ id: "response" }]}
    >
      <div>Fetch Data</div>
    </BaseNode>
  );
};

export default APINode;
