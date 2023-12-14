import "./LocInfo.css";

import { useSelector } from "react-redux";

import Panel from "../../../../../../components/common/Panel/Panel";
import HdInfoData from "./LocInfoData/LocInfoData";

import { selectJobHds } from "../../../../../../store/api/jobs/jobSlice";
import { selectHds } from "../../../../../../store/api/hds/hdSlice";
import Title from "../../../../../../components/common/Title/Title";

const LocInfo = () => {
  const currentHdsIds = useSelector(selectJobHds);
  const hds = useSelector(selectHds);

  let renderedContent;

  if (currentHdsIds.length) {
    renderedContent = currentHdsIds.map((id) => {
      const hd_data = hds.find((hd) => hd._id === id);

      return <HdInfoData key={id} data={hd_data} />;
    });
  }

  return (
    <div className="info-content">
      <Title>Localization</Title>
      <Panel className="info-panel">{renderedContent}</Panel>
    </div>
  );
};

export default LocInfo;
