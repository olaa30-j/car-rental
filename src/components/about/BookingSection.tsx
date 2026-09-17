/* =========================================================
   Import Images
========================================================= */
import HeroCarImage from '../../assets/home/main/car.png';
import HexPatternImage from '../../assets/shared/banners/sec-7.png';

const BookingSection = () => {
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
                    right-0
                    bottom-1/2
                    translate-y-1/2 
                    w-[671px]
                    h-[389px] 
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
                <h2 className="text-white leading-[1.15]">
                    Looking for a car?
                </h2>
                <span className='text-white text-2xl mb-6 mt-2'>+537 547-6401</span>

                {/* Description */}
                <p className="text-white/80 text-base lg:text-lg mb-10 max-w-[480px] leading-relaxed">
                    Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in
                </p>

                {/* Book Button */}
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
                        w-fit
                        "
                >
                    Book now
                </button>
            </div>
        </div>
    );
};

export default BookingSection;