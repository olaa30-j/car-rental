/* =========================================================
   Details.tsx
========================================================= */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CarDetails from "../../components/details/CarDetails";
import SectionHeader from "../../components/shared/SectionHeader";
import CarCard from "../../components/shared/CarCard/CarCard";
import { cars } from "../../data/cars";
import LoadingSpinner from "../LoadingSpinner";

const Details = () => {
  const { id } = useParams<{ id: string }>();
  const carId = Number(id);

  const [isLoading, setIsLoading] = useState(true);

  /* =====================================================
     Scroll to top + simulate data fetching
     (replace setTimeout with real API later)
  ===================================================== */
  useEffect(() => {
    // 🔝 Scroll to top immediately when id changes
    window.scrollTo({ top: 0, behavior: "smooth" });

    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    // Cleanup: cancel timer if component unmounts or id changes
    return () => clearTimeout(timer);
  }, [carId]);

  /* =====================================================
     Loading State
  ===================================================== */
  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  /* =====================================================
     Filter out the current car & pick 6 others
  ===================================================== */
  const displayedCars = cars.filter((car) => car.id !== carId).slice(0, 6);

  return (
    <div>
      <section>
        <CarDetails carId={carId} />
      </section>

      <section className="container">
        <SectionHeader headerText="Other cars" linkHerf="/products" />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedCars.map((car) => (
            <CarCard
              key={car.id}
              id={car.id}
              image={car.image}
              name={car.title}
              category={car.category}
              price={car.price}
              features={car.features}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Details;