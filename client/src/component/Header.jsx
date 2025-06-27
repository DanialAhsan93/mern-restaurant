import React, { useState } from 'react'
import Navbar from './Navbar';
import {Link} from 'react-router-dom';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full">

        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      
        {/* <div className="h-[110px]" />  remove this below*/}

        <div className="h-[110px]" /> 

        <div
          className={`overflow-hidden transition-all duration-[1000ms] ease-in-out ${menuOpen ? "max-h-60 py-4" : "max-h-0 py-0"
            }`}
        >
          <div className="w-[85%] mx-auto flex flex-col gap-4">
            <Link to={"/"} className="hover:underline" onClick={() => setMenuOpen(!menuOpen)}>
              Home
            </Link>
            <Link to={"/about"} className="hover:underline" onClick={() => setMenuOpen(!menuOpen)}>
              About
            </Link>
            <Link to={"/signin"} className="hover:underline" onClick={() => setMenuOpen(!menuOpen)}>
              Sign In
            </Link>
          </div>
        </div>

        
      </div>
  )
}

export default Header