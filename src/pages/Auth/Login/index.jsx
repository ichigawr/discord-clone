import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import config from "@/config";
import httpRequest from "@/utils/httpRequest";
import authService from "@/services/authService";

import Button from "@/components/Button";
import styles from "../Auth.module.css";
import ErrorMessage from "../ErrorMessage";

function Login() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const errorMessages = hasError ? "Login or password is invalid." : "";
  const ErrorComponent = <ErrorMessage errorMessage={errorMessages} />;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const formValues = { email: login, password };
    const data = await authService.login(formValues);

    if (data.status === "success") {
      httpRequest.setToken(data.access_token);
      navigate(params.get("continue") || config.routes.home);
    } else {
      setHasError(true);
    }

    setIsLoading(false);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.header}>
        <h1>Welcome back!</h1>
        <p>We're so excited to see you again</p>
      </div>

      <div className={`${styles.fieldWrapper} ${styles.marginBottom20}`}>
        <label htmlFor="email" className={hasError ? styles.error : ""}>
          Email or phone number {ErrorComponent}
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
          Password {ErrorComponent}
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
      <div className={styles.fullWidth}>
        <Button size="lg" type="submit" isLoading={isLoading}>
          Log In
        </Button>
      </div>

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
