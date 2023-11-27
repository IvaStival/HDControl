import "./HdList.css";

import HdItem from "../HdItem/HdItem";

const HdList = ({ data }) => {
  let rendered_list = [];

  const handleClick = (e) => {
    e.stopPropagation();
  };

  for (const item of data) {
    rendered_list.push(<HdItem key={item} number={item} />);
  }

  return (
    <div onClick={handleClick} className="hd-item-list">
      {rendered_list}
    </div>
  );
};

export default HdList;
