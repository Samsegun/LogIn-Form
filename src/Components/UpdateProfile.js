import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../App.module.css";
import { useAuth } from "../Context/AuthContext";

const UpdateProfile = () => {
  const { currentUser, updateMail, updatePasswrd } = useAuth();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();

  const submitHandler = e => {
    e.preventDefault();

    const promises = [];

    if (emailInputRef.current.value !== currentUser.email) {
      promises.push(updateMail(emailInputRef.current.value));
    }

    if (passwordInputRef.current.value) {
      promises.push(updatePasswrd(passwordInputRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        console.log("update success");
        navigate("/");
      })
      .catch(() => {
        alert("failed to update account!");
      });
  };

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

      <div className={styles["form-wrapper"]}>
        <form className={styles["mobile-form"]} onSubmit={submitHandler}>
          {/* email input field */}
          <div className={styles["form-control"]}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              ref={emailInputRef}
              defaultValue={currentUser.email}
            />
          </div>

          {/* password input field */}
          <div className={styles["form-control"]}>
            <label htmlFor="Password">New Password</label>
            <input
              type="password"
              id="Password"
              ref={passwordInputRef}
              placeholder="Leave blank to keep the same"
            />
          </div>

          <div>
            <button type="submit" className={styles.signUp}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
