import { font, space } from "../styles";
import "./CheckBox.css";

const CheckBox = ({
  handleChange,
  disable,
  defaultValue,
  title,
  tS = font.S,
  mL,
  mR,
}) => {
  return (
    <div
      className="checkbox-content"
      style={{ marginLeft: mL, marginRight: mR }}
    >
      <input
        onChange={handleChange}
        type="checkbox"
        disabled={disable}
        checked={defaultValue}
      />
      <label htmlFor="" style={{ fontSize: tS, marginLeft: space.S }}>
        {title}
      </label>
    </div>
  );
};

export default CheckBox;
