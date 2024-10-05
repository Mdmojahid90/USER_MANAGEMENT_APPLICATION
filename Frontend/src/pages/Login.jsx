import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../store/auth-store";

function Login() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const { serverhost, storeTokenInLS } = useContext(AuthContext);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(`${serverhost}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const responseData = await response.json();
      if (response.ok) {
        storeTokenInLS(responseData.token);
        setLoading(false);
        toast.success(
          responseData.extraMessage
            ? responseData.extraMessage
            : responseData.message
        );
        setUser({
          email: "",
          password: "",
        });
        navigate("/");
      } else {
        setLoading(false);
        toast.error(
          responseData.extraMessage
            ? responseData.extraMessage
            : responseData.message
        );
      }
    } catch (err) {
      console.log("Login Error", err);
    }
  };

  return (
    <section className="section-login">
      <div className="container">
        <div className="login-form">
          <h2 className="common-heading text-center">Login Form</h2>
          <form onSubmit={handleOnSubmit}>
            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleOnChange}
                placeholder="Enter Your Email"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleOnChange}
                placeholder="Enter Your Password"
                required
              />
            </div>
            <div className="btn-div">
              <button type="submit" className="btn">
                Login
              </button>
            </div>
          </form>
        </div>
        {loading && (
          <div className="loading">
            <h2>Loading ...</h2>
          </div>
        )}
      </div>
    </section>
  );
}

export default Login;
