import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../store/auth-store";
import navlogo from "../assest/mojahidlogo2.png";

function Navbar() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      <header className="header">
        <div className="navbar-container">
          <div className="logo">
            <NavLink to="/">
              <img src={navlogo} alt="logo loading" />
            </NavLink>
          </div>
          <div className="navbar">
            <ul className="navlist">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>

              {isLoggedIn ? (
                <>
                  <li>
                    <NavLink to="/logout">Logout</NavLink>
                  </li>
                  <li>
                    <NavLink to="/admin">Admin</NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink to="/register">Register</NavLink>
                  </li>
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
