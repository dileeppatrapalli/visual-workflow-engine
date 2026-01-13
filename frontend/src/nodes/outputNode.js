import React from "react";
import BaseNode from "./BaseNode";

const OutputNode = () => {
  return (
    <BaseNode
      title="Output"
      inputs={[{ id: "result" }]}
    >
      <div>Output Result</div>
    </BaseNode>
  );
};

export default OutputNode;
