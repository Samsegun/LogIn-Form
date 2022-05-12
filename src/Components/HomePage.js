import styles from "../App.module.css";
import { NavLink } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div className={styles["home-wrapper"]}>
        <header className={styles.header}>
          <h1>CinnaBuns</h1>

          <div className={styles["user-status"]}>
            <span className={styles["user-name"]}>Welcome, user</span>

            {/* <NavLink to="/form">
              <button className={styles["user-control"]}>SignUp</button>
            </NavLink> */}

            <NavLink to="/sign-in">
              <button className={styles["user-control"]}>LogOut</button>
            </NavLink>
          </div>
        </header>
      </div>
    </>
  );
};

export default Homepage;
