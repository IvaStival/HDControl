import { useFetchHdsQuery, useRemoveHdMutation } from "../store";

import Table from "../components/Table";
import Button from "../components/Button";

import { useNavigate } from "react-router-dom";

import "./HdList.css";

const HdList = () => {
  const { data, error, isFetching } = useFetchHdsQuery();
  const [removeHd] = useRemoveHdMutation();
  const navigate = useNavigate();

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
      render: (hd) => hd.qrcode,
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

  const handleRemoveHd = (hd) => {
    removeHd(hd);
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
    content = <Table data={data} config={config} keyFn={keyFn} />;
  }

  return (
    <div className="hds-content">
      <Button onClick={handleAddHd} className="btn-add" primary rounded50>
        +
      </Button>
      {content}
    </div>
  );
};

export default HdList;
