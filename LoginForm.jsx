import "./LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";

export const LoginForm = () => {
  return (
    <div className="Wrapper">
      <form action="">
        <h1>Login Form</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <FaLock className="icon" />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href=""> Forgot Password?</a>
        </div>
        <button type="submit">Submit</button>

        <div className="register">
          <p>
            Don't have a account? <a href="">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
