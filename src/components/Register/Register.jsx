import './Register.css'
import { FaUser, FaLock } from "react-icons/fa";

const Register = () => {
    return (
        <div className="login-form">
                      
                <div className="wrapper">
                    <form action="">
                        <h1>Login with</h1>
                        <div className='social-login'>
                            <button className='social-button'>
                                <img src='google.svg' alt='Google' className='social-icon'/>
                                 Google
                            </button>
                            <button className='social-button'>
                                <img src="apple.svg" alt="Apple" className='social-icon' />
                                Apple
                            </button>
                        </div>
                        <p className="separator"><span>or</span></p>

                        <div className="input-box">
                          <input type="text" placeholder="Username" required  />
                            <FaUser className="icon"/>                         
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password" required />
                            <FaLock className="icon"/>
                        </div>

                        <div className="remember-forgot">
                            <label><input type="checkbox"/> Remember me </label>
                            <a href="#">Forgot Password?</a>
                        </div>

                        <button type="submit">Login</button>
                        <div className="register-link">
                            <p>Don't have an account? <a href="#">Register</a></p>
                        </div>
                    </form>  
                </div>
        </div>
    );
}

export default Register;