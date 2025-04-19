import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";

import config from "@/config";
import loginSchema from "@/schemas/loginSchema";
import authService from "@/services/authService";
import httpRequest from "@/utils/httpRequest";

import Button from "@/components/Button";
import styles from "../Auth.module.css";
import ErrorMessage from "../ErrorMessage";
import useCurrentUser from "@/hooks/useCurrentUser";

function Login() {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const { fetchCurrentUser } = useCurrentUser();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "vinh@gmail.com",
      password: "12345678",
    },
  });

  const onSubmit = async (loginInfo) => {
    setIsLoading(true);

    const res = await authService.login(loginInfo);

    if (res.status === "success") {
      httpRequest.setToken(res.data.access_token);
      await fetchCurrentUser();
      navigate(params.get("continue") || config.routes.home);
    } else {
      const message = "Login or password is invalid.";
      setError("email", { message });
      setError("password", { message });
    }

    setIsLoading(false);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.header}>
        <h1>Welcome back!</h1>
        <p>We're so excited to see you again</p>
      </div>

      <div className={`${styles.fieldWrapper} ${styles.marginBottom20}`}>
        <label htmlFor="email" className={errors.email ? styles.error : ""}>
          Email or phone number{" "}
          <ErrorMessage errorMessage={errors.email?.message} />
        </label>
        <input
          type="text"
          id="email"
          {...register("email")}
          autoComplete="on"
        />
      </div>

      <div className={styles.fieldWrapper}>
        <label
          htmlFor="password"
          className={errors.password ? styles.error : ""}
        >
          Password <ErrorMessage errorMessage={errors.password?.message} />
        </label>
        <input
          type="password"
          id="password"
          {...register("password")}
          autoComplete="on"
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
