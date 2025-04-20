import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "@/reducers/auth/actions";
import useLoading from "@/hooks/useLoading";


function AuthProvider() {
  const { setLoading } = useLoading();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return null;
}

export { AuthProvider };

