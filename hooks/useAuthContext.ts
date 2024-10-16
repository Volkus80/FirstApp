import { useContext } from "react";
import { AuthContext } from "../hoc/AuthProvider";

export const useAuthContext = () => useContext(AuthContext);