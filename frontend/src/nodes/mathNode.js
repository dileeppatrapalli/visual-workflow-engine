import React from "react";
import BaseNode from "./BaseNode";

const MathNode = () => {
  return (
    <BaseNode
      title="Math"
      inputs={[{ id: "a" }, { id: "b" }]}
      outputs={[{ id: "sum" }]}
    >
      <div>Add Two Numbers</div>
    </BaseNode>
  );
};

export default MathNode;
