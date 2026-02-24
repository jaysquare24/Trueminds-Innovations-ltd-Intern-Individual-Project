import { Footer } from "../common/Footer" ;

import { Outlet, useLocation} from "react-router-dom"  ;

import {Header} from "../common/Header" ;
import { ScrollToTop } from "../common/ScrollToTop";




export const Layout = () =>{
    const location = useLocation() ;
   const hideHeader = ["/", "/login", "/signup"].includes(location.pathname);

    return(
        <div>
            <ScrollToTop />
         { !hideHeader && <Header /> }
          <main><Outlet/></main>
          <Footer />
        </div>
    )
}