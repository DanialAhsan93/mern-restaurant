import React, { useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { assetsData } from '../data/assetsdata';
import { Button } from 'flowbite-react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';

function Navbar({ menuOpen, setMenuOpen }) {

  const {theme} = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <>
      {/* if you donot want a fix navbar */}

      {/* <nav className="w-full bg-white"> </nav> and the go to Header.jsx and follow instructions */}

      <nav className="w-full fixed top-0 left-0 z-50 bg-white">
        <div className="w-[85%] mx-auto flex justify-between items-center py-4">
          <div className='w-[201px] h-[76px] flex'>
            <img src={assetsData.Logo} alt="logo" className='' />
          </div>

          <div className='flex space-x-3'>
            <Button className="bg-white" onClick={() => dispatch(toggleTheme())}>
              <FaMoon className='sm:w-5 sm:h-3 w-2 h-2' />
            </Button>

            <button
              className="text-xl focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {
                menuOpen ? <IoMdClose className='text-black w-[32px] h-[32px]' /> : <TiThMenu className='text-black w-[32px] h-[32px]' />
              }

            </button>
          </div>

        </div>
      </nav>
    </>


  )
}

export default Navbar