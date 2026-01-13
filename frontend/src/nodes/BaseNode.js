import React from "react";
import { Handle, Position } from "reactflow";
import "../index.css";

const BaseNode = ({
  title,
  inputs = [],
  outputs = [],
  children,
  width = 200,
}) => {
  return (
    <div className="node" style={{ width }}>
      <div className="node-header">{title}</div>

      {/* Input Handles */}
      {inputs.map((input, index) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={input.id}
          isConnectable={true}
          style={{ top: 40 + index * 20 }}
        />
      ))}

      <div className="node-body">{children}</div>

      {/* Output Handles */}
      {outputs.map((output, index) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={output.id}
          isConnectable={true}
          style={{ top: 40 + index * 20 }}
        />
      ))}
    </div>
  );
};

export default BaseNode;
