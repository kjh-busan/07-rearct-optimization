import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/UI/Button/DEMO/DemoOutput";
import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [AllowToggle, setAllowToggle] = useState(false);

  console.log("App is Running");

  const toggleShowHandler = useCallback(() => {
    if (AllowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [AllowToggle]);

  const AllowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={AllowToggleHandler}>AllowToggle Button</Button>
      <Button onClick={toggleShowHandler}>Toggle Button</Button>
    </div>
  );
}

export default App;
