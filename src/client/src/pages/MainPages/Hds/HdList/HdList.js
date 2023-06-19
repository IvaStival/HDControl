import { useFetchHdsQuery, useRemoveHdMutation } from "../../../../store";

import Table from "../../../../components/common/Table/Table";
import Button from "../../../../components/common/Button/Button";
import MyQRCode from "../../../../components/hds/QRCode/QRCode";

import { useNavigate } from "react-router-dom";

import "./HdList.css";
import { useState } from "react";

const HdList = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentID, setCurrentID] = useState();
  const { data, error, isFetching } = useFetchHdsQuery();
  const [removeHd] = useRemoveHdMutation();
  const navigate = useNavigate();

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
    navigate(`/update/${hd.id}`);
  };

  const handleRemoveHd = async (hd) => {
    // THIS WILL REMOVE BOTH THE DATA hds INFO AND locs INFO
    await removeHd(hd)
      .unwrap()
      .catch((error) => console.error(error));
  };

  const keyFn = (hd) => {
    return hd.id;
  };

  let content;

  if (isFetching) {
    content = <div>Fetching Data</div>;
  } else if (error) {
    content = <div>Error Fetching Hds!</div>;
  } else {
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
