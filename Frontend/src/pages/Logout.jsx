import { useContext, useEffect } from "react";
import { AuthContext } from "../store/auth-store";
import { Navigate } from "react-router-dom";
function Logout() {
  const { LogoutUser } = useContext(AuthContext);

  useEffect(() => {
    LogoutUser();
  }, [LogoutUser]);

  return <Navigate to="/login" />;
}

export default Logout;
