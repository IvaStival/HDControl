import "./Panel.css";

const Panel = (props) => {
  return <div className="panel-content">{props.children}</div>;
};

export default Panel;
