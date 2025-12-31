export function pushHistory(current, history, setHistory, setFuture) {
  setHistory([...history, current]);
  setFuture([]);
}
