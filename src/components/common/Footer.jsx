import { Link } from "react-router-dom";
import footerlogo from "../../assets/Chuks-Kitchen-Footer-Logo.svg";
import upArrowIcon from "../../assets/Up-arrow.svg";


export const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNonFunctionalLinkClick = (e) => {
    e.preventDefault();
    alert("This link is not functional in the current version.");
  };

  return (
    <footer>
      <div className="footer-content">
        <div className="item-1-container item">
          <img src={footerlogo} alt="Chuks Kitchen Logo" className="footer-logo logo"/>
          <p className="footer-description">Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.</p>
        </div>

        <nav className="footer nav-links item" >
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/explore/popular">Explore</Link>
          <Link to="/orders">My Orders</Link>
          <Link to="/signup">Account</Link>
          <Link to="/login">Sign In</Link>  
        </nav>
        <div className="contact-info item" >
            <h3>Contact Us</h3>
            <p>+234 801 234 5678</p>
            <p>hello@chukskitchen.com</p>
            <p>123 Taste Blvd, Lagos, Nigeria</p>
        </div>
        <div className="social-media item" >
            <h3>Follow Us</h3>
            <a onClick={handleNonFunctionalLinkClick}>Facebook</a>
            <a onClick={handleNonFunctionalLinkClick}>Twitter</a>
            <a onClick={handleNonFunctionalLinkClick}>LinkedIn</a>
            <a onClick={handleNonFunctionalLinkClick}>Instagram</a>
            
        </div>
        
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">© 2020 Lift Media. All rights reserved.</p>
        <img src={upArrowIcon} alt="scroll-up icon" className="scroll-up-icon" onClick={scrollToTop}/>
      </div>
    </footer>
  )
}