import "./LocFixedContent.css";

import { useEffect, useState } from "react";

import AxiosHelper from "../../../../../../../utils/axios-helper";
import {
  backend_url,
  backend_port,
} from "../../../../../../../utils/constants";

const _axios = new AxiosHelper(`${backend_url}:${backend_port}`);

const LocFixedContent = ({ id }) => {
  const [locData, setlocData] = useState();
  useEffect(() => {
    const getLocData = async () => {
      const config = {
        headers: {
          credentials: "include",
          "Content-Type": "application/json",
        },
      };
      const result = await _axios.get(`/locs/loc/${id}`, {}, config);
      setlocData(result.data.data);
    };
    if (id) {
      getLocData();
    }
  }, []);

  let rendered_content;
  if (locData) {
    rendered_content = (
      <>
        <div>
          <span className="loc-item-title">Location:</span>{" "}
          <span>{locData["location"]}</span>
        </div>
        <div>
          <span className="loc-item-title">Responsible:</span>{" "}
          <span> {locData["responsible"]}</span>
        </div>
        <div>
          <span className="loc-item-title">City:</span>{" "}
          <span>{locData["city"]}</span>
        </div>
        <div>
          <span className="loc-item-title">Phone:</span>{" "}
          <span> {locData["phone"]}</span>
        </div>
        <div>
          <span className="loc-item-title">Mail:</span>{" "}
          <span> {locData["mail"]}</span>
        </div>
        <div>
          <span className="loc-item-title">Description:</span>{" "}
          <span> {locData["description"]}</span>
        </div>
      </>
    );
  } else {
    rendered_content = <div className="loading">Loading...</div>;
  }

  return <>{rendered_content}</>;
};

export default LocFixedContent;
