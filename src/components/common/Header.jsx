import { Link, NavLink, useParams } from "react-router-dom"
import headerlogo from "../../assets/Chuks-Kitchen-header-Logo.svg";

export const Header = () => {
  const {category} = useParams();

  return (    
    <header>
      <img src={headerlogo} alt="Chuks Kitchen Logo" className="logo"/>
      <nav className="nav-links">
        <NavLink to="/home" className={({isActive})=> isActive? "active-link" : ""} >Home</NavLink>
        <NavLink to="/explore/popular" className={category? "active-link" : ""} >Explore</NavLink>
        <NavLink to="/orders" className={({isActive})=> isActive? "active-link" : ""}>My order</NavLink>
        <NavLink to="/account" className={({isActive})=> isActive? "active-link" : ""}>Account</NavLink>
        <Link className="log-in">Login</Link>
      </nav>
    </header>
  ) 
}    