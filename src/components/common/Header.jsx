import { Link } from "react-router-dom"
import headerlogo from "../../assets/Chuks-Kitchen-header-Logo.svg";

export const Header = ({home, explore, myOrders, account, signIn, logIn }) => {

  return (    
    <header>
       <img src={headerlogo} alt="Chuks Kitchen Logo" className="logo"/>
       <nav className="nav-links">
          {home && <Link to="/">{home}</Link>}
          {explore && <Link to="/menu">{explore}</Link>}
          {myOrders && <Link to="/orders">{myOrders}</Link>}
          {account && <Link to="/account">{account}</Link>}
          {signIn && <Link className="sign-in">{signIn}</Link>}
          {logIn && <Link className="log-in">{logIn}</Link>}
       </nav>
    </header>
  ) 
}    