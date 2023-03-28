import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/UI/Button/DEMO/DemoOutput";
import "./App.css";

function App() {
  const [listTitle, SetListTitle] = useState("My List");
  console.log("APP is RUNNING");

  const changeTitleHandler = useCallback(() => {
    console.log("changeTitleHandler RUNNING");
    SetListTitle("New Title");
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput title={listTitle} items={[5, 3, 1, 10, 9]} />
      <Button onClick={changeTitleHandler}>Toggle Button</Button>
    </div>
  );
}

export default App;
