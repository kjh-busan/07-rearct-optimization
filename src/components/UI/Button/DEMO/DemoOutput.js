import React, { Fragment } from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("DemoOutput Running");
  const itemList = props.items.map((item) => (
    <MyParagraph key={item}>{item}</MyParagraph>
  ));
  return (
    <Fragment>
      <MyParagraph>{props.title}</MyParagraph>
      {itemList}
    </Fragment>
  );
};

export default React.memo(DemoOutput);
