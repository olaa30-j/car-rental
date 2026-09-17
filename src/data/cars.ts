/* =========================================================
   Import Icons
========================================================= */
import settingsIcon from "../assets/shared/cars/icon1.png";
import fuelIcon from "../assets/shared/cars/icon2.png";
import snowflakeIcon from "../assets/shared/cars/icon3.png";

/* =========================================================
   Import Car Images
========================================================= */
import car1 from "../assets/shared/cars/car-1.png";
import car2 from "../assets/shared/cars/car-2.png";
import car3 from "../assets/shared/cars/car-3.png";
import car4 from "../assets/shared/cars/car-4.png";
import car5 from "../assets/shared/cars/car-5.png";

/* =========================================================
   Icon Map  
========================================================= */
const iconMap: Record<string, string> = {
  settings: settingsIcon,
  fuel: fuelIcon,
  snowflake: snowflakeIcon,
};

/* =========================================================
   Image Map  
========================================================= */
const imageMap: Record<string, string> = {
  "car-1.png": car1,
  "car-2.png": car2,
  "car-3.png": car3,
  "car-4.png": car4,
  "car-5.png": car5,
};

/* =========================================================
   Types
========================================================= */
export interface CarFeature {
  id: number;
  icon: string;
  label: string;
}

export interface Car {
  id: number;
  image: string;
  title: string;
  category: string;
  price: number;
  features: CarFeature[];
}

/* =========================================================
   Raw Data (from JSON)
========================================================= */
const rawCars = [
  {
    id: 1,
    image: "car-1.png",
    title: "Toyota Corolla",
    category: "Sedan",
    price: 45,
    features: [
      { id: 1, icon: "settings", label: "Automatic" },
      { id: 2, icon: "fuel", label: "PB 95" },
      { id: 3, icon: "snowflake", label: "Air Conditioner" },
    ],
  },
  {
    id: 2,
    image: "car-2.png",
    title: "BMW M4",
    category: "Sport",
    price: 120,
    features: [
      { id: 1, icon: "settings", label: "Manual" },
      { id: 2, icon: "fuel", label: "PB 95" },
      { id: 3, icon: "snowflake", label: "Air Conditioner" },
    ],
  },
  {
    id: 3,
    image: "car-1.png",
    title: "Mercedes C-Class",
    category: "Luxury",
    price: 100,
    features: [
      { id: 1, icon: "settings", label: "Automatic" },
      { id: 2, icon: "fuel", label: "PB 95" },
      { id: 3, icon: "snowflake", label: "Air Conditioner" },
    ],
  },
  {
    id: 4,
    image: "car-3.png",
    title: "Audi A5",
    category: "Coupe",
    price: 90,
    features: [
      { id: 1, icon: "settings", label: "Automatic" },
      { id: 2, icon: "fuel", label: "PB 95" },
      { id: 3, icon: "snowflake", label: "Air Conditioner" },
    ],
  },
  {
    id: 5,
    image: "car-4.png",
    title: "Porsche 911",
    category: "Sport",
    price: 180,
    features: [
      { id: 1, icon: "settings", label: "Manual" },
      { id: 2, icon: "fuel", label: "PB 95" },
      { id: 3, icon: "snowflake", label: "Air Conditioner" },
    ],
  },
  {
    id: 6,
    image: "car-3.png",
    title: "Range Rover Evoque",
    category: "SUV",
    price: 110,
    features: [
      { id: 1, icon: "settings", label: "Automatic" },
      { id: 2, icon: "fuel", label: "PB 95" },
      { id: 3, icon: "snowflake", label: "Air Conditioner" },
    ],
  },
  {
    id: 7,
    image: "car-5.png",
    title: "Tesla Model 3",
    category: "Electric",
    price: 85,
    features: [
      { id: 1, icon: "settings", label: "Automatic" },
      { id: 2, icon: "zap", label: "Electric" },
      { id: 3, icon: "snowflake", label: "Air Conditioner" },
    ],
  },
  {
    id: 8,
    image: "car-1.png",
    title: "Hyundai Tucson",
    category: "SUV",
    price: 65,
    features: [
      { id: 1, icon: "settings", label: "Automatic" },
      { id: 2, icon: "fuel", label: "PB 95" },
      { id: 3, icon: "snowflake", label: "Air Conditioner" },
    ],
  },
  {
    id: 9,
    image: "car-2.png",
    title: "Kia Sportage",
    category: "SUV",
    price: 60,
    features: [
      { id: 1, icon: "settings", label: "Automatic" },
      { id: 2, icon: "fuel", label: "PB 95" },
      { id: 3, icon: "snowflake", label: "Air Conditioner" },
    ],
  },
  {
    id: 10,
    image: "car-4.png",
    title: "Ford Mustang",
    category: "Sport",
    price: 130,
    features: [
      { id: 1, icon: "settings", label: "Manual" },
      { id: 2, icon: "fuel", label: "PB 95" },
      { id: 3, icon: "snowflake", label: "Air Conditioner" },
    ],
  },
  {
    id: 11,
    image: "car-5.png",
    title: "Nissan Altima",
    category: "Sedan",
    price: 50,
    features: [
      { id: 1, icon: "settings", label: "Automatic" },
      { id: 2, icon: "fuel", label: "PB 95" },
      { id: 3, icon: "snowflake", label: "Air Conditioner" },
    ],
  },
  {
    id: 12,
    image: "car-2.png",
    title: "Lexus ES",
    category: "Luxury",
    price: 95,
    features: [
      { id: 1, icon: "settings", label: "Automatic" },
      { id: 2, icon: "fuel", label: "PB 95" },
      { id: 3, icon: "snowflake", label: "Air Conditioner" },
    ],
  },
  {
    id: 13,
    image: "car-3.png",
    title: "Chevrolet Camaro",
    category: "Sport",
    price: 115,
    features: [
      { id: 1, icon: "settings", label: "Manual" },
      { id: 2, icon: "fuel", label: "PB 95" },
      { id: 3, icon: "snowflake", label: "Air Conditioner" },
    ],
  },
  {
    id: 14,
    image: "car-1.png",
    title: "Honda Civic",
    category: "Sedan",
    price: 48,
    features: [
      { id: 1, icon: "settings", label: "Automatic" },
      { id: 2, icon: "fuel", label: "PB 95" },
      { id: 3, icon: "snowflake", label: "Air Conditioner" },
    ],
  },
  {
    id: 15,
    image: "car-4.png",
    title: "Jeep Wrangler",
    category: "SUV",
    price: 80,
    features: [
      { id: 1, icon: "settings", label: "Manual" },
      { id: 2, icon: "fuel", label: "PB 95" },
      { id: 3, icon: "snowflake", label: "Air Conditioner" },
    ],
  },
  {
    id: 16,
    image: "car-5.png",
    title: "Volvo XC60",
    category: "SUV",
    price: 90,
    features: [
      { id: 1, icon: "settings", label: "Automatic" },
      { id: 2, icon: "fuel", label: "PB 95" },
      { id: 3, icon: "snowflake", label: "Air Conditioner" },
    ],
  },
  {
    id: 17,
    image: "car-2.png",
    title: "Mazda CX-5",
    category: "SUV",
    price: 58,
    features: [
      { id: 1, icon: "settings", label: "Automatic" },
      { id: 2, icon: "fuel", label: "PB 95" },
      { id: 3, icon: "snowflake", label: "Air Conditioner" },
    ],
  },
  {
    id: 18,
    image: "car-3.png",
    title: "Mercedes GLE",
    category: "Luxury",
    price: 140,
    features: [
      { id: 1, icon: "settings", label: "Automatic" },
      { id: 2, icon: "fuel", label: "PB 95" },
      { id: 3, icon: "snowflake", label: "Air Conditioner" },
    ],
  },
  {
    id: 19,
    image: "car-4.png",
    title: "BMW X5",
    category: "SUV",
    price: 125,
    features: [
      { id: 1, icon: "settings", label: "Automatic" },
      { id: 2, icon: "fuel", label: "PB 95" },
      { id: 3, icon: "snowflake", label: "Air Conditioner" },
    ],
  },
  {
    id: 20,
    image: "car-5.png",
    title: "Audi Q8",
    category: "Luxury SUV",
    price: 135,
    features: [
      { id: 1, icon: "settings", label: "Automatic" },
      { id: 2, icon: "fuel", label: "PB 95" },
      { id: 3, icon: "snowflake", label: "Air Conditioner" },
    ],
  },
];

/* =========================================================
   Transform: string → actual paths (icons + images)
========================================================= */
export const cars: Car[] = rawCars.map((car) => ({
  ...car,
  image: imageMap[car.image] ?? car1,   
  features: car.features.map((f) => ({
    ...f,
    icon: iconMap[f.icon] ?? settingsIcon,    
  })),
}));