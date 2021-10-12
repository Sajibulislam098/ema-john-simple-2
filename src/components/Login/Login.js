import React from 'react';
import { Link ,useLocation,useHistory} from 'react-router-dom';
import "./Login.css"
 
import useAuth from './../../hooks/useAuth';
const Login = () => {
 
    const {signInUsingGoogle}=useAuth();
    const location =useLocation();
    const history = useHistory();
    const redirect_uri=location.state?.from || "/shop"
    console.log(location.state?.from);
    const handleGoogleLogin=()=>{
        
        signInUsingGoogle()
        .then(result=>{
            history.push(redirect_uri);
        })
        ;};
    return (
        <div className="login-form">
          <div>
                <h2>Login</h2>
                <form action="">

                    <input type="email" placeholder="Your Email" />
                    <br />
                    <input type="password" />
                    <br />
                    <input type="submit" value="Submit" name="" id="" />
                </form>
                <p>new to ema-john website?  <Link to="/register">Create Account</Link></p>
                <div>----------------or-----------------</div>
                <button
                onClick={handleGoogleLogin}
                className="btn-regular"
                >Google Sign in</button>
            </div>
        </div>
    );
};

export default Login;