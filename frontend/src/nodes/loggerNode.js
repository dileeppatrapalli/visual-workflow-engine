import React from "react";
import BaseNode from "./BaseNode";

const LoggerNode = () => {
  return (
    <BaseNode
      title="Logger"
      inputs={[{ id: "data" }]}
    >
      <div>Log Data</div>
    </BaseNode>
  );
};

export default LoggerNode;
