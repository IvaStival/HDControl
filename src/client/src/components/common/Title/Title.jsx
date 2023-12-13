import "./Title.css";

const Title = ({ className, children }) => {
  return <h2 className={`title ${className}`}>{children}</h2>;
};

export default Title;
