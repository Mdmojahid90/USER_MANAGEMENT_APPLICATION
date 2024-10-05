import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../store/auth-store";

function Register() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const { serverhost, storeTokenInLS } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch(`${serverhost}/api/auth/register`, {
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
          username: "",
          email: "",
          phone: "",
          password: "",
          cpassword: "",
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
      console.log("Register Error", err);
    }
  };

  return (
    <section className="section-register">
      <div className="container">
        <div className="register-form">
          <h2 className="common-heading text-center">Registration Form</h2>
          <form onSubmit={handleOnSubmit}>
            <div className="mb-3">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                value={user.username}
                onChange={handleOnChange}
                placeholder="Enter Your Name"
                required
              />
            </div>
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
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                value={user.phone}
                onChange={handleOnChange}
                placeholder="Enter Your Phone Number"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                value={user.address}
                onChange={handleOnChange}
                placeholder="Enter Your Address"
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
            <div className="mb-3">
              <label htmlFor="cpassword">Confirm Password</label>
              <input
                type="password"
                name="cpassword"
                value={user.cpassword}
                onChange={handleOnChange}
                placeholder="Enter Your Confirm Password"
                required
              />
            </div>
            <div className="btn-div">
              <button type="submit" className="btn">
                Submit
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

export default Register;
