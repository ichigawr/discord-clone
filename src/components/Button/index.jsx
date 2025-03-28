import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import validateProps from "@/utils/validateProps";
import styles from "./Button.module.css";

function Button(props) {
  const {
    children,
    variant = "primary",
    size = "md",
    type = "button",
    to = "",
    href = "",
    disabled = false,
    isLoading = false,
    onClick,
  } = props;

  validateProps(Button, props);

  let Component = "button";
  const passedProps = {};

  if (to) {
    Component = Link;
    passedProps.to = to;
  } else if (href) {
    Component = "a";
    passedProps.href = href;
    passedProps.target = "_blank";
    passedProps.rel = "noreferrer noopener";
  } else {
    passedProps.type = type;
  }

  const handleClick = () => {
    if (disabled || isLoading) return;
    onClick && onClick();
  };

  return (
    <Component
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      onClick={handleClick}
      {...passedProps}
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
  variant: PropTypes.oneOf(["primary", "success", "destructive", "link"]),
  size: PropTypes.oneOf(["tn", "sm", "md", "lg", "xl"]),
  type: PropTypes.oneOf(["button", "submit"]),
  to: PropTypes.string,
  href: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
