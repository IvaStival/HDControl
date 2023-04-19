import { space } from "../styles";
import "./Group.css";

const Group = ({
  mL = "",
  mR = "",
  mT = space.M,
  mB = space.M,
  dir = "",
  children,
}) => {
  return (
    <div
      className="group-content"
      style={{
        marginLeft: mL,
        marginRight: mR,
        marginTop: mT,
        marginBottom: mB,
        flexDirection: dir,
      }}
    >
      {children}
    </div>
  );
};

export default Group;
