import "./SmallButton.css";

const SmallButton = ({ onClick, bg, verySmall, className, children }) => {
  const classNameSetup = `small-btn ${verySmall ? "very-small-btn" : ""} ${
    bg ? "fixed-bg" : ""
  } ${className}`;

  return (
    <div onClick={onClick} className={classNameSetup}>
      {children}
    </div>
  );
};

export default SmallButton;
