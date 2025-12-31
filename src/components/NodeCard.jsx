import { useState } from "react";
import AddNodeMenu from "./AddNodeMenu";
import { deleteNode, updateLabel } from "../utils/workflowHelpers";

export default function NodeCard({ node, workflow, setWorkflow }) {
  const [editing, setEditing] = useState(false);
  const [label, setLabel] = useState(node.label);

  function saveLabel() {
    setWorkflow(updateLabel(workflow, node.id, label));
    setEditing(false);
  }

  return (
    <div className={`node ${node.type}`}>
      {editing ? (
        <input
          value={label}
          onChange={e => setLabel(e.target.value)}
          onBlur={saveLabel}
          autoFocus
        />
      ) : (
       <div className="node-header" onClick={() => setEditing(true)}>
  {node.label}
</div>

      )}

      {node.id !== "start" && (
        <button
          className="delete"
          onClick={() => setWorkflow(deleteNode(workflow, node.id))}
        >
          ✕
        </button>
      )}

      {node.type !== "end" && (
        <AddNodeMenu node={node} workflow={workflow} setWorkflow={setWorkflow} />
      )}
    </div>
  );
}
