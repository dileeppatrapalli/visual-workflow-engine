import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
  return (
    <div className="toolbar">
      {/* Core nodes */}
      <DraggableNode type="customInput" label="Input" />
      <DraggableNode type="llm" label="LLM" />
      <DraggableNode type="customOutput" label="Output" />
      <DraggableNode type="text" label="Text" />

      {/* Demo nodes to showcase BaseNode abstraction */}
      <DraggableNode type="math" label="Math" />
      <DraggableNode type="condition" label="Condition" />
      <DraggableNode type="delay" label="Delay" />
      <DraggableNode type="api" label="API" />
      <DraggableNode type="logger" label="Logger" />
    </div>
  );
};
