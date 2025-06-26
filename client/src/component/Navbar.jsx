import React, { useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { assetsData } from '../data/assetsdata';

function Navbar({ menuOpen, setMenuOpen }) {

  return (
    <>
      {/* if you donot want a fix navbar */}

      {/* <nav className="w-full bg-white"> </nav> and the go to Header.jsx and follow instructions */}

      <nav className="w-full fixed top-0 left-0 z-50 bg-white">
        <div className="w-[85%] mx-auto flex justify-between items-center py-4">
          <div className='w-[201px] h-[76px] flex'>
            <img src={assetsData.Logo} alt="logo" className='' />
          </div>
          <button
            className="text-xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {
              menuOpen ? <IoMdClose className='w-[32px] h-[32px]' /> : <TiThMenu className='w-[32px] h-[32px]' />
            }

          </button>
        </div>
      </nav>
    </>


  )
}

export default Navbar