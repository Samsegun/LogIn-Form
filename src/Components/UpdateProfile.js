import { Link } from "react-router-dom";
import styles from "../App.module.css";
import { useAuth } from "../Context/AuthContext";

const UpdateProfile = () => {
  const { currentUser } = useAuth();

  return (
    <div className={styles["update-profile"]}>
      <div className={styles["update-header"]}>
        <h2>profile update</h2>

        <div className={styles["user-status"]}>
          <span className={styles["user-name"]}>
            Welcome, {currentUser.email}
          </span>

          <Link to="/" className={styles.link}>
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
