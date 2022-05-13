import styles from "../App.module.css";
import { Link } from "react-router-dom";
import { useRef } from "react";

const ForgotPassword = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = e => {
    e.preventDefault();

    console.log("gorgot");

    // try {
    //   setSignUpButton(true);

    //   await logIn(inputState.enteredEmail, inputState.enteredPassword);

    //   // if log in is successful, enable button
    //   setSignUpButton(false);

    //   // clear all input fields after successful sign up
    //   dispatchInputFn({ type: "userEmail", value: "" });
    //   dispatchInputFn({ type: "userPassword", value: "" });

    //   history("/");
    // } catch (error) {
    //   setSignUpButton(false);
    //   alert("failed to log in" + error.message);
    // }
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

        {/* password input field */}
        <div className={styles["form-control"]}>
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            id="Password"
            placeholder="Enter Password"
            ref={passwordInputRef}
            // onChange={passwordInputHandler}
            // value={inputState.enteredPassword}
          />
        </div>

        <div>
          <p className={styles["forgot-password"]}> Don't have an account? </p>
          <Link to="/sign-in">
            <button className={styles.signIn}>Back to Sign-In</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
