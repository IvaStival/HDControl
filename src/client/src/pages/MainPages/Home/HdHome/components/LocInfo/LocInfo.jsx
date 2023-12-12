import "./LocInfo.css";

import { useSelector } from "react-redux";

import Panel from "../../../../../../components/common/Panel/Panel";
import HdInfoData from "./LocInfoData";

import { selectJobHds } from "../../../../../../store/api/jobs/jobSlice";
import { selectHds } from "../../../../../../store/api/hds/hdSlice";

const LocInfo = () => {
  const currentHdsIds = useSelector(selectJobHds);
  const hds = useSelector(selectHds);

  const info = {
    location: "Produtora 3D Xilovers",
    responsible: "Ivã Stival",
    city: "São Paulo",
    phone: "(45) 99823123",
    mail: "xilovers@produtora.com",
    description:
      "O Hd foi entregue para o fulano fazer color asldkjalskdjal ksdjlaksjdla asdasdasd .",
  };

  let renderedContent;

  if (currentHdsIds.length) {
    renderedContent = currentHdsIds.map((id) => {
      const hd_data = hds.find((hd) => hd._id === id);

      return <HdInfoData key={id} data={hd_data} />;
    });
  }

  return <Panel className="info-panel">{renderedContent}</Panel>;
};

export default LocInfo;
