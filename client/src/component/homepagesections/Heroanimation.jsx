import React, { useEffect, useState } from 'react'
import { assetsData } from '../../data/assetsdata';

function Heroanimation() {
  const images = [
    assetsData.Heroimage,
    assetsData.Heroimage,
  ];

  const [activeImage, setActiveImage] = useState(0); // 0 or 1
  const [animationState, setAnimationState] = useState('enter'); // 'enter' | 'exit'

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationState('exit');

      setTimeout(() => {
        setActiveImage((prev) => (prev + 1) % images.length);
        setAnimationState('enter');
      }, 1000); // wait for exit animation to finish
    }, 4000); // full cycle every 4s

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="md:relative md:w-[50%]  flex items-center">
      <div className="md:relative md:w-full md:h-[500px] w-[300px] h-[300px] overflow-hidden">
        {images.map((img, index) => {
          const isActive = activeImage === index;
          let animationClass = 'hidden';

          if (isActive && animationState === 'enter') {
            animationClass = index === 0 ? 'animate-slideInLeft' : 'animate-slideInBottom';
          }

          if (isActive && animationState === 'exit') {
            animationClass = index === 0 ? 'animate-slideOutLeft' : 'animate-slideOutBottom';
          }

          return (
            <img
              key={index}
              src={img}
              alt={`image-${index}`}
              className={`md:absolute md:top-0 md:left-0 md:w-full md:h-full object-contain ${animationClass}`}
            />
          );
        })}
      </div>
    </div>
  )
}

export default Heroanimation