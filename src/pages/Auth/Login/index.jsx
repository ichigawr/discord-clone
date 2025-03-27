import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import config from "@/config";
import auth from "@/utils/auth";

import Button from "@/components/Button";
import styles from "../Auth.module.css";

function Login() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false);

  const errorMessages = hasError ? (
    <span>- Login or password is invalid.</span>
  ) : (
    <span className={styles.required}>*</span>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formValues = { email: login, password };
    const data = await auth("login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });

    if (!data) {
      setHasError(true);
      return;
    }

    localStorage.setItem("token", data.access_token);
    navigate(params.get("continue") || config.routes.home);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.header}>
        <h1>Welcome back!</h1>
        <p>We're so excited to see you again</p>
      </div>

      <div className={`${styles.fieldWrapper} ${styles.marginBottom20}`}>
        <label htmlFor="email" className={hasError ? styles.error : ""}>
          Email or phone number {errorMessages}
        </label>
        <input
          type="text"
          id="email"
          name="email"
          required
          autoComplete="on"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
      </div>

      <div className={styles.fieldWrapper}>
        <label htmlFor="password" className={hasError ? styles.error : ""}>
          Password {errorMessages}
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          autoComplete="on"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className={`${styles.forgotPassword} ${styles.marginBottom20}`}>
        {/* TODO: replace "to" path with actual path */}
        <Button variant="link" to={config.routes.login}>
          Forgot your password?
        </Button>
      </div>

      {/* TODO: implement loading state */}
      <Button size="lg" className="fullWidth" type="submit">
        Log In
      </Button>

      <div className={styles.needAccount}>
        <span>Need an account? </span>
        <Button variant="link" to={config.routes.register}>
          Register
        </Button>
      </div>
    </form>
  );
}

export default Login;
