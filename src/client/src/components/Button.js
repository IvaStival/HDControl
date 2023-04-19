import ClassName from "classnames";

import "./Button.css";

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  rounded50,
  loading,
  className,
  download,
  href,
  file_name,
  ...rest
}) => {
  const classes = ClassName("btn", className, {
    primary: primary,
    secondary: secondary,
    rounded: rounded,
    rounded50: rounded50,
    success: success,
    warning: warning,
    danger: danger,
    outline: outline,
  });

  // USE AN a TAG TO ENABLE TO DOWNLOAD A FILE
  if (download) {
    if (!href || !file_name) {
      console.error(
        "You must to set the data and file_name props when use download parameter."
      );
      return;
    }
    return (
      <a href={href} download={file_name} {...rest} className={classes}>
        {children}
      </a>
    );
    // ELSE RETURN A COMMON BUTTON
  } else {
    return (
      <button {...rest} className={classes}>
        {children}
      </button>
    );
  }
};

Button.protoTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Only one primary, secondary, success, warning, danger can be used."
      );
    }
  },
};

export default Button;
