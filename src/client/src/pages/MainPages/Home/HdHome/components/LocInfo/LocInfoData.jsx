import "./LocInfoData.css";
import { useState } from "react";

import LocFixedContent from "./LocFixedContent";
import SmallButton from "../SmallButtom/SmallButton";
import LocEditableContent from "./LocEditableContent";

const HdInfoData = ({ data }) => {
  const [editLocation, setEditLocation] = useState(false);
  let rendered_content;

  const handleClick = (e) => {
    setEditLocation(!editLocation);
  };

  const handleEditLoc = (e, loc_data) => {
    console.log(loc_data);
  };

  if (data.localizationId) {
    rendered_content = <LocFixedContent data={data} />;
  } else if (editLocation) {
    rendered_content = <LocEditableContent handleClick={handleEditLoc} />;
  } else {
    rendered_content = <span>Unregister Location</span>;
  }
  return (
    <div className="loc-data-content">
      <div className="loc-data">
        <h2>{data.title}</h2>
        <SmallButton onClick={handleClick} className={"loc-add-button"}>
          {editLocation ? "▼" : "+"}
        </SmallButton>
        {rendered_content}
      </div>
    </div>
  );
};

export default HdInfoData;
