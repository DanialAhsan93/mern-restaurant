import React, { useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";


function Navbar({ menuOpen, setMenuOpen }) {

  return (
    <nav className="w-full bg-blue-600 text-white fixed top-0 left-0 z-50">
      <div className="w-[85%] mx-auto flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">MySite</h1>
        <button
          className="text-xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {
            menuOpen ? <IoMdClose /> : <TiThMenu />
          }

        </button>
      </div>
    </nav>
  )
}

export default Navbar