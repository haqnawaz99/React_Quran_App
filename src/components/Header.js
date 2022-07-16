import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("clickked");
  };
  return (
    <header className="header">
      {/* <h1 style={{ color: "red" }}>{title + " Inline style"}</h1> */}

      <h1>Task Tracker</h1>
      <Button color="green" text="Blue" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Title from default props",
};
//following is cut from line 7
//<h1 style={headingStyle}>{"CSS in JSS"}</h1>
//CSS in JSS
const headingStyle = {
  color: "blue",
  backGroudColor: "red",
};

export default Header;
