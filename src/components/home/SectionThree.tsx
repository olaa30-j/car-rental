import { cars } from "../../data/cars";
import CarCard from "../shared/CarCard/CarCard";
import SectionHeader from "../shared/SectionHeader";

const SectionThree = () => {
  const displayedCars = cars.slice(0, 6);

  return (
    <div className="container">
      <SectionHeader
        headerText="Choose the car that suits you"
        linkHerf="/products"
      />

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {displayedCars.map((car) => (
          <CarCard
            key={car.id}
            image={car.image}
            name={car.title}
            category={car.category}
            price={car.price}
            features={car.features}
            id={car.id} 
          />
        ))}
      </div>
    </div>
  );
};

export default SectionThree;