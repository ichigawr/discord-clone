import ErrorMessage from "../../../components/ErrorMessage";
import styles from "@/pages/Auth/Auth.module.css";

function InputFields({ formControl }) {
  const {
    register,
    formState: {
      errors: { email, password, username },
    },
  } = formControl;

  return (
    <>
      <div className={`${styles.fieldWrapper} ${styles.marginBottom20}`}>
        <label htmlFor="email" className={email ? styles.error : ""}>
          Email <ErrorMessage errorMessage={email?.message} />
        </label>
        <input type="email" {...register("email")} autoComplete="on" />
      </div>

      <div className={`${styles.fieldWrapper} ${styles.marginBottom20}`}>
        <label htmlFor="displayName">Display name</label>
        <input type="text" {...register("displayName")} autoComplete="on" />
      </div>

      <div className={`${styles.fieldWrapper} ${styles.marginBottom20}`}>
        <label htmlFor="password" className={password ? styles.error : ""}>
          Password <ErrorMessage errorMessage={password?.message} />
        </label>
        <input type="password" {...register("password")} autoComplete="on" />
      </div>

      <div className={`${styles.fieldWrapper} ${styles.marginBottom20}`}>
        <label htmlFor="username" className={username ? styles.error : ""}>
          Username <ErrorMessage errorMessage={username?.message} />
        </label>
        <input type="text" {...register("username")} autoComplete="on" />
      </div>
    </>
  );
}

export default InputFields;
