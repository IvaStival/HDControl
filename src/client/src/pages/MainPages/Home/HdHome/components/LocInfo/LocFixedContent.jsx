import "./LocFixedContent.css";

const LocFixedContent = ({ data }) => {
  return (
    <>
      <div>
        <span className="loc-item-title">Location:</span>{" "}
        <span>{data["location"]}</span>
      </div>
      <div>
        <span className="loc-item-title">Responsible:</span>{" "}
        <span> {data["responsible"]}</span>
      </div>
      <div>
        <span className="loc-item-title">City:</span>{" "}
        <span>{data["city"]}</span>
      </div>
      <div>
        <span className="loc-item-title">Phone:</span>{" "}
        <span> {data["phone"]}</span>
      </div>
      <div>
        <span className="loc-item-title">Mail:</span>{" "}
        <span> {data["mail"]}</span>
      </div>
      <div>
        <span className="loc-item-title">Description:</span>{" "}
        <span> {data["description"]}</span>
      </div>
    </>
  );
};

export default LocFixedContent;
