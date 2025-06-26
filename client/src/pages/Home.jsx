import React from 'react';
import { assetsData } from '../data/assetsdata';
import Sectionsecond from '../component/homepagesections/Sectionsecond';

function Home() {
  return (
    <div>
      <div className="w-[85%] mx-auto mt-6 transition-all duration-[3000ms] ease-in-out">

        <section id="home" className="mt-8">
          <div className='flex flex-wrap justify-center items-center'>
            <div className='left md:w-[50%]'>
              <img src={assetsData.Heroimage} alt="hero-image" />
            </div>
            <div className='right md:w-[50%]'>
              <span className='bg-[#149F39] text-white text-[14px] font-normal'>
                50% OFF All Products
              </span>
              <div>
                <span className='lg:text-[72px] md:text-[48px] sm:text-[72px] text-[40px]'>
                  Enjoy Your Delicious Food
                </span>
              </div>

              <p>
                Quisque velit nisi, pretium ut lacinia in, elementum id enim. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
              </p>

              <button className='w-[174px] h-[57px] bg-[#FFC066] flex justify-center items-center mt-8'>
                <span className='text-[24px]  text-white'>
                  Explore Now
                </span>
              </button>
            </div>

          </div>
          <div className='flex flex-wrap justify-center items-center md:space-x-3 mt-20 mb-14 md:space-y-0 space-y-5'>

            <div className='left lg:w-[24%] md:w-[30%] sm:w-[60%] '>
              <div className='flex items-center'>
                <div className='lg:w-[80px] lg:h-[83px] md:w-[68px] w-[80px] h-[83px] md:h-[71px] flex'>
                  <img src={assetsData.summersales} alt="hero-image" />
                </div>
                <div className='w-[65%]  ps-3'>
                  <span className='font-semibold text-[18px]'>Discount Voucher</span>
                  <p className='text-[14px] font-light'>Quisque velit nisi, pretium ut lacinia in df fasf </p>
                </div>

              </div>

            </div>

            <div className='left lg:w-[24%] md:w-[30%] sm:w-[60%] '>
              <div className='flex items-center'>
                <div className='lg:w-[80px] lg:h-[83px] md:w-[68px] md:h-[71px] w-[80px] h-[83px] flex'>
                  <img src={assetsData.fruits} alt="hero-image" />
                </div>
                <div className='w-[65%]  ps-3'>
                  <span className='font-semibold text-[18px]'>Fresh Healthy Food</span>
                  <p className='text-[14px] font-light'>Quisque velit nisi, pretium ut lacinia in df fasf </p>
                </div>

              </div>

            </div>

            <div className='left lg:w-[24%] md:w-[30%] sm:w-[60%] '>
              <div className='flex items-center'>
                <div className='lg:w-[80px] lg:h-[83px] md:w-[68px] md:h-[71px] w-[80px] h-[83px] flex'>
                  <img src={assetsData.delivery} alt="hero-image" />
                </div>
                <div className='w-[65%]  ps-3'>
                  <span className='font-semibold text-[18px]'>Fast Home Delivery</span>
                  <p className='text-[14px] font-light'>Quisque velit nisi, pretium ut lacinia in df fasf </p>
                </div>

              </div>

            </div>
            
          </div>
        </section>

        <Sectionsecond />
      </div>
    </div>
  )
}

export default Home;