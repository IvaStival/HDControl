import { useParams } from "react-router-dom";
import { useFetchLocWithSpecificHdQuery } from "../../store";

import Form from "./components/Form";

import "./EditLocationPage.css";
import { title } from "../../styles";

const EditLocationPage = () => {
  const { id } = useParams();
  const { data, error, isFetching } = useFetchLocWithSpecificHdQuery(id);

  let content = "";

  if (isFetching) {
    content = "";
  } else if (error) {
    content = <div>{error}</div>;
  } else {
    content = <Form data={data[0]} />;
  }

  return (
    <div className="edit-loc-all-content">
      <div className="top-bar">
        <span style={{ fontSize: title.L }}>Fantástica</span>
      </div>
      {content}
    </div>
  );
};

export default EditLocationPage;
