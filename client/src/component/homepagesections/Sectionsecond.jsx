import React from 'react';
import { assetsData } from '../../data/assetsdata';

function Sectionsecond() {
  return (
    <section className='pb-14'>
      <div className='text-center mt-6 lg:pt-16 md:pt-13 sm:pt-10 pt-8'>
        <div>
          <span className='bg-[#149F39] text-white text-[24px] font-normal text-center p-2'>
            Our Menu
          </span>
        </div>

        <div className='mt-4'>
          <span className='sm:text-[36px] text-[30px]'>
            Explore our Menu
          </span>
        </div>
      </div>

      <div>
        <div class="grid grid-cols-12 grid-rows-12 md:gap-5 gap-2 p-4 mt-8">
          <div class="col-span-6 row-span-8 bg-blue-300 transition-transform duration-300 ease-in-out hover:scale-105">
            <img src={assetsData.gridimage1} alt="Image 1" class="w-full h-full object-cover"/>
          </div>

          <div class="col-start-7 col-span-3 row-span-8 bg-red-300 transition-transform duration-300 ease-in-out hover:scale-105">
            <img src={assetsData.gridimage2} alt="Image 2" class="w-full h-full object-cover"/>
          </div>

          <div class="col-start-10 col-span-3 row-span-4 bg-green-300 transition-transform duration-300 ease-in-out hover:scale-105">
            <img src={assetsData.gridimage3} alt="Image 3" class="w-full h-full object-cover"/>
          </div>

          <div class="col-span-3 row-span-4 row-start-9 bg-yellow-300 transition-transform duration-300 ease-in-out hover:scale-105">
            <img src={assetsData.gridimage4} alt="Image 4" class="w-full h-full object-cover"/>
          </div>

          <div class="col-span-3 row-span-4 row-start-9 bg-yellow-300 transition-transform duration-300 ease-in-out hover:scale-105">
            <img src={assetsData.gridimage5} alt="Image 4" class="w-full h-full object-cover"/>
          </div>

          <div class="col-span-3 row-span-4 row-start-9 bg-yellow-300 transition-transform duration-300 ease-in-out hover:scale-105">
            <img src={assetsData.gridimage6} alt="Image 4" class="w-full h-full object-cover"/>
          </div>

          <div class="col-span-3 row-span-8 row-start-5 bg-yellow-300 transition-transform duration-300 ease-in-out hover:scale-105">
            <img src={assetsData.gridimage7} alt="Image 4" class="w-full h-full object-cover"/>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Sectionsecond;