import { useState } from "react";
import WorkflowCanvas from "./components/WorkflowCanvas";
import Toolbar from "./components/Toolbar";
import { initialWorkflow } from "./data/initialWorkflow";
import { pushHistory } from "./utils/historyHelpers";
import Footer from "./components/Footer";


export default function App() {
  const [workflow, setWorkflow] = useState(initialWorkflow);
  const [history, setHistory] = useState([]);
  const [future, setFuture] = useState([]);

  function updateWorkflow(newWorkflow) {
    pushHistory(workflow, history, setHistory, setFuture);
    setWorkflow(newWorkflow);
  }

  function undo() {
    if (!history.length) return;
    const previous = history[history.length - 1];
    setFuture(f => [workflow, ...f]);
    setHistory(h => h.slice(0, -1));
    setWorkflow(previous);
  }

  function redo() {
    if (!future.length) return;
    const next = future[0];
    setHistory(h => [...h, workflow]);
    setFuture(f => f.slice(1));
    setWorkflow(next);
  }

  function save() {
    console.log("WORKFLOW JSON:");
    console.log(JSON.stringify(workflow, null, 2));
  }

  return (
    <>
      <Toolbar onSave={save} onUndo={undo} onRedo={redo} />
      <WorkflowCanvas workflow={workflow} setWorkflow={updateWorkflow} />
      <Footer />
    </>
  );
}
