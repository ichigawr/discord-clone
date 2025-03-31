import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import config from "@/config";
import authService from "@/services/authService";
import httpRequest from "@/utils/httpRequest";
import registerSchema from "@/schema/registerSchema";

import Button from "@/components/Button";
import DateOfBirth from "./DateOfBirth";
import InputFields from "./InputFields";
import styles from "../Auth.module.css";

let timerId = null;

function Register() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const formControl = useForm({
    mode: "onChange",
    resolver: yupResolver(registerSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
    watch,
    setError,
    setValue,
  } = formControl;

  const email = watch("email");

  useEffect(() => {
    if (!email) return;

    clearTimeout(timerId);
    timerId = setTimeout(async () => {
      if (errors.email) return;

      const alreadyExist = await authService.checkEmail(email);

      if (alreadyExist) {
        setError("email", { message: "Email already exists" });
      }
    }, 500);
  }, [email, errors, setError]);

  const onSubmit = async (userInfo) => {
    const body = {
      firstName: userInfo.username,
      lastName: userInfo.username,
      email: userInfo.email,
      password: userInfo.password,
      password_confirmation: userInfo.password,
    };

    console.log(body)

    setIsLoading(true);

    const data = await authService.register(body);

    if (data.status === "success") {
      httpRequest.setToken(data.access_token);
      navigate(config.routes.home);
    }

    setIsLoading(false);
  };

  console.log(errors);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.header}>
        <h1>Create an account</h1>
      </div>

      <InputFields formControl={formControl} />

      <DateOfBirth
        errorMessage={errors.dateOfBirth?.message}
        setValue={setValue}
      />

      <div className={styles.fullWidth}>
        <Button size="lg" type="submit" isLoading={isLoading}>
          Continue
        </Button>
      </div>

      <p className={styles.terms}>
        By registering, you agree to Discord's{" "}
        <Button variant="link" href="https://discord.com/terms">
          Terms of Service
        </Button>{" "}
        and{" "}
        <Button variant="link" href="https://discord.com/privacy">
          Privacy Policy
        </Button>
      </p>

      <div className={`${styles.alreadyHaveAccount} ${styles.marginTop20}`}>
        <Button
          variant="link"
          to={config.routes.login}
          className="displayBlock"
        >
          Already have an account?
        </Button>
      </div>
    </form>
  );
}

export default Register;
