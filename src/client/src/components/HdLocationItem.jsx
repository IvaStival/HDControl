import "./HdLocationItem.css";

const HdLocationItem = ({ ishome }) => {
  return (
    <div className="location-item">
      <div className="hd-name">FFHD01</div>
      <div className="size">4TB</div>
      <div className="job">2022-05-NISSIN</div>
      <div
        className="status"
        style={{ backgroundColor: `${ishome ? "green" : "red"}` }}
      ></div>
    </div>
  );
};

export default HdLocationItem;
