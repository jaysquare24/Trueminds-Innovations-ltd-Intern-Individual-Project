import { useState } from 'react'
import { Layout } from './components/layout/Layout';
import { GeneralLandingPage } from './pages/GeneralLandingPage';
import { LoginLandingPage } from './pages/LoginLandingPage';
import { CreateAccountLandingPage } from './pages/CreateAccountLandingPage';
import { HomePage } from './pages/home/HomePage';  
import { ExplorePage } from './pages/ExplorePage';
import { OrderPage } from './pages/order/OrderPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/global.css';

function App() {

  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Layout />}> 
         <Route index element={<GeneralLandingPage />} />
         <Route path="/login" element={<LoginLandingPage />} />
          <Route path="/signup" element={<CreateAccountLandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path= "/explore/:category" element={<ExplorePage/> }/>
          <Route path='/orders' element={<OrderPage/>}/>

        </Route> 
      </Routes> 
    </BrowserRouter>
    
  )
}

export default App
