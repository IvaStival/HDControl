import "./InfoData.css";

const InfoData = ({ data }) => {
  return (
    <div className="hd-info-data">
      <span>Location: {data["location"]}</span>
      <span>Responsible: {data["responsible"]}</span>
      <span>City: {data["city"]}</span>
      <span>Phone: {data["phone"]}</span>
      <span>Mail: {data["mail"]}</span>
      <span>Description: {data["description"]}</span>
    </div>
  );
};

export default InfoData;
