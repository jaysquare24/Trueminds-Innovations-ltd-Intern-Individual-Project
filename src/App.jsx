import { useState } from 'react'
import { Layout } from './components/layout/Layout';
import { GeneralLandingPage } from './components/pages/GeneralLandingPage';
import { LoginLandingPage } from './components/pages/LoginLandingPage';
import { CreateAccountLandingPage } from './components/pages/CreateAccountLandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './style/global.css';

function App() {

  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Layout />}> 
         <Route index element={<GeneralLandingPage />} />
         <Route path="/login" element={<LoginLandingPage />} />
          <Route path="/signup" element={<CreateAccountLandingPage />} />

        </Route> 
      </Routes> 
    </BrowserRouter>
    
  )
}

export default App
