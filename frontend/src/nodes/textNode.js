import React, { useEffect, useRef, useState } from "react";
import BaseNode from "./BaseNode";

const VARIABLE_REGEX = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;

const TextNode = () => {
  const [text, setText] = useState("");
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);

  // Auto resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [text]);

  // Extract variables from text
  useEffect(() => {
    const matches = [...text.matchAll(VARIABLE_REGEX)];
    const uniqueVars = [...new Set(matches.map((m) => m[1]))];
    setVariables(uniqueVars);
  }, [text]);

  // 🔑 IMPORTANT: objects with `id`
  const inputs = variables.map((v) => ({ id: v }));

  return (
    <BaseNode
      title="Text"
      inputs={inputs}
      outputs={[{ id: "text" }]}
      width={260}
    >
      <textarea
        ref={textareaRef}
        value={text}
        placeholder="Type text... use {{variable}}"
        onChange={(e) => setText(e.target.value)}
      />
    </BaseNode>
  );
};

export default TextNode;