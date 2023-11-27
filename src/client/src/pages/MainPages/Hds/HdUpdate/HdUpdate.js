import { useNavigate, useParams } from "react-router-dom";

import { useFetchHdQuery, useUpdateHdMutation } from "../../../../store";

import Panel from "../../../../components/common/Panel/Panel";
import Form from "../components/Form/Form";

import "../../../index.css";

const HdUpdate = () => {
  const { id } = useParams();
  const { data, error, isError, isLoading } = useFetchHdQuery(id);
  const [updateHd] = useUpdateHdMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e, inputs) => {
    e.preventDefault();

    console.log(inputs);
    await updateHd({ id, inputs })
      .unwrap()
      .then((response) => {
        navigate("/hds");
      })
      .catch((error) => console.error(error));
  };

  let values = {};

  if (isLoading) {
    return <div>Loading ...</div>;
  } else if (isError) {
    return <div>Error on Fetching Data</div>;
  } else {
    values = {
      title: data.data.title,
      size: data.data.size,
      code: data.data.code,
    };
  }

  return (
    <Panel>
      <Form isCreate={false} values={values} handleSubmit={handleSubmit} />
    </Panel>
  );
};

export default HdUpdate;
