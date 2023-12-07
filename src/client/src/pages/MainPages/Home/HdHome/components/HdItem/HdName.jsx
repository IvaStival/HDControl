import "./HdName.css";

const HdName = ({ interactive, children }) => {
  return (
    <div
      className={`hd-name-content ${interactive ? "hd-name-interactive" : ""}`}
    >
      {children}
    </div>
  );
};

export default HdName;
