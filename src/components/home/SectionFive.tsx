/* =========================================================
   Import Icons (Update these paths to match your actual assets)
========================================================= */
import carIcon from "../../assets/home/sec_five/cars.png";
import userIcon from "../../assets/home/sec_five/likes.png";
import calendarIcon from "../../assets/home/sec_five/calender.png";
import speedIcon from "../../assets/home/sec_five/speedometer.png";

/* =========================================================
   Background Images
========================================================= */
import BgImage1 from '../../assets/shared/banners/sec-5.png';
import BgImage2 from '../../assets/home/sec_five/bg.png';

/* =========================================================
   Types
========================================================= */
export interface StatItem {
  id: number;
  icon: string;
  value: string;
  label: string;
}

/* =========================================================
   Data (Facts In Numbers)
========================================================= */
const statsData: StatItem[] = [
  {
    id: 1,
    icon: carIcon,
    value: "540+",
    label: "Cars",
  },
  {
    id: 2,
    icon: userIcon,
    value: "20k+",
    label: "Customers",
  },
  {
    id: 3,
    icon: calendarIcon,
    value: "25+",
    label: "Years",
  },
  {
    id: 4,
    icon: speedIcon,
    value: "20m+",
    label: "Miles",
  },
];

/* =========================================================
   Reusable Card Component
========================================================= */
const StatCard = ({ stat }: { stat: StatItem }) => {
  return (
    <div className="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-lg w-full">
      {/* Icon Container */}
      <div className="flex-shrink-0 w-16 h-16 lg:w-[72px] lg:h-[72px] rounded-xl bg-[#F5A623] flex items-center justify-center">
        <img
          src={stat.icon}
          alt={stat.label}
          className="w-8 h-8 lg:w-9 lg:h-9 object-contain"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col py-[6.5px]">
        <span className="text-[24px] font-bold leading-tight mb-2">
          {stat.value}
        </span>
        <span className="font-[600] text-black/60">
          {stat.label}
        </span>
      </div>
    </div>
  );
};

/* =========================================================
   Main Section Component
========================================================= */
const SectionFive = () => {
  return (
    <div className="relative overflow-hidden rounded-[40px] bg-primary min-h-[486px]">
      {/* Background Image 1 — left offset */}
      <img
        src={BgImage1}
        alt=""
        className="
          pointer-events-none
          absolute
          -left-14
          -bottom-[45px]
          w-[80%]
          h-full
          object-contain
          select-none
          z-[1]
          opacity-90
        "
      />

      {/* Background Image 2 — centered bottom */}
      <img
        src={BgImage2}
        alt=""
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2
          w-[799px]
          h-[483px]
          object-contain
          select-none
          z-[0]
          opacity-40
        "
      />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-[72px] py-[60px]">
        
        {/* Header */}
        <div className="text-center max-w-2xl mb-[80px]">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5">
            Facts In Numbers
          </h2>
          <p className="text-white leading-relaxed">
            Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
            bibendum ullamcorper in. Diam tincidunt tincidunt erat at semper
            fermentum
          </p>
        </div>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {statsData.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionFive;