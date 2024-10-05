import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const isLoggedIn = !!token;
  // const serverhost = "http://localhost:6010";

  const serverhost = "https://usermanagementapplication-u25h.onrender.com";

  const storeTokenInLS = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
    setUser("");
  };

  // Get login user data logic
  const userAuthentication = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${serverhost}/api/auth/user`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        const responseData = await response.json();
        setUser(responseData);
        setIsLoading(false);
      } else {
        console.log("Error fetching user data or user not login");
        setIsLoading(false);
      }
    } catch (err) {
      console.log("error from userAutentication");
    }
  };
  useEffect(() => {
    userAuthentication();
  }, [token]);
  return (
    <>
      <AuthContext.Provider
        value={{
          serverhost,
          token,
          storeTokenInLS,
          user,
          isLoggedIn,
          LogoutUser,
          isLoading,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
}
