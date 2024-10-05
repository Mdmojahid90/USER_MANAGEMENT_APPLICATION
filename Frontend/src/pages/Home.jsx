import { useContext } from "react";
import { AuthContext } from "../store/auth-store";
import { Link } from "react-router-dom";

function Home() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <main className="section-hero">
        <div className="container grid grid-two--cols">
          <div className="hero-content">
            <p className="hero-subheading">
              Welcome,
              <span className="username">{user.username && user.username}</span>
              to our website
            </p>
            <h1>Building CRUD Application using MERN Stack.</h1>
            <p className="para">
              Building a CRUD application in the MERN stack involves using
              MongoDB as the database, Express.js as the backend framework,
              React.js for the frontend, and Node.js as the runtime environment.
              A CRUD application is a type of software application that performs
              four key operations: Create, Read, Update, and Delete. These
              operations represent the basic actions that can be performed on
              data, and they form the fundamental operations in many types of
              database-driven applications.
            </p>
            {user.username ? (
              <Link to={"/admin"} className="btn-div">
                <button className="btn">
                  Click Here To Check All Users Data
                </button>
              </Link>
            ) : (
              <Link to={"/login"} className="btn-div">
                <button className="btn">
                  Please Login To Check All Users Data
                </button>
              </Link>
            )}
          </div>
          <div className="hero-img">
            <img src="./images/hero6.png" alt="hero-image-loading" />
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
