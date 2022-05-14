import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../App.module.css";
import { useAuth } from "../Context/AuthContext";

const UpdateProfile = () => {
  const { currentUser, updateMail, updatePasswrd, updateUserProfile } =
    useAuth();
  //  const [userName, setUserName] = useState();
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();

  // useEffect(() => {
  //   // console.log("going to homepage....");
  //   if(currentUser.displayName === userName) navigate("/");

  // }, [userName, navigate, currentUser.displayName]);

  const submitHandler = e => {
    e.preventDefault();

    const promises = [];

    if (emailInputRef.current.value !== currentUser.email) {
      promises.push(updateMail(emailInputRef.current.value));
    }

    if (passwordInputRef.current.value) {
      promises.push(updatePasswrd(passwordInputRef.current.value));
    }

    if (nameInputRef.current.value !== currentUser.displayName) {
      promises.push(updateUserProfile(nameInputRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        console.log("update success " + currentUser.displayName);

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
            Welcome, {currentUser.displayName}
          </span>

          <Link to="/" className={styles.link}>
            Back to Dashboard
          </Link>
        </div>
      </div>

      <div className={styles["form-wrapper"]}>
        <form className={styles["mobile-form"]} onSubmit={submitHandler}>
          {/* name input field */}
          <div className={styles["form-control"]}>
            <label htmlFor="name">Change Name</label>
            <input
              type="name"
              id="name"
              placeholder="Enter New Name"
              ref={nameInputRef}
              defaultValue={currentUser.displayName}
            />
          </div>

          {/* email input field */}
          <div className={styles["form-control"]}>
            <label htmlFor="email">Change Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter New Email"
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
