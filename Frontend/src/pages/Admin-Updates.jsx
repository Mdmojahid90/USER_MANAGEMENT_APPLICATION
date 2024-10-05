import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../store/auth-store";
import { toast } from "react-toastify";

function AdminUpdate() {
  const params = useParams();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    address: "",
    phone: "",
  });
  const { serverhost, token } = useContext(AuthContext);

  //Change user Data Logic
  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  // Clicked user data logic;
  const getUserData = async () => {
    try {
      const response = await fetch(
        `${serverhost}/api/admin/user/${params.id}`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const responseData = await response.json();
      if (response.ok) {
        setUserData(responseData);
      } else {
        console.log("Did Not Get Click User Data");
      }
    } catch (err) {
      console.log("Did not get user data URL have some problem");
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${serverhost}/api/admin/user/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(userData),
        }
      );
      const responseData = await response.json();
      if (response.ok) {
        toast.success(
          responseData.extraMessage
            ? responseData.extraMessage
            : responseData.message
        );
        navigate("/admin/users");
      } else {
        toast.success(
          responseData.extraMessage
            ? responseData.extraMessage
            : responseData.message
        );
      }
    } catch (err) {
      console.log("User Not Updated URL have some issue");
    }
  };

  return (
    <>
      <section className="section-update">
        <div className="container">
          <div className="user-edit--form">
            <h2 className="common-heading text-center">Update User</h2>
            <form onSubmit={handleOnSubmit}>
              <div className="mb-3">
                <label htmlFor="username">Name</label>
                <input
                  type="text"
                  value={userData.username}
                  onChange={handleOnChange}
                  name="username"
                  required
                  autoComplete="off"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  value={userData.email}
                  onChange={handleOnChange}
                  name="email"
                  required
                  autoComplete="off"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  value={userData.phone}
                  onChange={handleOnChange}
                  name="phone"
                  required
                  autoComplete="off"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="username">Address</label>
                <input
                  type="text"
                  value={userData.address}
                  onChange={handleOnChange}
                  name="address"
                  required
                  autoComplete="off"
                />
              </div>
              <div className="btn-div">
                <button type="submit" className="btn">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminUpdate;
