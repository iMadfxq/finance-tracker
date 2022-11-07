import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { projectAuth } from "../firebase/config";

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [logoutPending, setLogoutPending] = useState(false);
  const [logoutError, setLogoutError] = useState(null);

  const { dispatch } = useContext(AuthContext);

  const logout = async () => {
    setLogoutError(null);
    setLogoutPending(true);

    try {
      await projectAuth.signOut();
      dispatch({ type: "LOGOUT" });
      if (!isCancelled) {
        setLogoutPending(false);
        setLogoutError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        setLogoutPending(false);
        setLogoutError(err.message);
      }

      console.log(err.message);
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { logout, logoutPending, logoutError };
};
