import React from 'react';
import logo from '../../assets/shared/logo.png';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-[12px]">
      <div className="img_container w-10 h-10 sm:w-12 sm:h-12 shrink-0">
        <img
          src={logo}
          alt="logo"
          className="w-full h-full object-contain"
        />
      </div>
      <span
        className="capitalize font-bold text-base sm:text-lg"
        style={{ fontFamily: 'var(--font-button)' }}
      >
        car rents
      </span>
    </div>
  );
};

export default Logo;