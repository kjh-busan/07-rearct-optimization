import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/UI/Button/DEMO/DemoOutput";
import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleShowHandler = useCallback(() => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  }, []);

  console.log("App is Running");

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput />
      <Button onClick={toggleShowHandler}>Toggle Button</Button>
    </div>
  );
}

export default App;
