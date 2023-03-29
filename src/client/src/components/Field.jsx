import "./Field.css";

const Field = ({
  onChange,
  onClick,
  title,
  name,
  defaultValue,
  placeholder = "",
}) => {
  return (
    <div className="field">
      <label>{title}</label>
      <input
        name={name}
        onChange={onChange}
        onClick={onClick}
        type="text"
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Field;
