import { addNode } from "../utils/workflowHelpers";

export default function AddNodeMenu({ node, workflow, setWorkflow }) {
  return (
    <div className="add-menu modern">
      <button onClick={() => setWorkflow(addNode(workflow, node.id, "action"))}>
        + Action
      </button>
      <button onClick={() => setWorkflow(addNode(workflow, node.id, "branch"))}>
        + Branch
      </button>
      <button onClick={() => setWorkflow(addNode(workflow, node.id, "end"))}>
        + End
      </button>
    </div>
  );
}
