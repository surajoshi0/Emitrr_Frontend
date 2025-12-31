export default function Toolbar({ onSave, onUndo, onRedo }) {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <span className="logo-dot" />
          Workflow Builder
        </div>
      </div>

      <div className="navbar-right">
        <button className="nav-btn ghost" onClick={onUndo}>
          Undo
        </button>
        <button className="nav-btn ghost" onClick={onRedo}>
          Redo
        </button>
        <button className="nav-btn primary" onClick={onSave}>
          Save
        </button>
      </div>
    </header>
  );
}
