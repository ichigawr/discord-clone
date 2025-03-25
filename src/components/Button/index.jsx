import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import validateProps from "@/utils/validateProps";
import styles from "./Button.module.css";

function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  to = null,
  disabled = false,
}) {
  validateProps(Button, { variant, size, className, type, to, disabled });
  const navigate = useNavigate();

  const classes = className
    .split(" ")
    .map((c) => styles[c])
    .join(" ");
  const handleClick = () => to && navigate(to);

  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${classes}`}
      type={type}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.oneOf(["fullWidth", "displayBlock"]),
  variant: PropTypes.oneOf(["primary", "success", "destructive", "link"]),
  size: PropTypes.oneOf(["tn", "sm", "md", "lg", "xl"]),
  type: PropTypes.oneOf(["button", "submit"]),
  to: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
