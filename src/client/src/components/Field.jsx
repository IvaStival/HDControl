import { font, space } from "../styles";
import "./Field.css";

const Field = ({
  onChange,
  onClick,
  title,
  name,
  type = "text",
  defaultValue,
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
            placeholder={placeholder}
            style={{ height: "100px", fontSize: font.S, padding: space.M }}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="field">
      <label>{title}</label>
      <input
        name={name}
        onChange={onChange}
        onClick={onClick}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        min={type === "number" ? 0 : ""}
        max={type === "number" ? 10 : ""}
        style={{
          width: type === "number" ? "40px" : "",
          marginLeft: type === "number" ? "-6px" : "",
        }}
      />
      <span style={{ fontSize: font.M, color: "#lightgray" }}>
        {type === "number" ? "TB" : ""}
      </span>
    </div>
  );
};

export default Field;
