import logo from "./logo.svg";
import "./App.css";
import React from "react";
import List from "./List";

export default function App() {

  const [visibleList, setVisibleList] = React.useState(true);

  const toggleVisibleList = () => {
    setVisibleList((visible) => !visible);
  };

  return (
    <div className="App">
      {visibleList && <List />}
      <button onClick={toggleVisibleList}>Показать / Скрыть список</button>
    </div>
  );
}
