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

const Form = () => {
  const [curState, dispatchFn] = useReducer(reducer, warningMessage);
  const [enteredName, setEnteredName] = useState("");
  const nameInputRef = useRef();

  const submitHandler = e => {
    e.preventDefault();

    console.log(enteredName);

    setEnteredName("");
  };

  // name change handler
  const nameInputHandler = () => {
    const enteredValue = nameInputRef.current.value;

    if (enteredValue.length <= 2) {
      dispatchFn({ type: "name", value: true });
    } else {
      dispatchFn({ type: "name", value: false });
    }

    setEnteredName(enteredValue);
  };

  // email change handler
  const emailInputHandler = () => {
    console.log("email");

    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
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
          <p className={curState.nameInputWarning ? styles.show : styles.hide}>
            <span>*Name must be at least 3 characters long</span>{" "}
          </p>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            onChange={emailInputHandler}
          />
        </div>

        <div className={styles["form-control"]}>
          <label htmlFor="Password">Password</label>
          <input type="password" id="Password" placeholder="Enter Password" />
        </div>

        <div>
          <button className={styles.signUp}>Create Account</button>
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
