export function addNode(workflow, parentId, type) {
  const id = crypto.randomUUID();
  const newNode = {
    id,
    type,
    label: type.toUpperCase(),
    children: type === "branch" ? { true: null, false: null } : {}
  };

  const newWorkflow = structuredClone(workflow);
  newWorkflow.nodes[id] = newNode;

  const parent = newWorkflow.nodes[parentId];

  if (parent.type === "branch") {
    if (!parent.children.true) parent.children.true = id;
    else parent.children.false = id;
  } else {
    parent.children.default = id;
  }

  return newWorkflow;
}

export function deleteNode(workflow, nodeId) {
  const newWorkflow = structuredClone(workflow);

  for (const node of Object.values(newWorkflow.nodes)) {
    for (const key in node.children) {
      if (node.children[key] === nodeId) {
        delete node.children[key];
      }
    }
  }

  delete newWorkflow.nodes[nodeId];
  return newWorkflow;
}

export function updateLabel(workflow, nodeId, label) {
  const newWorkflow = structuredClone(workflow);
  newWorkflow.nodes[nodeId].label = label;
  return newWorkflow;
}
