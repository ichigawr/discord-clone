import styles from "@/pages/Auth/Auth.module.css";

function InputFields({
  hasError,
  errorMessages,
  formValues,
  handleInputChange,
}) {
  return (
    <>
      <div className={`${styles.fieldWrapper} ${styles.marginBottom20}`}>
        <label htmlFor="email" className={hasError ? styles.error : ""}>
          Email {errorMessages}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="on"
          value={formValues.email}
          onChange={handleInputChange}
        />
      </div>

      <div className={`${styles.fieldWrapper} ${styles.marginBottom20}`}>
        <label htmlFor="displayName">Display name</label>
        <input
          type="text"
          id="displayName"
          name="displayName"
          autoComplete="on"
          value={formValues.displayName}
          onChange={handleInputChange}
        />
      </div>

      <div className={`${styles.fieldWrapper} ${styles.marginBottom20}`}>
        <label htmlFor="password" className={hasError ? styles.error : ""}>
          Password {errorMessages}
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          autoComplete="on"
          value={formValues.password}
          onChange={handleInputChange}
        />
      </div>

      <div className={`${styles.fieldWrapper} ${styles.marginBottom20}`}>
        <label htmlFor="username" className={hasError ? styles.error : ""}>
          Username {errorMessages}
        </label>
        <input
          type="text"
          id="username"
          name="username"
          required
          autoComplete="on"
          value={formValues.username}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
}

export default InputFields;
