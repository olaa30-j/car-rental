/* =========================================================
   AboutFeaturesSection.tsx
========================================================= */
import { aboutFeatures } from "../../../data/aboutFeatures";
import FeatureItem from "./FeatureItem";

export default function AboutFeaturesSection() {
  return (
    <section className="container">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
        {/* =====================================================
            Left Column: Big Heading
        ===================================================== */}
        <div className="flex items-start">
          <h2 className="leading-tight">
            Where every drive feels extraordinary
          </h2>
        </div>

        {/* =====================================================
            Right: 2×2 Grid of Features
        ===================================================== */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:col-span-2">
          {aboutFeatures.map((feature) => (
            <FeatureItem key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}