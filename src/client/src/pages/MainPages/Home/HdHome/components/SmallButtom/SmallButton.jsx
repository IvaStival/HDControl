import "./SmallButton.css";

const SmallButton = ({ handleClick, children }) => {

  return (
    <div onClick={handleClick} className="small-btn">
      {children}
    </div>
  );
};

export default SmallButton;
