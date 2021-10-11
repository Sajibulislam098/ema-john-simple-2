import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="login-form">
      <div>
        <h2>Register:Create Account</h2>
        <form>
          <input type="email" name="" value="" placeholder="Tour Email" />
          <br />
          <input type="password" name="" value="" placeholder="Your Password" />
          <br />
          <input
            type="password"
            name=""
            value=""
            placeholder="Re-Enter Password"
          />
          <br />
          <input type="submit" name="" value="Submit" />
        </form>
        <p>
          Already have aN aCCOUNT? <Link to="/login">Login</Link>{" "}
        </p>
        <div>
            -----------------or---------------------
        </div>
        <button className="btn-regular" type=""> Google Sign IN</button>
      </div>
    </div>
  );
};

export default Register;
