import landingPageImage from "../../assets/gen-aside-image.png";
import logo from "../../assets/Chuks-Kitchen-header-logo.svg";
import facebookIcon from "../../assets/facebook-icon.svg";
import googleIcon from "../../assets/google-icon.svg";
import mailIcon from "../../assets/mail-icon.svg";
import lockIcon from "../../assets/lock-icon.svg";
import eyeClosedIcon from "../../assets/eye-closed-icon.svg";
import eyeOpenIcon from "../../assets/icons8-eye-20.png";
import { useState } from "react";



export const LoginLandingPage = () => {
    const [showPassword, setShowPassword] = useState(false) ;

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState) ;
    }
    
    return(
        <section className="login landing-page">
            <div className="login aside-landing-page-image-container">
                <div className="login aside-overlay"></div>
                <img src={landingPageImage} alt="login landing page image" className="login aside-landing-page-image"/>
                <div className="login aside-text">
                    <h1>Chuks Kitchen</h1>
                    <p>Your journey to delicious, authentic Nigerian meals starts here. Sign up or log in to order your favorites today!</p>
                </div>
            </div>
            <div className="login landing-page-content">
                <div className="login landing-page-header">
                    <img src={logo} alt="Chuks Kitchen Logo" className="login landing-page-logo logo"/>
                </div>
                <h2 className="login page-title">Login your Account</h2>
                <form className="login-form user-form">
                    <img src={mailIcon} alt="email icon" className="mail input-icon"/>
                    <img src={lockIcon} alt="password icon" className="lock input-icon"/>
                    <button type="button" className=" password-toggle" onClick={togglePasswordVisibility}>
                        <img src={showPassword ? eyeOpenIcon : eyeClosedIcon} alt={showPassword ? "hide password icon" : "show password icon"} />
                    </button>
                    

                    <label htmlFor="email">Email or Phone Number</label>
                    <input type={"email"} id="email" name="email" placeholder="Enter your email" required />
                    <label htmlFor="password">Password</label>
                    <input type={showPassword ? "text" : "password"} id="password" name="password" placeholder="Enter your password" required />
                    <a href="#" className="forgot-password-link">Forgot Password?</a>
                    <button type="submit" className="continue-button">Continue</button>
                </form>
                <p className="option-title">or continue with</p> 
                <div className="social-login-links">
                    <a href="#" className="social-login-link google"><img src={googleIcon} alt="Google Icon"/> Continue with Google</a>
                    <a href="#" className="social-login-link facebook"><img src={facebookIcon} alt="Facebook Icon"/> Continue with Facebook</a>
                </div>
                <p className="signup-link">Don't have an account? <a href="/signup">Create an account</a></p>

            </div>

        </section>
    )  
}