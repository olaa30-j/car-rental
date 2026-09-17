/* =========================================================
   StatItem.tsx
========================================================= */
import { type Stat } from "../../../data/stats";

/* =========================================================
   Types
========================================================= */
interface StatItemProps {
  stat: Stat;
}

/* =========================================================
   Component
========================================================= */
export default function StatItem({ stat }: StatItemProps) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Value (e.g., 20k+) */}
      <h1 className="font-900 text-primary text-xl lg:text-[80px]">
        {stat.value}
      </h1>

      {/* Label (e.g., Happy customers) */}
      <p className="font-semibold text-black">
        {stat.label}
      </p>
    </div>
  );
}