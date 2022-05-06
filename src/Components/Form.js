import { useState, useRef, useReducer } from "react";
import { Link } from "react-router-dom";
import styles from "../App.module.css";

// reducer
const warningMessage = {
  nameInputWarning: false,
  emailInputWarning: false,
  passwordInputWarning: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, nameInputWarning: action.value };
    case "email":
      return { ...state, emailInputWarning: action.value };
    case "password":
      return { ...state, passwordInputWarning: action.value };
    default:
      return;
  }
};

// regex to validate email
const validEmailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const Form = () => {
  const [curState, dispatchFn] = useReducer(reducer, warningMessage);
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  // refs
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = e => {
    e.preventDefault();

    // if(curState.nameInputWarning && curState.emailInputWarning && curState.passwordInputWarning) {

    // }
  };

  // name change handler
  const nameInputHandler = () => {
    const userNameInput = nameInputRef.current.value;

    if (userNameInput.length <= 2) {
      dispatchFn({ type: "name", value: true });
    } else {
      dispatchFn({ type: "name", value: false });
    }

    setEnteredName(userNameInput);
  };

  // email change handler
  const emailInputHandler = () => {
    const userEmailInput = emailInputRef.current.value;

    if (validEmailRegex.test(userEmailInput)) {
      dispatchFn({ type: "email", value: false });
    } else {
      dispatchFn({ type: "email", value: true });
    }

    setEnteredEmail(userEmailInput);
  };

  // password change handler
  const passwordChangeHandler = () => {
    const userPasswordInput = passwordInputRef.current.value;

    if (userPasswordInput.length <= 4) {
      dispatchFn({ type: "password", value: true });
    } else {
      dispatchFn({ type: "password", value: false });
    }

    setEnteredPassword(userPasswordInput);
  };

  return (
    <div className={styles["form-wrapper"]}>
      <form onSubmit={submitHandler}>
        <h2 className={styles["form-title"]}>CinnaBuns ...can't get enough</h2>
        {/* name input field */}
        <div className={styles["form-control"]}>
          <label htmlFor="name">Name</label>

          {/* display warning message if user input is less than 3 characters */}
          <p className={curState.nameInputWarning ? styles.show : styles.hide}>
            <span>*Name must be at least 3 characters long</span>{" "}
          </p>

          <input
            type="text"
            id="name"
            placeholder="Enter Name"
            className={curState.nameInputWarning ? styles["warning-bg"] : ""}
            ref={nameInputRef}
            onChange={nameInputHandler}
            value={enteredName}
          />
        </div>

        {/* email input field */}
        <div className={styles["form-control"]}>
          <label htmlFor="email">Email</label>

          {/* display warning message if user input is less than 3 characters */}
          <p className={curState.emailInputWarning ? styles.show : styles.hide}>
            <span>*Please enter a valid email! </span>{" "}
          </p>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            className={curState.emailInputWarning ? styles["warning-bg"] : ""}
            ref={emailInputRef}
            onChange={emailInputHandler}
            value={enteredEmail}
          />
        </div>

        {/* password field */}
        <div className={styles["form-control"]}>
          <label htmlFor="Password">Password</label>

          {/* display warning message if user input is less than 5 characters */}
          <p
            className={
              curState.passwordInputWarning ? styles.show : styles.hide
            }
          >
            <span>*Password must contain at least 5 characters! </span>{" "}
          </p>
          <input
            type="password"
            id="Password"
            placeholder="Enter Password"
            className={
              curState.passwordInputWarning ? styles["warning-bg"] : ""
            }
            onChange={passwordChangeHandler}
            ref={passwordInputRef}
            value={enteredPassword}
          />
        </div>

        {/* create account button */}
        <div>
          <button className={styles.signUp} disabled={true}>
            Create Account
          </button>
        </div>

        <div>
          <p className={styles["signIn-text"]}>
            Already have an account?{" "}
            <Link to="/sign-in">
              {" "}
              <button className={styles.signIn}>Sign In</button>{" "}
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Form;
