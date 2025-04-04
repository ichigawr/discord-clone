import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";

const useCurrentUser = () => useContext(AuthContext);

export default useCurrentUser;
