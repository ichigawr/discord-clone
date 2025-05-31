import validateProps from "@/utils/validateProps";
import styles from "@/app/(auth)/Auth.module.css";
import PropTypes from "prop-types";

function ErrorMessage({ errorMessage }) {
  validateProps(ErrorMessage, { errorMessage });

  return (
    <>
      {errorMessage ? (
        <span>- {errorMessage}</span>
      ) : (
        <span className={styles.required}>*</span>
      )}
    </>
  );
}

ErrorMessage.propTypes = {
  errorMessage: PropTypes.string,
};

export default ErrorMessage;
