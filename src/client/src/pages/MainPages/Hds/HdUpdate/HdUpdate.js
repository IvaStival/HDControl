import { useNavigate, useParams } from "react-router-dom";

import { useFetchHdsQuery, useUpdateHdMutation } from "../../../../store";

import Panel from "../../../../components/common/Panel/Panel";
import Form from "../../../../components/hds/Form/Form";

import "../../../index.css";

const HdUpdate = () => {
  const { id } = useParams();
  const { data, error, isError, isLoading } = useFetchHdsQuery();
  const [updateHd] = useUpdateHdMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e, inputs) => {
    e.preventDefault();

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
    console.log(error);
    return <div>Error on Fetching Data</div>;
  } else {
    const item = data.find((item) => item.id === parseInt(id));

    values = {
      title: item.title,
      size: item.size,
      code: item.code,
    };
  }

  return (
    <Panel>
      <Form isCreate={false} values={values} handleSubmit={handleSubmit} />
    </Panel>
  );
};

export default HdUpdate;
