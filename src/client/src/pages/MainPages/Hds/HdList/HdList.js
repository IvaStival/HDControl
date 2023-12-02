import "./HdList.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Table from "../../../../components/common/Table/Table";
import Button from "../../../../components/common/Button/Button";
import MyQRCode from "../components/QRCode/QRCode";

import { selectHds, selectStatus } from "../../../../store/api/hds/hdSlice";
import { getHds } from "../../../../store/api/hds/actions/getHds";
import { deleteHd } from "../../../../store/api/hds/actions/deleteHd";

const HdList = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentID, setCurrentID] = useState();
  const dispatch = useDispatch();
  const hdStatus = useSelector(selectStatus);
  const data = useSelector(selectHds);

  const navigate = useNavigate();

  useEffect(() => {
    if (hdStatus === "idle") {
      dispatch(getHds());
    }
  }, [hdStatus, dispatch]);

  const handleOpen = (e, id) => {
    setShowModal(true);
    setCurrentID(id);
  };

  const handleClose = (e) => {
    setShowModal(false);
  };

  const modal = (
    <MyQRCode
      id={currentID}
      name={"FFHD" + currentID}
      handleClose={handleClose}
    />
  );

  const config = [
    {
      label: "Hd Title",
      render: (hd) => hd.title,
      highLight: true,
    },
    {
      label: "Size",
      render: (hd) => hd.size,
    },
    {
      label: "Code",
      render: (hd) => hd.code,
    },
    {
      label: "QR",
      render: (hd) => (
        <Button
          onClick={(e) => handleOpen(e, hd.id)}
          className="btn-crud"
          primary
          rounded
        >
          QR
        </Button>
      ),
    },
    {
      label: "",
      render: (hd) => (
        <div className="btn-container">
          <Button
            className="btn-crud"
            primary
            rounded
            onClick={() => handleUpdateHd(hd)}
          >
            Edit
          </Button>
          <Button
            className="btn-crud btn-del"
            secondary
            rounded
            onClick={() => handleRemoveHd(hd)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  const handleAddHd = (hd) => {
    navigate("/create");
  };

  const handleUpdateHd = (hd) => {
    navigate(`/update/${hd._id}`);
  };

  const handleRemoveHd = async (hd) => {
    // THIS WILL REMOVE BOTH THE DATA hds INFO AND locs INFO

    // await removeHd(hd)
    //   .unwrap()
    //   .catch((error) => console.error(error));

    dispatch(deleteHd(hd._id));
  };

  const keyFn = (hd) => {
    return hd._id;
  };

  let content;

  if (hdStatus === "loading") {
    content = <div>Fetching Data</div>;
  } else if (hdStatus === "failed") {
    content = <div>Error Fetching Hds!</div>;
  } else if (hdStatus === "succeeded") {
    content = (
      <Table
        data={data}
        config={config}
        keyFn={keyFn}
        className="table-content"
      />
    );
  }

  return (
    <div className="hds-content">
      {showModal && modal}
      <Button onClick={handleAddHd} className="btn-add" primary rounded50>
        +
      </Button>
      {content}
    </div>
  );
};

export default HdList;
