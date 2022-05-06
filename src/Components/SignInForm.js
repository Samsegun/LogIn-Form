import { Link } from "react-router-dom";
import styles from "../App.module.css";

const SignInForm = () => {
  const submitHandler = e => {
    e.preventDefault();
  };

  return (
    <div className={styles["form-wrapper"]}>
      <form className={styles["mobile-form"]} onSubmit={submitHandler}>
        <div className={styles["form-control"]}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter Email" />
        </div>

        <div className={styles["form-control"]}>
          <label htmlFor="Password">Password</label>
          <input type="password" id="Password" placeholder="Enter Password" />
        </div>

        <div>
          <button className={styles.signUp}>Log In</button>
        </div>

        <div>
          <p className={styles["signIn-text"]}>
            Don't have an account?{" "}
            <Link to="/">
              <button className={styles.signIn}>Sign Up</button>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
