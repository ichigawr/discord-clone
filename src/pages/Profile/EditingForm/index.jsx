import { useEffect } from "react";
import Button from "@/components/Button";
import styles from "../Profile.module.css";
import authService from "@/services/authService";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import profileSchema from "@/schema/profileSchema";

let emailTimerId = null;
let phoneTimerId = null;
let usernameTimerId = null;

function EditingForm({ user, onSubmit, handleCancel }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(profileSchema),
    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      gender: user?.gender || "",
      email: user?.email || "",
      phone: user?.phone || "",
      username: user?.username || "",
      birthday: user?.birthday
        ? new Date(user.birthday).toISOString().split("T")[0]
        : "",
    },
  });

  const email = watch("email");
  const phone = watch("phone");
  const username = watch("username");

  useEffect(() => {
    if (!email) return;

    clearTimeout(emailTimerId);
    emailTimerId = setTimeout(async () => {
      if (errors.email) return;

      const alreadyExist = await authService.checkEmail(email, user?.id);

      if (alreadyExist) {
        setError("email", { message: "Email already exists" });
      }
    }, 500);
  }, [email, errors, setError, user]);

  useEffect(() => {
    if (!phone) return;

    clearTimeout(phoneTimerId);
    phoneTimerId = setTimeout(async () => {
      if (errors.phone) return;

      const alreadyExist = await authService.checkPhone(phone, user?.id);

      if (alreadyExist) {
        setError("phone", { message: "Phone already exists" });
      }
    }, 500);
  }, [phone, errors, setError, user]);

  useEffect(() => {
    if (!username) return;

    clearTimeout(usernameTimerId);
    usernameTimerId = setTimeout(async () => {
      if (errors.username) return;

      const alreadyExist = await authService.checkUsername(username, user?.id);

      if (alreadyExist) {
        setError("username", { message: "Username already exists" });
      }
    }, 500);
  }, [username, errors, setError, user]);

  const onCancel = () => {
    reset();
    handleCancel();
  };

  return (
    <form className={styles.editForm} onSubmit={handleSubmit(onSubmit)}>
      <h1 style={{ marginBottom: "20px" }}>Profile Editing</h1>

      <div className={styles.formGroup}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          {...register("username")}
          className={errors.username ? styles.errorInput : ""}
        />
        <p className={styles.errorText}>{errors.username?.message}</p>
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            {...register("firstName")}
            className={errors.firstName ? styles.errorInput : ""}
          />
          <p className={styles.errorText}>{errors.firstName?.message}</p>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            {...register("lastName")}
            className={errors.lastName ? styles.errorInput : ""}
          />
          <p className={styles.errorText}>{errors.lastName?.message}</p>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className={errors.email ? styles.errorInput : ""}
        />
        <p className={styles.errorText}>{errors.email?.message}</p>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="tel"
          {...register("phone")}
          className={errors.phone ? styles.errorInput : ""}
        />
        <p className={styles.errorText}>{errors.phone?.message}</p>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="gender">Gender</label>
        <select
          id="gender"
          {...register("gender")}
          className={errors.gender ? styles.errorInput : ""}
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <p className={styles.errorText}>{errors.gender?.message}</p>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="birthday">Birthday</label>
        <input
          id="birthday"
          type="date"
          {...register("birthday")}
          className={errors.birthday ? styles.errorInput : ""}
        />
        <p className={styles.errorText}>{errors.birthday?.message}</p>
      </div>

      <div className={styles.formActions}>
        <Button type="submit" size="lg">
          Save Changes
        </Button>
        <Button variant="destructive" size="lg" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
}

export default EditingForm;
