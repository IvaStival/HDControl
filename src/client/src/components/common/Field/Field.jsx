import { font, space } from "../../../styles";
import "./Field.css";

const Field = ({
  onChange,
  onClick,
  title,
  top_title = false,
  name,
  bg_color,
  type = "text",
  simbol = "",
  defaultValue,
  value,
  placeholder = "",
  description,
}) => {
  if (description) {
    return (
      <div className="field">
        <div className="desc" style={{ marginBottom: space.M }}>
          <label style={{ paddingBottom: space.M, paddingTop: space.M }}>
            {title}
          </label>
          <textarea
            name={name}
            onChange={onChange}
            onClick={onClick}
            defaultValue={defaultValue}
            value={value}
            placeholder={placeholder}
            style={{ height: "100px", fontSize: font.S, padding: space.M }}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="field">
      <label className={`${top_title ? "top_title" : ""}`}>{title}</label>
      <input
        className={`${top_title ? "top_title" : ""}`}
        name={name}
        onChange={onChange}
        onClick={onClick}
        type={type}
        defaultValue={defaultValue}
        value={value}
        placeholder={placeholder}
        min={type === "number" ? 0 : ""}
        max={type === "number" ? 10 : ""}
        style={{
          width: type === "number" ? "40px" : "",
          marginLeft: type === "number" ? "-6px" : "",
          backgroundColor: bg_color,
        }}
      />
      <span style={{ fontSize: font.S, color: "#lightgray" }}>{simbol}</span>
    </div>
  );
};

export default Field;
