import NodeCard from "./NodeCard";

export default function NodeRenderer({ nodeId, workflow, setWorkflow }) {
  const node = workflow.nodes[nodeId];
  if (!node) return null;

  return (
    <div className="node-wrapper">
      <NodeCard node={node} workflow={workflow} setWorkflow={setWorkflow} />

      <div className={`children ${node.type}`}>
        {Object.entries(node.children).map(([key, childId]) => (
          <NodeRenderer
            key={key}
            nodeId={childId}
            workflow={workflow}
            setWorkflow={setWorkflow}
          />
        ))}
      </div>
    </div>
  );
}
