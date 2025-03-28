import { useState } from "react";
import { useNavigate } from "react-router-dom";

import config from "@/config";
import authService from "@/services/authService";
import httpRequest from "@/utils/httpRequest";

import Button from "@/components/Button";
import DateOfBirth from "./DateOfBirth";
import InputFields from "./InputFields";
import styles from "../Auth.module.css";

function Register() {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    username: "",
    displayName: "",
    dateOfBirth: "0000-12-00",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const hasError = error !== "";

  const errorMessages = hasError ? (
    <span>- {error}</span>
  ) : (
    <span className={styles.required}>*</span>
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleDateOfBirthChange = (e) => {
    const { name, value } = e.target;
    const dateOfBirth = formValues.dateOfBirth.split("-");

    const dateObj = {
      year: dateOfBirth[0] || "",
      month: dateOfBirth[1] || "",
      day: dateOfBirth[2] || "",
      [name]:
        name === "month" || name === "day" ? value.padStart(2, "0") : value,
    };

    setFormValues({
      ...formValues,
      dateOfBirth: `${dateObj.year}-${dateObj.month}-${dateObj.day}`,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // TODO: implement form validation
    if (formValues.displayName.trim() === "") {
      formValues.displayName = formValues.username;
    }

    const body = {
      firstName: formValues.displayName,
      lastName: formValues.displayName,
      email: formValues.email,
      password: formValues.password,
      password_confirmation: formValues.password,
    };

    setIsLoading(true);

    const data = await authService.register(body);

    if (data.status === "success") {
      httpRequest.setToken(data.access_token);
      navigate(config.routes.home);
    } else {
      setError(data.message);
    }

    setIsLoading(false);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.header}>
        <h1>Create an account</h1>
      </div>

      <InputFields
        hasError={hasError}
        errorMessages={errorMessages}
        formValues={formValues}
        handleInputChange={handleInputChange}
      />

      <DateOfBirth
        hasError={hasError}
        errorMessages={errorMessages}
        dateOfBirth={formValues.dateOfBirth}
        handleDateOfBirthChange={handleDateOfBirthChange}
      />

      {/* TODO: implement loading state */}
      <div className={styles.fullWidth}>
        <Button size="lg" type="submit" isLoading={isLoading}>
          Continue
        </Button>
      </div>

      <p className={styles.terms}>
        By registering, you agree to Discord's{" "}
        <Button variant="link" href="https://discord.com/terms">Terms of Service</Button> and{" "}
        <Button variant="link" href="https://discord.com/privacy">Privacy Policy</Button>
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
