import React from "react";
import BaseNode from "./BaseNode";

const LLMNode = () => {
  return (
    <BaseNode
      title="LLM"
      inputs={[{ id: "prompt" }]}
      outputs={[{ id: "response" }]}
    >
      <div>LLM Processing</div>
    </BaseNode>
  );
};

export default LLMNode;
