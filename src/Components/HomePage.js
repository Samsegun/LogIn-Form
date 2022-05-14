import styles from "../App.module.css";
import { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Homepage = () => {
  const { currentUser, logOut } = useAuth();
  const [userName, setUserName] = useState("");
  const history = useNavigate();

  useEffect(() => {
    console.log(currentUser.displayName);

    setUserName(currentUser.displayName);
  }, [currentUser.displayName]);

  const logOutHandler = async () => {
    try {
      await logOut();

      history("/sign-in");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div className={styles["home-wrapper"]}>
        <header className={styles.header}>
          <h1>CinnaBuns</h1>

          <div className={styles["user-status"]}>
            <span className={styles["user-name"]}>Welcome, {userName}</span>

            <button className={styles["user-control"]}>
              <Link to="/updateProfile">Update Profile</Link>
            </button>

            <button className={styles["user-control"]} onClick={logOutHandler}>
              LogOut
            </button>
            {/* </NavLink> */}
          </div>
        </header>
      </div>
    </>
  );
};

export default Homepage;
