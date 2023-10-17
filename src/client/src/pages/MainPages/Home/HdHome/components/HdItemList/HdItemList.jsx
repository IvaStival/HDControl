import "./HdItemList.css";

import HdItem from "../HdItem/HdItem";

const HdItemList = ({ data }) => {
  let rendered_list = [];

  for (const item of data) {
    rendered_list.push(<HdItem number={item} />);
  }

  return <div className="hd-item-list">{rendered_list}</div>;
};

export default HdItemList;
