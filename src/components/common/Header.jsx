import { Link, NavLink, useParams } from "react-router-dom"
import headerlogo from "../../assets/Chuks-Kitchen-header-Logo.svg";
import menuIcon from "../../assets/Menu.svg";
import cancelIcon from "../../assets/icons8-cancel.svg";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const Header = () => {
  const {category} = useParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useContext(CartContext);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (    
    <header>
      <img src={headerlogo} alt="Chuks Kitchen Logo" className="logo"/>
      <nav className={`nav-links ${isMenuOpen ? "open" : ""}`} onClick={closeMenu}>
        <NavLink to="/home" className={({isActive})=> isActive? "active-link" : ""} >Home</NavLink>
        <NavLink to="/explore/popular" className={category? "active-link" : ""} >Explore</NavLink>
        <NavLink to="/orders" className={({isActive})=> isActive? "active-link" : ""} >
          My order
          {items.length > 0 && <span className="order-count">{items.length}</span>}
        </NavLink>
        <NavLink to="/signup" className={({isActive})=> isActive? "active-link" : ""}>Account</NavLink>
        <Link to="/login" className="log-in" >Login</Link>
      </nav>
      <button className="menu-icon-button" onClick={toggleMenu}>
       <img src={isMenuOpen ? cancelIcon : menuIcon} alt="menu icon" className="menu-icon"/>
      </button>

    </header>
  ) 
}    