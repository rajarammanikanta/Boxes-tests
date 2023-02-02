const Box = (props) => {
  const { text, className } = props;
  return (
    <div className={`${className}`}>
      <p className="boxTitle">{text}</p>
    </div>
  );
};

const element = (
  <div class="box-app-container">
    <h1 class="heading">Boxes</h1>
    <div className="boxesContainer">
      <Box className="Box1" text="Small" />
      <Box className="Box2" text="Medium" />
      <Box className="Box3" text="Large" />
    </div>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));
