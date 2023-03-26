const MyParagraph = (props) => {
  console.log("My Paragraph");

  return (
    <p>
      {props.children} {props.hello}
    </p>
  );
};

export default MyParagraph;
