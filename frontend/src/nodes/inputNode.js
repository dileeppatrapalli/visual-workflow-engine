import React from "react";
import BaseNode from "./BaseNode";

const InputNode = () => {
  return (
    <BaseNode
      title="Input"
      outputs={[{ id: "value" }]}
    >
      <div>Input Value</div>
    </BaseNode>
  );
};

export default InputNode;
