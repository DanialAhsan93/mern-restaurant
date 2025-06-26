import React from 'react';
import { assetsData } from '../data/assetsdata';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


function Footer() {
  return (
    <footer className='bg-[#FFF0DB] pt-12 pb-20'>
      <div className='w-[85%] mx-auto  flex flex-wrap md:justify-center md:space-y-0 space-y-7'>
        <div className='left md:w-[25%] w-full '>
          <div className='lg:w-[201px] lg:h-[76px] md:w-[140px] md:h-[76px]'>
            <img src={assetsData.Logo} alt="" />
          </div>
        </div>
        <div className='center md:w-[25%] w-full '>
          <ul className='space-y-1'>
            <li className='text-[18px] font-semibold text-[#565656] mb-3'>
              Main Link
            </li>
            <li className='text-[14px]'>
              Order Tracking
            </li>
            <li className='text-[14px]'>
              New Order
            </li>
            <li className='text-[14px]'>
              Contact Us
            </li>
            <li className='text-[14px]'>
              News & blogs
            </li>
          </ul>
        </div>
        <div className='center md:w-[25%] w-full '>
          <ul className='space-y-1'>
            <li className='text-[18px] font-semibold text-[#565656] mb-3'>
              Support
            </li>
            <li className='text-[14px]'>
              About Us
            </li>
            <li className='text-[14px]'>
              Privacy Policy
            </li>
            <li className='text-[14px]'>
              Terms & Conditions
            </li>
          </ul>
        </div>
        <div className='center md:w-[25%] w-full '>
          <ul className='space-y-1'>
            <li className='text-[18px] font-semibold text-[#565656] mb-3'>
              Join Our Newsletter
            </li>
            <li className='text-[14px]'>
              <input type="text" className='' placeholder='Enter Your Email Address' />
            </li>
            <li className='text-[18px] font-semibold text-[#565656] mb-3'>
              Follow Us
            </li>
            <div className='flex space-x-2'>
              <li className='w-[24px] h-[21px]'>
                <FaFacebookF />
              </li>
              <li className='w-[24px] h-[24px]'>
                <FaTwitter />
              </li>
              <li className='w-[23px] h-[23px]'>
                <FaInstagram />
              </li>
              <li className='w-[24px] h-[24px]'>
                <FaYoutube />
              </li>
            </div>

          </ul>
        </div>

      </div>

    </footer>
  )
}

export default Footer