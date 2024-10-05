import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../store/auth-store";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function AllUsers() {
  const [allUsers, setAllUsers] = useState([]);
  const { serverhost, token } = useContext(AuthContext);

  // Delete user by id logic
  const handleOnDelete = async (userId) => {
    try {
      const response = await fetch(
        `${serverhost}/api/admin/user/delete/${userId}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const responseData = await response.json();
      console.log(responseData);
      if (response.ok) {
        getAllUsers();
        toast.success(
          responseData.extraMessage
            ? responseData.extraMessage
            : responseData.message
        );
      } else {
        toast.error(
          responseData.extraMessage
            ? responseData.extraMessage
            : responseData.message
        );
      }
    } catch (err) {
      console.log("Did not get user Id or URL have some issue", err);
    }
  };

  // Get all users logic
  const getAllUsers = async () => {
    try {
      const response = await fetch(`${serverhost}/api/admin/users`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        setAllUsers(responseData);
      }
    } catch (err) {
      console.log("Could Not finds All users data url have some issue");
    }
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <section className="section-table">
        <div className="container scroll-table ">
          <table className="table-container">
            <thead>
              <tr className="grid grid-six--cols">
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {allUsers.map((currElem) => (
                <tr key={currElem._id} className="grid grid-six--cols ">
                  <td>{currElem.username}</td>
                  <td>{currElem.email}</td>
                  <td>{currElem.phone}</td>
                  <td>{currElem.address}</td>
                  <td>
                    <Link
                      to={`/admin/user/${currElem._id}/edit`}
                      className="edit-btn"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => handleOnDelete(currElem._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default AllUsers;
