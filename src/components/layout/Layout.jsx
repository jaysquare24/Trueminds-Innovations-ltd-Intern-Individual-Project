import { Footer } from "../common/Footer" ;

import { Outlet, useLocation} from "react-router-dom"  ;

import {Header} from "../common/Header" ;




export const Layout = () =>{
    const location = useLocation() ;
    const hideHeader = location.pathname === "/" || location.pathname === "/login" || location.pathname === "/signup" ;

    return(
        <div>
         { !hideHeader && <Header /> }
          <main><Outlet/></main>
          <Footer />
        </div>
    )
}