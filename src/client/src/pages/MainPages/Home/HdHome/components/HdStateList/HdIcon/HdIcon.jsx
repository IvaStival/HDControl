import "./HdIcon.css";

const HdIcon = ({ title, size, type }) => {
  let bg = "grey";

  if (size === "4" && type === 1) {
    bg = "blue";
  }

  if (size === "2" && type === 2) {
    bg = "green";
  }

  return (
    <div className={`hd-icon-content ${bg}`}>
      <span>{title}</span>
      <span className="hd-icon-size">{size}TB</span>
    </div>
  );
};

export default HdIcon;
