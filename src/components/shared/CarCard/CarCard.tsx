/* =========================================================
   Types
========================================================= */

interface CarFeature {
  id: number;
  icon: string;
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
        bg-[#FAFAFA]
        p-[24px]
      "
    >
      {/* =====================================================
          Car Image
      ===================================================== */}
      <div>
        <img
          src={image}
          alt={name}
          className="block h-[240px] w-full object-contain"
        />
      </div>
      {/* =====================================================
          Car Details
      ===================================================== */}

      <div>

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
            <h4 className="text-primary">${price}</h4>
            <h6>Per day</h6>
          </div>

        </div>

        {/* ===================================================
            Features
        =================================================== */}

        <div className="mt-6 flex items-center gap-4">
          {features.map((feature) => {
            return (
              <div
                key={feature.id}
                className="flex items-center gap-1.5"
              >
                {/* Feature Icon */}
                <img src={feature.icon} className="w-[20px] h-[20px]" />

                {/* Feature Label */}
                <span className="text-black/60">
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