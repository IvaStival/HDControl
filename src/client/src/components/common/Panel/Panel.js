import "./Panel.css";

const Panel = ({ className, children }) => {
  return <div className={`panel-content ${className}`}>{children}</div>;
};

export default Panel;
