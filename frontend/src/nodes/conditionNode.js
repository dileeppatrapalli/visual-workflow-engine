import React from "react";
import BaseNode from "./BaseNode";

const ConditionNode = () => {
  return (
    <BaseNode
      title="Condition"
      inputs={[{ id: "value" }]}
      outputs={[{ id: "true" }, { id: "false" }]}
    >
      <div>Conditional Branch</div>
    </BaseNode>
  );
};

export default ConditionNode;
