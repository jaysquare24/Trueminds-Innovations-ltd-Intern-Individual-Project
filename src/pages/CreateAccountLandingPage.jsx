import landingPageImage from "../assets/gen-aside-image.png";
import logo from "../assets/Chuks-Kitchen-header-logo.svg";
import facebookIcon from "../assets/facebook-icon.svg";
import googleIcon from "../assets/google-icon.svg";
import mailIcon from "../assets/mail-icon.svg";
import lockIcon from "../assets/lock-icon.svg";
import eyeClosedIcon from "../assets/eye-closed-icon.svg";
import eyeOpenIcon from "../assets/icons8-eye-20.png";
import phoneIcon from "../assets/phone-icon.svg";    
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";



export const CreateAccountLandingPage = () => {
    const [showPassword, setShowPassword] = useState(false) ;
    const [showConfirmPassword, setShowConfirmPassword] = useState(false) ;

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState) ;
    }

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(prevState => !prevState) ;
    }

    const handleNonFunctionalLinkClick = (e) => {
        e.preventDefault();
        alert("This link is not functional in the current version.");
    };

    
    return(
        <section className="create-account landing-page">
            <div className="create-account aside-landing-page-image-container">
                <div className="create-account aside-overlay"></div>
                <img src={landingPageImage} alt="create account landing page image" className="create-account aside-landing-page-image"/>
                <div className="create-account aside-text">
                    <motion.h1
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}>
                        Chuks Kitchen
                    </motion.h1>
                    <motion.p 
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    transition={{ duration: 1, delay: 0.5 }}>
                        Your journey to delicious, authentic Nigerian meals starts here. Sign up or log in to order your favorites today!
                    </motion.p>
                </div>
            </div>
            <div className="create-account landing-page-content">
                <div className="create-account landing-page-header">
                    <img src={logo} alt="Chuks Kitchen Logo" className="create-account landing-page-logo logo"/>
                </div>
                <h2 className="create-account page-title">Create your Account</h2>
                <form className="create-account-form user-form">
                    <img src={mailIcon} alt="email icon" className=" mail input-icon"/>
                    <img src={phoneIcon} alt="phone icon" className=" phone input-icon"/>
                    <img src={lockIcon} alt="password icon" className=" lock input-icon"/>
                    <img src={lockIcon} alt="confirm password icon" className=" confirm-password-lock input-icon"/>
                    <button type="button" className=" password-toggle" onClick={togglePasswordVisibility}>
                        <img src={showPassword ? eyeOpenIcon : eyeClosedIcon} alt={showPassword ? "hide password icon" : "show password icon"} />
                    </button>
                    <button type="button" className="confirm-password-toggle" onClick={toggleConfirmPasswordVisibility}>
                        <img src={showConfirmPassword ? eyeOpenIcon : eyeClosedIcon} alt={showConfirmPassword ? "hide confirm password icon" : "show confirm password icon"} />
                    </button>
                    

                    <label htmlFor="email">Email or Phone Number</label>
                    <input type={"email"} id="email" name="email" placeholder="Enter your email" required />
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />   
                    <label htmlFor="password">Password</label>
                    <input type={showPassword ? "text" : "password"} id="password" name="password" placeholder="Enter your password" required />
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type={showConfirmPassword ? "text" : "password"} id="confirm-password" name="confirm-password" placeholder="Confirm your password" required />
                    
                    <div className="agreement"> 
                        <input type="checkbox" id="terms" name="terms" required />
                        <p> 
                            I agree to the  
                            <a href="#" onClick={handleNonFunctionalLinkClick}>Terms & Conditions</a> 
                            and 
                            <a  href="#" onClick={handleNonFunctionalLinkClick}>Privacy Policy</a>
                        </p>
                    </div>
                    <Link to="/home" className="continue-button">Continue</Link>
                </form>
                <p className="option-title">or continue with</p>
                <div className="social-login-links">  
                    <a href="#" className="social-login-link google" onClick={handleNonFunctionalLinkClick}><img src={googleIcon} alt="Google Icon"/> Continue with Google</a>
                    <a href="#" className="social-login-link facebook" onClick={handleNonFunctionalLinkClick}><img src={facebookIcon} alt="Facebook Icon"/> Continue with Facebook</a>
                </div>
                <p className="signup-link">Already have an account? <a href="/login">Sign in</a></p>

            </div>

        </section>
    )  
}