import React from "react";
import BaseNode from "./BaseNode";

const DelayNode = () => {
  return (
    <BaseNode
      title="Delay"
      inputs={[{ id: "input" }]}
      outputs={[{ id: "output" }]}
    >
      <div>Delay Execution</div>
    </BaseNode>
  );
};

export default DelayNode;
