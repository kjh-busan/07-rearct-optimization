import classes from "./MyParagraph.module.css";

const MyParagraph = (props) => {
  console.log("My Paragraph");

  return <div className={classes.list}>{props.children}</div>;
};

export default MyParagraph;
