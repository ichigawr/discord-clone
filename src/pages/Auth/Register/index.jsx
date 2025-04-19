import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import useCheckInfo from "@/hooks/useCheckInfo";

import config from "@/config";
import registerSchema from "@/schemas/registerSchema";
import authService from "@/services/authService";
import httpRequest from "@/utils/httpRequest";

import Button from "@/components/Button";
import styles from "../Auth.module.css";
import DateOfBirth from "./DateOfBirth";
import InputFields from "./InputFields";
import useCurrentUser from "@/hooks/useCurrentUser";

function Register() {
  const navigate = useNavigate();

  const { fetchCurrentUser } = useCurrentUser();
  const [isLoading, setIsLoading] = useState(false);
  const formControl = useForm({
    mode: "onChange",
    resolver: yupResolver(registerSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
    setValue,
  } = formControl;

  useCheckInfo("email", formControl);

  const onSubmit = async (userInfo) => {
    const body = {
      firstName: userInfo.username,
      lastName: userInfo.username,
      username: userInfo.username,
      email: userInfo.email,
      password: userInfo.password,
      password_confirmation: userInfo.password,
    };

    setIsLoading(true);

    const res = await authService.register(body);

    if (res.status === "success") {
      httpRequest.setToken(res.data.access_token);
      fetchCurrentUser();
      navigate(config.routes.home);
    }

    setIsLoading(false);
  };

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
