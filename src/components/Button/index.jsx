import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import validateProps from "@/utils/validateProps";
import styles from "./Button.module.css";

function Button({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  to = "",
  href = "",
  disabled = false,
  isLoading = false,
  onClick,
}) {
  validateProps(Button, { variant, size, type, to, disabled });
  let Component = "button";
  const props = {};

  if (to || href) variant = "link";

  if (to) {
    Component = Link;
    props.to = to;
  } else if (href) {
    Component = "a";
    props.href = href;
    props.target = "_blank";
    props.rel = "noreferrer noopener";
  } else {
    props.type = type;
  }

  const handleClick = () => {
    if (disabled || isLoading) return;
    onClick && onClick();
  };

  return (
    <Component
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      onClick={handleClick}
      {...props}
    >
      {isLoading ? (
        <span className={styles.spinner}>
          <span className={styles.spinnerItem}></span>
          <span className={styles.spinnerItem}></span>
          <span className={styles.spinnerItem}></span>
        </span>
      ) : (
        children
      )}
    </Component>
  );
}

Button.propTypes = {
  className: PropTypes.oneOf(["", "fullWidth", "displayBlock"]),
  variant: PropTypes.oneOf(["primary", "success", "destructive"]),
  size: PropTypes.oneOf(["tn", "sm", "md", "lg", "xl"]),
  type: PropTypes.oneOf(["button", "submit"]),
  to: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
