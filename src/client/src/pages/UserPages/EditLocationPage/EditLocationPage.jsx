import { useParams } from "react-router-dom";

import Form from "../../../components/user/Form/Form";

import "./EditLocationPage.css";
import { title } from "../../../styles";

const EditLocationPage = () => {
  const { id } = useParams();

  let content = "";

  // if (isFetching) {
  //   content = "";
  // } else if (error) {
  //   content = <div>{error}</div>;
  // } else {
  //   content = <Form data={data[0]} />;
  // }

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
