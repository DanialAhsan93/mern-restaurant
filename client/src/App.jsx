import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Dashboard from './pages/Dashboard';
import Header from './component/Header';
import Footer from './component/Footer';
import { useSelector } from 'react-redux';
import OnlyAdminPrivateRoute from './component/OnlyAdminPrivateRoute';

function App() {

  const { theme } = useSelector((state) => state.theme);

  console.log(theme)
  return (
    <>
      <div className={`${theme === 'light' ? 'bg-white text-gray-700' :
        'dark:text-gray-200 dark:bg-[rgb(16,23,42)]'}`}>
        <BrowserRouter>
          <Header />
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route element={<OnlyAdminPrivateRoute />} >
              <Route path='/dashboard' element={<Dashboard />} />

            </Route>

          </Routes>
          <Footer />
        </BrowserRouter>
      </div >

    </>


  )
}

export default App
