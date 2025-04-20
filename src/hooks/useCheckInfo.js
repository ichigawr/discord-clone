import { useEffect } from "react";
import { useSelector } from "react-redux";
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
  const currentUser = useSelector((state) => state.auth.currentUser);

  useEffect(() => {
    if (!debouncedEmail || errors[type]) return;

    const checkInfo = async () => {
      const alreadyExist = await authService.checkInfo(
        type,
        debouncedEmail,
        currentUser.id
      );

      if (alreadyExist) {
        const name = type[0].toUpperCase() + type.slice(1);
        setError(type, { message: `${name} already exists` });
      }
    };

    checkInfo();
  }, [type, debouncedEmail, errors, setError, currentUser]);
};

export default useCheckInfo;
