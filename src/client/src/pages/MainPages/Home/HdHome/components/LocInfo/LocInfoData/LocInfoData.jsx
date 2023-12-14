import "./LocInfoData.css";
import { useState } from "react";

import LocFixedContent from "../LocFixedContent/LocFixedContent";
import SmallButton from "../../../../../../../components/common/SmallButtom/SmallButton";
import LocEditableContent from "../LocEditableContent/LocEditableContent";

const HdInfoData = ({ data }) => {
  const [editLocation, setEditLocation] = useState(false);
  let rendered_content;

  const handleEditLocation = (e) => {
    setEditLocation(!editLocation);
  };

  const handleEditLoc = (e, loc_data) => {
    // console.log(loc_data);
  };

  const loc_id = data.localizationId;

  if (loc_id && !editLocation) {
    rendered_content = <LocFixedContent hd_id={data._id} id={loc_id} />;
  } else if (editLocation && loc_id) {
    rendered_content = (
      <LocEditableContent
        hd_id={data._id}
        handleEditLocation={handleEditLocation}
        id={loc_id}
        handleClick={handleEditLoc}
      />
    );
  } else if (editLocation) {
    rendered_content = (
      <LocEditableContent
        hd_id={data._id}
        handleEditLocation={handleEditLocation}
        handleClick={handleEditLoc}
      />
    );
  } else {
    rendered_content = <span>Unregister Location</span>;
  }
  return (
    <div className="loc-data-content">
      <div className="loc-data">
        <h2>{data.title}</h2>
        <SmallButton onClick={handleEditLocation} className={"loc-add-button"}>
          {editLocation ? "▼" : "+"}
        </SmallButton>
        {rendered_content}
      </div>
    </div>
  );
};

export default HdInfoData;
