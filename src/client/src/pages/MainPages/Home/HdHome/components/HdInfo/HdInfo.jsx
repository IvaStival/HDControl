import "./HdInfo.css";

import Panel from "../../../../../../components/common/Panel/Panel";
import InfoData from "./InfoData";

const HdInfo = () => {
  const info = {
    location: "Produtora 3D Xilovers",
    responsible: "Ivã Stival",
    city: "São Paulo",
    phone: "(45) 99823123",
    mail: "xilovers@produtora.com",
    description:
      "O Hd foi entregue para o fulano fazer color asldkjalskdjal ksdjlaksjdla asdasdasd .",
  };
  return (
    <Panel className="info-panel">
      <InfoData data={info} />
    </Panel>
  );
};

export default HdInfo;
