import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AxiosHelper from "../../../utils/axios-helper";
import { backend_port, backend_url } from "../../../utils/constants";

import { createLoc } from "../../../store/api/loc/actions/createLoc";
import { updateLoc } from "../../../store/api/loc/actions/updateLoc";
import { updateHd } from "../../../store/api/hds/actions/updateHd";

import Panel from "../../../components/common/Panel/Panel";
import Field from "../../../components/common/Field/Field";
import Button from "../../../components/common/Button/Button";
import { selectLocStatus } from "../../../store/api/loc/locSlice";
import { selectHdStatus } from "../../../store/api/hds/hdSlice";

import Modal from "../../../components/common/Modal/Modal";

const _axios = new AxiosHelper(`${backend_url}:${backend_port}`);

const LocationPanel = ({ jobTitle, hdTitle, loc_id, hd_id }) => {
  const dispatch = useDispatch();
  let values = {
    location: "",
    responsible: "",
    city: "",
    phone: "",
    mail: "",
    description: "",
  };
  const [inputs, setInputs] = useState(values);
  const [showPortal, setShowPortal] = useState(false);

  const locStatus = useSelector(selectLocStatus);
  const hdStatus = useSelector(selectHdStatus);

  useEffect(() => {
    // GET DIRECTLY THE LOCALIZATION DATA IF IT EXISTS
    const getLocData = async () => {
      const config = {
        headers: {
          credentials: "include",
          "Content-Type": "application/json",
        },
      };
      const result = await _axios.get(`/locs/loc/${loc_id}`, {}, config);
      setInputs(result.data.data);
    };
    if (loc_id) {
      getLocData();
    }
  }, [loc_id]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  // UPDATE OR CREATE A NEW LOCATION
  // IF IT'S A NEW LOCATION SAVE THE LOCATION ID ON THE CURRENT HD
  const handleUpdateorCreate = (e) => {
    if (loc_id) {
      dispatch(updateLoc({ id: loc_id, locData: inputs }));
    } else {
      dispatch(createLoc({ locData: inputs })).then(({ payload }) => {
        dispatch(
          updateHd({ id: hd_id, hdData: { localizationId: payload.id } })
        );
      });
    }
    setShowPortal(true);
  };

  let render_portal = "";
  let rendered_content = "";

  // IF WE HAVE DATA WE WILL SHOW THEM AT PAGE LOAD
  rendered_content = (
    <div className="loc-edit-content">
      <Field
        onChange={handleChange}
        name="location"
        title="Localization"
        value={inputs["location"] || ""}
      ></Field>
      <Field
        onChange={handleChange}
        name="responsible"
        title="Responsible"
        value={inputs["responsible"] || ""}
      ></Field>
      <Field
        onChange={handleChange}
        name="city"
        title="City"
        value={inputs["city"] || ""}
      ></Field>
      <Field
        onChange={handleChange}
        name="phone"
        title="Phone"
        value={inputs["phone"] || ""}
      ></Field>
      <Field
        onChange={handleChange}
        name="mail"
        title="Mail"
        value={inputs["mail"] || ""}
      ></Field>
      <Field
        onChange={handleChange}
        name="description"
        description
        title="Description"
        value={inputs["description"] || ""}
      ></Field>
      <div className="loc-btns">
        <Button
          onClick={handleUpdateorCreate}
          primary
          className={"loc-update-btn"}
        >
          {loc_id ? "Update" : "Create"}
        </Button>
      </div>
    </div>
  );
  // (locStatus === "succeeded" && hdStatus === "succeeded" && showPortal)

  console.log(locStatus);
  if (loc_id && locStatus === "succeeded" && showPortal) {
    render_portal = (
      <Modal>
        <div className="public-location-modal">
          Localization added succefully!
        </div>
      </Modal>
    );
  } else {
    render_portal = "";
  }

  return (
    <Panel>
      <div className="user-location-content">
        <h1>{hdTitle}</h1>
        <h3>{jobTitle}</h3>
        {rendered_content}
      </div>
      {render_portal}
    </Panel>
  );
};

export default LocationPanel;
