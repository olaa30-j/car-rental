/* =========================================================
   StatsSection.tsx
========================================================= */
import StatItem from "./StatItem";
import { stats } from "../../../data/stats";

/* =========================================================
   Component
========================================================= */
export default function StatsSection() {
  return (
    <section>
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-6">
        {stats.map((stat) => (
          <StatItem key={stat.id} stat={stat} />
        ))}
      </div>
    </section>
  );
}