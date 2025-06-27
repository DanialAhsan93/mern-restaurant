import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Dashboard from './pages/Dashboard';
import Header from './component/Header';
import Footer from './component/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);

  console.log(theme)
  return (
    <>
      <div className={`${theme === 'light' ? 'bg-white text-gray-700' :
        'dark:text-gray-200 dark:bg-[rgb(16,23,42)]'}`}>
        <HashRouter>
          <Header />
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/dashboard' element={<Dashboard />} />

          </Routes>
          <Footer />
        </HashRouter>
      </div >

    </>


  )
}

export default App
