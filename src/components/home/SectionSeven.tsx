/* =========================================================
   Import Images
========================================================= */
import HeroCarImage from '../../assets/home/sec_seven/Vector.png'; 
import HexPatternImage from '../../assets/shared/banners/sec-7.png'; 

const SectionSeven = () => {
  return (
    <div className="relative overflow-hidden rounded-[32px] bg-primary min-h-[415px] flex items-center w-full px-[72px]">
      
      {/* Hexagon Pattern Background Overlay */}
      <img
        src={HexPatternImage}
        alt=""
        className="
          absolute 
          -left-1/5
          -translate-x-1/5
          top-[50px]
          w-full 
          h-full
          max-h-[167.45px] 
          object-cover 
          opacity-90 
          pointer-events-none 
          select-none 
          z-[0]
        "
      />

      {/* Car Silhouette Image — Positioned Right */}
      <img
        src={HeroCarImage}
        alt="Car Silhouette"
        className="
          hidden
          lg:block
          absolute 
          right-[74px]
          bottom-1/2
          translate-y-1/2 
          w-[380px]
          h-[380px] 
          object-contain 
          object-bottom 
          pointer-events-none 
          select-none 
          z-[1]
        "
      />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col justify-center w-full lg:w-[60%] py-[58px]">
        
        {/* Heading */}
        <h2 className="text-white mb-6 leading-[1.15]">
          Enjoy every mile with <br className="hidden lg:block" />
          adorable companionship.
        </h2>
        
        {/* Description */}
        <p className="text-white/80 text-base lg:text-lg mb-10 max-w-[480px] leading-relaxed">
          Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien 
          bibendum ullamcorper in. Diam tincidunt tincidunt erat
        </p>

        {/* Search Form */}
        <div className="flex items-center bg-white rounded-[10.5px] p-1.5 w-full max-w-[420px] shadow-sm">
          <input
            type="text"
            placeholder="City"
            className="
              flex-1 
              bg-transparent 
              px-6 
              py-3 
              text-gray-700 
              placeholder-gray-400 
              outline-none 
              text-base 
              font-medium
            "
          />
          <button 
            className="
              bg-[#F5A623] 
              hover:bg-[#e0951e] 
              text-white 
              font-semibold 
              px-8 
              transition-colors
              button_style 
              duration-200 
              whitespace-nowrap
            "
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionSeven;