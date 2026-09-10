import type { LucideIcon } from "lucide-react";

/* =========================================================
   Types
========================================================= */

interface CarFeature {
  id: string;
  icon: LucideIcon;
  label: string;
}

interface CarCardProps {
  image: string;
  name: string;
  category: string;
  price: number;
  features: CarFeature[];
}

/* =========================================================
   Component
========================================================= */

export default function CarCard({
  image,
  name,
  category,
  price,
  features,
}: CarCardProps) {
  return (
    <article
      className="
        w-full
        max-w-[368px]
        overflow-hidden
        rounded-[var(--border-radius)]
        bg-[var(--background-color)]
      "
    >
      {/* =====================================================
          Car Image
      ===================================================== */}

      <img
        src={image}
        alt={name}
        className="block h-[240px] w-full object-cover"
      />

      {/* =====================================================
          Car Details
      ===================================================== */}

      <div className="p-6">

        {/* ---------------------------------------------------
            Main Information
            Left  → Name + Category
            Right → Price + Per Day
        --------------------------------------------------- */}

        <div className="flex items-start justify-between">
          
          {/* Name + Category */}
          <div>
            <h4>{name}</h4>
            <h6>{category}</h6>
          </div>

          {/* Price + Rental Period */}
          <div className="text-right">
            <h4>${price}</h4>
            <h6>Per day</h6>
          </div>

        </div>

        {/* ===================================================
            Features
        =================================================== */}

        <div className="mt-6 flex items-center gap-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="flex items-center gap-1.5"
              >
                {/* Feature Icon */}
                <Icon size={16} />

                {/* Feature Label */}
                <span className="font-[600] text-[14px]">
                  {feature.label}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </article>
  );
}