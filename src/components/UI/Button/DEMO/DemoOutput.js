import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("DemoOutput Running");
  return (
    <MyParagraph hello="hello!">{props.show ? "This is New!" : ""}</MyParagraph>
  );
};

export default React.memo(DemoOutput);
