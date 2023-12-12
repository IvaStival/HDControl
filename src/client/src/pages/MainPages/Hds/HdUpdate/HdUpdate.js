import "../../../index.css";
import "./HdUpdate.css";

import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getHds } from "../../../../store/api/hds/actions/getHds";
import { updateHd } from "../../../../store/api/hds/actions/updateHd";

import { selectHds, selectHdStatus } from "../../../../store/api/hds/hdSlice";

import Panel from "../../../../components/common/Panel/Panel";
import Form from "../components/Form/Form";

const HdUpdate = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector(selectHds);
  const hdStatus = useSelector(selectHdStatus);

  useEffect(() => {
    if (hdStatus === "idle") {
      dispatch(getHds(id));
    }
  }, [hdStatus, dispatch, id]);

  const handleSubmit = async (e, inputs) => {
    e.preventDefault();
    // await updateHd({ id, inputs })
    //   .unwrap()
    //   .then((response) => {
    //     navigate("/hds");
    //   })
    //   .catch((error) => console.error(error));

    dispatch(updateHd({ ...inputs, id: id }));
  };

  let values = {};

  if (hdStatus === "loading") {
    return <div>Loading ...</div>;
  } else if (hdStatus === "failed") {
    return <div>Error on Fetching Data</div>;
  } else if (hdStatus === "succeeded") {
    const hd_data = data.find((hd) => hd._id === id);

    values = {
      title: hd_data.title,
      size: hd_data.size,
      code: hd_data.code,
    };
  }

  return (
    <Panel className={"hd-panel"}>
      <Form isCreate={false} values={values} handleSubmit={handleSubmit} />
    </Panel>
  );
};

export default HdUpdate;
