const DemoOutput = (props) => {
  console.log("DemoOutput Running");
  return <p>{props.show ? "This is New!" : ""}</p>;
};

export default DemoOutput;
