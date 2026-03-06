import React, { useState } from 'react';
import { bannerImg } from '../../assets/index';

export const RightBanner = () => {
  const [hovered, setHovered] = useState(false);

  const imgStyle = {
    transform: hovered
      ? 'perspective(1200px) rotateY(0deg) rotateX(0deg) translateZ(16px) scale(1.03)'
      : 'perspective(1200px) rotateY(0deg) rotateX(0deg) translateZ(6px)',
    transition: 'transform 1s cubic-bezier(.2,.9,.2,1), box-shadow .36s ease',
    boxShadow: hovered ? '0 32px 48px rgba(2,6,23,0.56)' : '0 12px 20px rgba(2,6,23,0.30)',
    transformStyle: 'preserve-3d',
    backfaceVisibility: 'hidden',
    willChange: 'transform'
  };

  return (
    <div className='flex items-center justify-center w-full lgl:w-1/2'>
      <div style={{ perspective: '1200px' }} className='flex items-center justify-center'>
        <div className='relative'>
          <img
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={imgStyle}
            className="w-[300px] sm:w-[380px] md:w-[420px] lgl:w-[500px] h-[440px] object-cover object-top rounded-3xl ring-4 ring-white"
            src={bannerImg}
            alt="bannerImg"
          />
        </div>
      </div>
    </div>
  )
}
