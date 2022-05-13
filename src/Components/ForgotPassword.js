import styles from "../App.module.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useAuth } from "../Context/AuthContext";

const ForgotPassword = () => {
  const { resetPassword } = useAuth();
  const emailInputRef = useRef();

  const submitHandler = async e => {
    e.preventDefault();

    try {
      console.log(emailInputRef.current.value);

      await resetPassword(emailInputRef.current.value);

      alert("password reset successful, please check your inbox!");
    } catch (error) {
      alert("failed to reset password" + error.message);
    }
  };

  return (
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
            // onChange={emailInputHandler}
            // value={inputState.enteredEmail}
          />
        </div>

        <div className={styles.mt}>
          <button className={styles.signUp}>Reset Password</button>
        </div>

        <div>
          <p className={styles["forgot-password"]}>
            <Link to="/Form">Don't have an account?</Link>{" "}
          </p>

          <p className={styles["forgot-sign"]}>
            <Link to="/sign-in">
              <button className={styles.signIn}>Back to Sign-In</button>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
