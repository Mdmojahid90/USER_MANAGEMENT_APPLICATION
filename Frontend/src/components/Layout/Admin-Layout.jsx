import { useContext } from "react";
import { Navigate, NavLink, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../store/auth-store";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

function AdminLayout() {
  const { isLoading, user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (isLoading) {
    return <h2>Data Is Loading...</h2>;
  }

  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <header className="admin-header">
      <div className="admin-container">
        <div className="navbar">
          <ul className="navlist">
            <li>
              <IoHomeOutline className="nav-icon" />
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <FaRegUser className="nav-icon" />
              <NavLink to="/admin/users">Users</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </header>
  );
}
export default AdminLayout;
