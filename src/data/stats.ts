/* =========================================================
   Types
========================================================= */
export interface Stat {
  id: number;
  value: string;
  label: string;
}

/* =========================================================
   Raw Data
========================================================= */
const rawStats: Stat[] = [
  { id: 1, value: "20k+", label: "Happy customers" },
  { id: 2, value: "540+", label: "Count of cars" },
  { id: 3, value: "25+", label: "Years of experience" },
];

/* =========================================================
   Exports
========================================================= */
export const stats = rawStats;