/* =========================================================
   FeatureItem.tsx
========================================================= */
import { type AboutFeature } from "../../../data/aboutFeatures";

/* =========================================================
   Types
========================================================= */
interface FeatureItemProps {
  feature: AboutFeature;
}

/* =========================================================
   Component
========================================================= */
export default function FeatureItem({ feature }: FeatureItemProps) {
  return (
    <div className="flex flex-col gap-3">
      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-[15px] leading-relaxed text-black/70">
        {feature.description}
      </p>
    </div>
  );
}