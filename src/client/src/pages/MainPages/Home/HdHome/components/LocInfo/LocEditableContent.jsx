import "./LocEditableContent.css";
import { useEffect, useState } from "react";

import Buttom from "../../../../../../components/common/Button/Button";
import Field from "../../../../../../components/common/Field/Field";

import { updateLoc } from "../../../../../../store/api/loc/actions/updateLoc";
import { useDispatch } from "react-redux";
import { getLoc } from "../../../../../../store/api/loc/actions/getLoc";

import AxiosHelper from "../../../../../../utils/axios-helper";
import { backend_url, backend_port } from "../../../../../../utils/constants";
import { createLoc } from "../../../../../../store/api/loc/actions/createLoc";
import { updateHd } from "../../../../../../store/api/hds/actions/updateHd";

const _axios = new AxiosHelper(`${backend_url}:${backend_port}`);

const LocEditableContent = ({
  id,
  hd_id,
  handleClick,
  handleEditLocation,
  values = {
    location: "",
    responsible: "",
    city: "",
    phone: "",
    mail: "",
    description: "",
  },
}) => {
  const [inputs, setInputs] = useState(values);
  const dispatch = useDispatch();

  useEffect(() => {
    // GET DIRECTLY THE LOCALIZATION DATA IF IT EXISTS
    const getLocData = async () => {
      const config = {
        headers: {
          credentials: "include",
          "Content-Type": "application/json",
        },
      };
      const result = await _axios.get(`/locs/loc/${id}`, {}, config);
      setInputs(result.data.data);
    };
    if (id) {
      getLocData();
    }
  }, [id]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  // CREATE OR UPDATE A LOCATION
  const handleUpdateorCreate = (e) => {
    if (id) {
      dispatch(updateLoc({ id: id, locData: inputs }));
    } else {
      dispatch(createLoc({ locData: inputs })).then(({ payload }) => {
        dispatch(
          updateHd({ id: hd_id, hdData: { localizationId: payload.id } })
        );
      });
    }
    // LocInfoData to close the edit mode
    handleEditLocation();
  };

  let rendered_content;
  if (inputs) {
    rendered_content = (
      <div onClick={handleClick} className="loc-edit-content">
        <Field
          onChange={handleChange}
          name="location"
          title="Localization"
          value={inputs["location"]}
        ></Field>
        <Field
          onChange={handleChange}
          name="responsible"
          title="Responsible"
          value={inputs["responsible"]}
        ></Field>
        <Field
          onChange={handleChange}
          name="city"
          title="City"
          value={inputs["city"]}
        ></Field>
        <Field
          onChange={handleChange}
          name="phone"
          title="Phone"
          value={inputs["phone"]}
        ></Field>
        <Field
          onChange={handleChange}
          name="mail"
          title="Mail"
          value={inputs["mail"]}
        ></Field>
        <Field
          onChange={handleChange}
          name="description"
          description
          title="Description"
          value={inputs["description"]}
        ></Field>
        <div className="loc-btns">
          <Buttom className={"loc-update-btn"}>Cancel</Buttom>
          <Buttom
            onClick={handleUpdateorCreate}
            primary
            className={"loc-update-btn"}
          >
            {id ? "Update" : "Create"}
          </Buttom>
        </div>
      </div>
    );
  } else {
    rendered_content = <div>Loading...</div>;
  }

  return <>{rendered_content}</>;
};

// location
// responsible
// city
// phone
// mail
// description

export default LocEditableContent;
