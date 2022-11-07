import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { projectAuth } from "../firebase/config";

export const useLogout = () => {
  const [logoutPending, setLogoutPending] = useState(false);
  const [logoutError, setLogoutError] = useState(null);

  const { dispatch } = useContext(AuthContext);

  const logout = async () => {
    setLogoutError(null);
    setLogoutPending(true);

    try {
      await projectAuth.signOut()
      dispatch({ type: "LOGOUT" });
      setLogoutPending(false)
      setLogoutError(null)
    } catch (err) {
      setLogoutPending(false)
      setLogoutError(err.message)
      console.log(err.message)
    }
  };

  return { logout, logoutPending, logoutError };
};
