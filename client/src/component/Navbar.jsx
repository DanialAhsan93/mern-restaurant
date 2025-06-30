import React, { useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import { assetsData } from '../data/assetsdata';
import { Avatar, Button, Dropdown, DropdownHeader, DropdownItem, DropdownDivider } from 'flowbite-react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';
import { Link } from 'react-router-dom';
import NavUser from './NavUser';


function Navbar({ menuOpen, setMenuOpen }) {

  const { theme } = useSelector((state) => state.theme);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <>
      {/* if you donot want a fix navbar */}

      {/* <nav className="w-full bg-white"> </nav> and the go to Header.jsx and follow instructions */}

      <nav className={`w-full fixed top-0 left-0 z-50 bg-white`}>
        <div className="w-[85%] mx-auto flex justify-between items-center py-4">
          <div className='sm:w-[201px] sm:h-[76px] w-[150px] h-[70px] flex'>
            <img src={assetsData.Logo} alt="logo" className='' />
          </div>

          <div className='flex sm:space-x-3 space-x-1'>
            <Button color={'transparent'} className="bg-white" onClick={() => dispatch(toggleTheme())}>
              {
                theme === 'light' ?
                  <FaMoon className='sm:w-5 sm:h-3 w-2 h-2' /> :
                  <FaSun className='sm:w-5 sm:h-3 w-2 h-2 dark:text-gray-700' />
              }

            </Button>
            {
              currentUser ?
                <NavUser />
                :
                <>
                  <img src=" https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" className='w-[30px] h-[30px] rounded-full' />

                </>
            }


            <button
              className="text-xl focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {
                menuOpen ? <IoMdClose className='text-black sm:w-[32px] sm:h-[32px] w-[20px] h-[20px]' /> : <TiThMenu className='text-black sm:w-[32px] sm:h-[32px] w-[20px] h-[20px]' />
              }

            </button>
          </div>

        </div>
      </nav>
    </>


  )
}

export default Navbar