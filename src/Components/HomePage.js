import styles from "../App.module.css";
import { NavLink } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div className={styles["home-wrapper"]}>
        <header className={styles.header}>
          <h1>CinnaBuns</h1>

          <p className={styles["user-status"]}>
            <NavLink to="/form">
              <button className={styles["user-control"]}>SignUp</button>
            </NavLink>

            <NavLink to="/login">
              <button className={styles["user-control"]}>LogIn</button>
            </NavLink>
          </p>
        </header>
      </div>
    </>
  );
};

export default Homepage;
