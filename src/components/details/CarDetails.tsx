/* =========================================================
   CarDetails.tsx
========================================================= */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { carDetails, type CarDetail } from "../../data/carDetails";

interface CarDetailsProps {
  carId: number;
}

/* =========================================================
   Sub-Component: Technical Spec Card
========================================================= */
const SpecCard: React.FC<{ icon: string; label: string; value: string }> = ({
  icon,
  label,
  value,
}) => {
  return (
    <div className="flex flex-col gap-3 rounded-2xl bg-gray-50 p-5">
      <img src={icon} alt={label} className="h-6 w-6 object-contain" />
      <div>
        <p className="text-sm font-semibold">{label}</p>
        <p className="text-black/60">{value}</p>
      </div>
    </div>
  );
};

/* =========================================================
   Sub-Component: Equipment Item
========================================================= */
const EquipmentItem: React.FC<{ label: string }> = ({ label }) => {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3.5 w-3.5 text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <span className="text-blur-text">{label}</span>
    </div>
  );
};

/* =========================================================
   Main Component
========================================================= */
const CarDetails: React.FC<CarDetailsProps> = ({ carId }) => {
  const navigate = useNavigate();

  const car: CarDetail | undefined = carDetails.find((c) => c.id === carId);

  /* -----------------------------------------------------
     Track the currently displayed image
  ----------------------------------------------------- */
  const [selectedImage, setSelectedImage] = useState<string>("");

  /* -----------------------------------------------------
     Sync selectedImage when the car changes
  ----------------------------------------------------- */
  useEffect(() => {
    if (car) {
      setSelectedImage(car.mainImage);
    }
  }, [car]);

  /* ---------- Not Found State ---------- */
  if (!carId || Number.isNaN(carId) || !car) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Car not found</h2>
        <p className="text-sm text-gray-500">
          The car you're looking for doesn't exist or the ID is invalid.
        </p>
        <button
          onClick={() => navigate("/cars")}
          className="mt-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
        >
          Back to cars
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto container">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* ================= LEFT COLUMN ================= */}
        <div className="flex flex-col gap-8">
          {/* Title + Price */}
          <div>
            <h3>{car.title}</h3>
            <p className="mt-3 flex gap-1 items-center">
              <h3 className="font-bold text-primary">
                ${car.pricePerDay}
              </h3>
              <span className="text-black/60"> / day</span>
            </p>
          </div>

          {/* Main Image */}
          <div className="flex items-center justify-center">
            <img
              src={selectedImage || car.mainImage}
              alt={car.title}
              className="h-auto w-full max-w-md object-contain transition-opacity duration-300"
            />
          </div>

          {/* Gallery Thumbnails */}
          <div className="flex gap-4">
            {car.gallery.map((img, idx) => {
              const isActive = selectedImage === img;

              return (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`
                    h-20 w-28 overflow-hidden rounded-xl bg-gray-100
                    transition
                    hover:ring-2 hover:ring-primary/90
                    ${isActive ? "ring-2 ring-primary" : "ring-0"}
                  `}
                >
                  <img
                    src={img}
                    alt={`${car.title} view ${idx + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className="flex flex-col gap-10">
          {/* Technical Specifications */}
          <div>
            <h4 className="mb-5 text-xl font-bold text-gray-900">
              Technical Specification
            </h4>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {car.technicalSpecs.map((spec) => (
                <SpecCard
                  key={spec.id}
                  icon={spec.icon}
                  label={spec.label}
                  value={spec.value}
                />
              ))}
            </div>
          </div>

          {/* Rent Button */}
          <button className="rounded-[10.5px] bg-primary py-[15.5px] lg:px-[105px] w-fit text-white transition hover:bg-primary/90 active:scale-[0.99]">
            Rent a car
          </button>

          {/* Car Equipment */}
          <div>
            <h4 className="mb-5">Car Equipment</h4>
            <div className="grid grid-cols-2 gap-y-4 gap-x-6">
              {car.equipment.map((item) => (
                <EquipmentItem key={item.id} label={item.label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;