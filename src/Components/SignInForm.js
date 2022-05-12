import { useReducer, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../App.module.css";
import { useAuth } from "../Context/AuthContext";

const userInput = {
  enteredEmail: "",
  enteredPassword: "",
};
const userInputReducer = (state, action) => {
  switch (action.type) {
    case "userEmail":
      return { ...state, enteredEmail: action.value };
    case "userPassword":
      return { ...state, enteredPassword: action.value };
    default:
      return;
  }
};

const SignInForm = () => {
  const [inputState, dispatchInputFn] = useReducer(userInputReducer, userInput);
  const [signUpButton, setSignUpButton] = useState(true);
  const history = useNavigate();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  // firebase
  const { logIn, currentUser } = useAuth();

  const submitHandler = async e => {
    e.preventDefault();

    try {
      setSignUpButton(true);

      await logIn(inputState.enteredEmail, inputState.enteredPassword);

      // if log in is successful, enable button
      setSignUpButton(false);

      // clear all input fields after successful sign up
      dispatchInputFn({ type: "userEmail", value: "" });
      dispatchInputFn({ type: "userPassword", value: "" });

      history("/");
    } catch (error) {
      setSignUpButton(false);
      alert("failed to log in" + error.message);
    }
  };

  const emailInputHandler = () => {
    const userEmailInput = emailInputRef.current.value;

    if (
      emailInputRef.current.value.length &&
      passwordInputRef.current.value.length
    ) {
      setSignUpButton(false);
    } else {
      setSignUpButton(true);
    }

    dispatchInputFn({ type: "userEmail", value: userEmailInput });
  };

  const passwordInputHandler = () => {
    const userPasswordInput = passwordInputRef.current.value;

    if (
      emailInputRef.current.value.length &&
      passwordInputRef.current.value.length
    ) {
      setSignUpButton(false);
    } else {
      setSignUpButton(true);
    }

    dispatchInputFn({ type: "userPassword", value: userPasswordInput });
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
            onChange={emailInputHandler}
            value={inputState.enteredEmail}
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
            onChange={passwordInputHandler}
            value={inputState.enteredPassword}
          />
        </div>

        <div>
          <button className={styles.signUp} disabled={signUpButton}>
            Log In
          </button>
        </div>

        <div>
          <p className={styles["signIn-text"]}>
            Don't have an account?{" "}
            <Link to="/Form">
              <button className={styles.signIn}>Sign Up</button>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
