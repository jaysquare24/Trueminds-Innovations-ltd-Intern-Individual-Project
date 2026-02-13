import landingPageImage from "../../assets/gen-aside-image.png";
import deliveryIcon from "../../assets/delivery-icon.svg";
import utensilIcon from "../../assets/utensil-icon.svg";
import { Link } from "react-router-dom";
import logo from "../../assets/Chuks-Kitchen-header-logo.svg";

export const GeneralLandingPage = () => {
  return ( 
  <section className="general landing-page">
    <div className="general aside-landing-page-image-container">
      <img src={landingPageImage} alt="general landing page image" className="general aside-landing-page-image"/>
    </div>
    <div className="general landing-page-content">
      <div className="general landing-page-header">
        <img src={logo} alt="Chuks Kitchen Logo" className="general-landing-page-logo logo"/>
        <Link to="/login" className="gen-landing-page-signIn-button">Sign In</Link>
      </div>
      <h1>Your Authentic Taste of Nigeria</h1>
      <p className="gen-landing-page-description">Experience homemade flavors delivered fresh to your desk or home. We bring the rich culinary heritage of Nigeria right to your doorstep.</p>
      <div className="services-section">
        <div className="service-item">
          <img src={utensilIcon} alt="Utensil icon" className="service-icon"/>
          <p>Freshly Prepared</p>
        </div>
        <div className="service-item">
          <img src={utensilIcon} alt="utensil icon" className="service-icon"/>
          <p>Support Local Business</p>
        </div>
        <div className="service-item">
          <img src={deliveryIcon} alt="fast delivery icon" className="service-icon"/>
          <p>Fast & Reliable Delivery</p>
        </div>
      </div>
      <Link to="/home" className="gen-link">Start Your Order</Link>
      <Link to="/about" className="gen-link">Learn More About Us</Link> 
      <div className="general-landing-page-bottom">
        <p>© 2020 Lift Media. All rights reserved.</p>
        <a href="#" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Terms of Service</a>
        </div>
    </div>
  </section>
  ) 
}