import { useEffect } from "react";
import useDebounce from "./useDebounce";
import authService from "@/services/authService";

const useCheckInfo = (type, formControl) => {
  const {
    watch,
    formState: { errors },
    setError,
  } = formControl;
  const value = watch(type);
  const debouncedEmail = useDebounce(value, 500);

  useEffect(() => {
    if (!debouncedEmail || errors[type]) return;

    const checkEmail = async () => {
      const alreadyExist = await authService.checkInfo(type, debouncedEmail);
      if (alreadyExist) {
        setError(type, { message: "Email already exists" });
      }
    };

    checkEmail();
  }, [type, debouncedEmail, errors, setError]);
};

export default useCheckInfo;
