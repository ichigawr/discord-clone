import { memo } from "react";
import PropTypes from "prop-types";
import validateProps from "@/utils/validateProps";
import styles from "./Avatar.module.css";

function Avatar({ name, thumbnail, outline = false, status = false }) {
  validateProps(Avatar, { name, thumbnail, outline, status });

  return (
    <div className={styles.avatar}>
      <img src={thumbnail} alt={name} />
      {status && <div></div>}
    </div>
  );
}

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  outline: PropTypes.bool,
  status: PropTypes.bool,
};

export default memo(Avatar);
