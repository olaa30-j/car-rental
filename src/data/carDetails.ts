/* =========================================================
   Import Icons
========================================================= */
import gearboxIcon from "../assets/shared/cars/icon1.png";
import fuelIcon from "../assets/shared/cars/icon2.png";
import doorsIcon from "../assets/shared/cars/icon4.png";
import acIcon from "../assets/shared/cars/icon3.png";
import seatsIcon from "../assets/shared/cars/icon5.png";
import distanceIcon from "../assets/shared/cars/icon6.png";

/* =========================================================
   Import Car Images (Main + Gallery)
========================================================= */
import car1 from "../assets/shared/cars/car-1.png";
import car2 from "../assets/shared/cars/car-2.png";
import car3 from "../assets/shared/cars/car-3.png";
import car4 from "../assets/shared/cars/car-4.png";
import car5 from "../assets/shared/cars/car-5.png";

/* =========================================================
   Icon Map  
========================================================= */
const detailIconMap: Record<string, string> = {
  gearbox: gearboxIcon,
  fuel: fuelIcon,
  doors: doorsIcon,
  ac: acIcon,
  seats: seatsIcon,
  distance: distanceIcon,
};

/* =========================================================
   Image Map  
========================================================= */
const detailImageMap: Record<string, string> = {
  "car-1.png": car1,
  "car-2.png": car2,
  "car-3.png": car3,
  "car-4.png": car4,
  "car-5.png": car5,
};

/* =========================================================
   Types
========================================================= */
export interface TechnicalSpec {
  id: number;
  icon: string;
  label: string;
  value: string;
}

export interface EquipmentItem {
  id: number;
  label: string;
}

export interface CarDetail {
  id: number;
  title: string;
  pricePerDay: number;
  mainImage: string;
  gallery: string[];
  technicalSpecs: TechnicalSpec[];
  equipment: EquipmentItem[];
}

/* =========================================================
   Raw Data (from JSON)
========================================================= */
const rawCarDetails = [
  {
    id: 1,
    title: "Toyota Corolla",
    pricePerDay: 45,
    mainImage: "car-1.png",
    gallery: ["car-1.png", "car-2.png", "car-3.png"],
    technicalSpecs: [
      { id: 1, icon: "gearbox", label: "Gear Box", value: "Automatic" },
      { id: 2, icon: "fuel", label: "Fuel", value: "PB 95" },
      { id: 3, icon: "doors", label: "Doors", value: "4" },
      { id: 4, icon: "ac", label: "Air Conditioner", value: "Yes" },
      { id: 5, icon: "seats", label: "Seats", value: "5" },
      { id: 6, icon: "distance", label: "Distance", value: "Unlimited" },
    ],
    equipment: [
      { id: 1, label: "ABS" },
      { id: 2, label: "Air Bags" },
      { id: 3, label: "Cruise Control" },
      { id: 4, label: "Bluetooth" },
      { id: 5, label: "Rear Camera" },
      { id: 6, label: "Air Conditioner" },
    ],
  },
  {
    id: 2,
    title: "BMW M4",
    pricePerDay: 120,
    mainImage: "car-2.png",
    gallery: ["car-2.png", "car-4.png", "car-5.png"],
    technicalSpecs: [
      { id: 1, icon: "gearbox", label: "Gear Box", value: "Manual" },
      { id: 2, icon: "fuel", label: "Fuel", value: "PB 95" },
      { id: 3, icon: "doors", label: "Doors", value: "2" },
      { id: 4, icon: "ac", label: "Air Conditioner", value: "Yes" },
      { id: 5, icon: "seats", label: "Seats", value: "4" },
      { id: 6, icon: "distance", label: "Distance", value: "500" },
    ],
    equipment: [
      { id: 1, label: "ABS" },
      { id: 2, label: "Air Bags" },
      { id: 3, label: "Cruise Control" },
      { id: 4, label: "Sport Seats" },
      { id: 5, label: "Launch Control" },
      { id: 6, label: "Air Conditioner" },
    ],
  },
  {
    id: 3,
    title: "Mercedes C-Class",
    pricePerDay: 100,
    mainImage: "car-1.png",
    gallery: ["car-1.png", "car-3.png", "car-4.png"],
    technicalSpecs: [
      { id: 1, icon: "gearbox", label: "Gear Box", value: "Automatic" },
      { id: 2, icon: "fuel", label: "Fuel", value: "PB 95" },
      { id: 3, icon: "doors", label: "Doors", value: "4" },
      { id: 4, icon: "ac", label: "Air Conditioner", value: "Yes" },
      { id: 5, icon: "seats", label: "Seats", value: "5" },
      { id: 6, icon: "distance", label: "Distance", value: "300" },
    ],
    equipment: [
      { id: 1, label: "ABS" },
      { id: 2, label: "Air Bags" },
      { id: 3, label: "Cruise Control" },
      { id: 4, label: "Leather Seats" },
      { id: 5, label: "Sunroof" },
      { id: 6, label: "Air Conditioner" },
    ],
  },
  {
    id: 4,
    title: "Audi A5",
    pricePerDay: 90,
    mainImage: "car-3.png",
    gallery: ["car-3.png", "car-1.png", "car-5.png"],
    technicalSpecs: [
      { id: 1, icon: "gearbox", label: "Gear Box", value: "Automatic" },
      { id: 2, icon: "fuel", label: "Fuel", value: "PB 95" },
      { id: 3, icon: "doors", label: "Doors", value: "2" },
      { id: 4, icon: "ac", label: "Air Conditioner", value: "Yes" },
      { id: 5, icon: "seats", label: "Seats", value: "4" },
      { id: 6, icon: "distance", label: "Distance", value: "400" },
    ],
    equipment: [
      { id: 1, label: "ABS" },
      { id: 2, label: "Air Bags" },
      { id: 3, label: "Cruise Control" },
      { id: 4, label: "Parking Sensors" },
      { id: 5, label: "Navigation" },
      { id: 6, label: "Air Conditioner" },
    ],
  },
  {
    id: 5,
    title: "Porsche 911",
    pricePerDay: 180,
    mainImage: "car-4.png",
    gallery: ["car-4.png", "car-2.png", "car-1.png"],
    technicalSpecs: [
      { id: 1, icon: "gearbox", label: "Gear Box", value: "Manual" },
      { id: 2, icon: "fuel", label: "Fuel", value: "PB 95" },
      { id: 3, icon: "doors", label: "Doors", value: "2" },
      { id: 4, icon: "ac", label: "Air Conditioner", value: "Yes" },
      { id: 5, icon: "seats", label: "Seats", value: "2" },
      { id: 6, icon: "distance", label: "Distance", value: "200" },
    ],
    equipment: [
      { id: 1, label: "ABS" },
      { id: 2, label: "Air Bags" },
      { id: 3, label: "Cruise Control" },
      { id: 4, label: "Sport Chrono" },
      { id: 5, label: "Bose Sound" },
      { id: 6, label: "Air Conditioner" },
    ],
  },
  {
    id: 6,
    title: "Range Rover Evoque",
    pricePerDay: 110,
    mainImage: "car-3.png",
    gallery: ["car-3.png", "car-5.png", "car-2.png"],
    technicalSpecs: [
      { id: 1, icon: "gearbox", label: "Gear Box", value: "Automatic" },
      { id: 2, icon: "fuel", label: "Fuel", value: "PB 95" },
      { id: 3, icon: "doors", label: "Doors", value: "4" },
      { id: 4, icon: "ac", label: "Air Conditioner", value: "Yes" },
      { id: 5, icon: "seats", label: "Seats", value: "5" },
      { id: 6, icon: "distance", label: "Distance", value: "600" },
    ],
    equipment: [
      { id: 1, label: "ABS" },
      { id: 2, label: "Air Bags" },
      { id: 3, label: "Cruise Control" },
      { id: 4, label: "Terrain Response" },
      { id: 5, label: "Panoramic Roof" },
      { id: 6, label: "Air Conditioner" },
    ],
  },
  {
    id: 7,
    title: "Tesla Model 3",
    pricePerDay: 85,
    mainImage: "car-5.png",
    gallery: ["car-5.png", "car-1.png", "car-4.png"],
    technicalSpecs: [
      { id: 1, icon: "gearbox", label: "Gear Box", value: "Automatic" },
      { id: 2, icon: "fuel", label: "Fuel", value: "Electric" },
      { id: 3, icon: "doors", label: "Doors", value: "4" },
      { id: 4, icon: "ac", label: "Air Conditioner", value: "Yes" },
      { id: 5, icon: "seats", label: "Seats", value: "5" },
      { id: 6, icon: "distance", label: "Distance", value: "500" },
    ],
    equipment: [
      { id: 1, label: "ABS" },
      { id: 2, label: "Air Bags" },
      { id: 3, label: "Autopilot" },
      { id: 4, label: "Premium Audio" },
      { id: 5, label: "Glass Roof" },
      { id: 6, label: "Air Conditioner" },
    ],
  },
  {
    id: 8,
    title: "Hyundai Tucson",
    pricePerDay: 65,
    mainImage: "car-1.png",
    gallery: ["car-1.png", "car-4.png", "car-3.png"],
    technicalSpecs: [
      { id: 1, icon: "gearbox", label: "Gear Box", value: "Automatic" },
      { id: 2, icon: "fuel", label: "Fuel", value: "PB 95" },
      { id: 3, icon: "doors", label: "Doors", value: "4" },
      { id: 4, icon: "ac", label: "Air Conditioner", value: "Yes" },
      { id: 5, icon: "seats", label: "Seats", value: "5" },
      { id: 6, icon: "distance", label: "Distance", value: "Unlimited" },
    ],
    equipment: [
      { id: 1, label: "ABS" },
      { id: 2, label: "Air Bags" },
      { id: 3, label: "Cruise Control" },
      { id: 4, label: "Apple CarPlay" },
      { id: 5, label: "Blind Spot" },
      { id: 6, label: "Air Conditioner" },
    ],
  },
  {
    id: 9,
    title: "Kia Sportage",
    pricePerDay: 60,
    mainImage: "car-2.png",
    gallery: ["car-2.png", "car-5.png", "car-1.png"],
    technicalSpecs: [
      { id: 1, icon: "gearbox", label: "Gear Box", value: "Automatic" },
      { id: 2, icon: "fuel", label: "Fuel", value: "PB 95" },
      { id: 3, icon: "doors", label: "Doors", value: "4" },
      { id: 4, icon: "ac", label: "Air Conditioner", value: "Yes" },
      { id: 5, icon: "seats", label: "Seats", value: "5" },
      { id: 6, icon: "distance", label: "Distance", value: "Unlimited" },
    ],
    equipment: [
      { id: 1, label: "ABS" },
      { id: 2, label: "Air Bags" },
      { id: 3, label: "Cruise Control" },
      { id: 4, label: "Heated Seats" },
      { id: 5, label: "Rear Camera" },
      { id: 6, label: "Air Conditioner" },
    ],
  },
  {
    id: 10,
    title: "Ford Mustang",
    pricePerDay: 130,
    mainImage: "car-4.png",
    gallery: ["car-4.png", "car-3.png", "car-2.png"],
    technicalSpecs: [
      { id: 1, icon: "gearbox", label: "Gear Box", value: "Manual" },
      { id: 2, icon: "fuel", label: "Fuel", value: "PB 95" },
      { id: 3, icon: "doors", label: "Doors", value: "2" },
      { id: 4, icon: "ac", label: "Air Conditioner", value: "Yes" },
      { id: 5, icon: "seats", label: "Seats", value: "4" },
      { id: 6, icon: "distance", label: "Distance", value: "300" },
    ],
    equipment: [
      { id: 1, label: "ABS" },
      { id: 2, label: "Air Bags" },
      { id: 3, label: "Cruise Control" },
      { id: 4, label: "Sport Mode" },
      { id: 5, label: "Premium Sound" },
      { id: 6, label: "Air Conditioner" },
    ],
  },
  {
    id: 11,
    title: "Nissan Altima",
    pricePerDay: 50,
    mainImage: "car-5.png",
    gallery: ["car-5.png", "car-2.png", "car-4.png"],
    technicalSpecs: [
      { id: 1, icon: "gearbox", label: "Gear Box", value: "Automatic" },
      { id: 2, icon: "fuel", label: "Fuel", value: "PB 95" },
      { id: 3, icon: "doors", label: "Doors", value: "4" },
      { id: 4, icon: "ac", label: "Air Conditioner", value: "Yes" },
      { id: 5, icon: "seats", label: "Seats", value: "5" },
      { id: 6, icon: "distance", label: "Distance", value: "Unlimited" },
    ],
    equipment: [
      { id: 1, label: "ABS" },
      { id: 2, label: "Air Bags" },
      { id: 3, label: "Cruise Control" },
      { id: 4, label: "ProPILOT Assist" },
      { id: 5, label: "Remote Start" },
      { id: 6, label: "Air Conditioner" },
    ],
  },
  {
    id: 12,
    title: "Lexus ES",
    pricePerDay: 95,
    mainImage: "car-2.png",
    gallery: ["car-2.png", "car-1.png", "car-5.png"],
    technicalSpecs: [
      { id: 1, icon: "gearbox", label: "Gear Box", value: "Automatic" },
      { id: 2, icon: "fuel", label: "Fuel", value: "PB 95" },
      { id: 3, icon: "doors", label: "Doors", value: "4" },
      { id: 4, icon: "ac", label: "Air Conditioner", value: "Yes" },
      { id: 5, icon: "seats", label: "Seats", value: "5" },
      { id: 6, icon: "distance", label: "Distance", value: "400" },
    ],
    equipment: [
      { id: 1, label: "ABS" },
      { id: 2, label: "Air Bags" },
      { id: 3, label: "Cruise Control" },
      { id: 4, label: "Mark Levinson Audio" },
      { id: 5, label: "Ventilated Seats" },
      { id: 6, label: "Air Conditioner" },
    ],
  },
  {
    id: 13,
    title: "Chevrolet Camaro",
    pricePerDay: 115,
    mainImage: "car-3.png",
    gallery: ["car-3.png", "car-4.png", "car-1.png"],
    technicalSpecs: [
      { id: 1, icon: "gearbox", label: "Gear Box", value: "Manual" },
      { id: 2, icon: "fuel", label: "Fuel", value: "PB 95" },
      { id: 3, icon: "doors", label: "Doors", value: "2" },
      { id: 4, icon: "ac", label: "Air Conditioner", value: "Yes" },
      { id: 5, icon: "seats", label: "Seats", value: "4" },
      { id: 6, icon: "distance", label: "Distance", value: "250" },
    ],
    equipment: [
      { id: 1, label: "ABS" },
      { id: 2, label: "Air Bags" },
      { id: 3, label: "Cruise Control" },
      { id: 4, label: "Head-Up Display" },
      { id: 5, label: "Bose Sound" },
      { id: 6, label: "Air Conditioner" },
    ],
  },
  {
    id: 14,
    title: "Honda Civic",
    pricePerDay: 48,
    mainImage: "car-1.png",
    gallery: ["car-1.png", "car-5.png", "car-2.png"],
    technicalSpecs: [
      { id: 1, icon: "gearbox", label: "Gear Box", value: "Automatic" },
      { id: 2, icon: "fuel", label: "Fuel", value: "PB 95" },
      { id: 3, icon: "doors", label: "Doors", value: "4" },
      { id: 4, icon: "ac", label: "Air Conditioner", value: "Yes" },
      { id: 5, icon: "seats", label: "Seats", value: "5" },
      { id: 6, icon: "distance", label: "Distance", value: "Unlimited" },
    ],
    equipment: [
      { id: 1, label: "ABS" },
      { id: 2, label: "Air Bags" },
      { id: 3, label: "Cruise Control" },
      { id: 4, label: "Honda Sensing" },
      { id: 5, label: "Apple CarPlay" },
      { id: 6, label: "Air Conditioner" },
    ],
  },
  {
    id: 15,
    title: "Jeep Wrangler",
    pricePerDay: 80,
    mainImage: "car-4.png",
    gallery: ["car-4.png", "car-1.png", "car-3.png"],
    technicalSpecs: [
      { id: 1, icon: "gearbox", label: "Gear Box", value: "Manual" },
      { id: 2, icon: "fuel", label: "Fuel", value: "PB 95" },
      { id: 3, icon: "doors", label: "Doors", value: "4" },
      { id: 4, icon: "ac", label: "Air Conditioner", value: "Yes" },
      { id: 5, icon: "seats", label: "Seats", value: "5" },
      { id: 6, icon: "distance", label: "Distance", value: "Unlimited" },
    ],
    equipment: [
      { id: 1, label: "ABS" },
      { id: 2, label: "Air Bags" },
      { id: 3, label: "Cruise Control" },
      { id: 4, label: "4x4 Drive" },
      { id: 5, label: "Removable Top" },
      { id: 6, label: "Air Conditioner" },
    ],
  },
  {
    id: 16,
    title: "Volvo XC60",
    pricePerDay: 90,
    mainImage: "car-5.png",
    gallery: ["car-5.png", "car-3.png", "car-4.png"],
    technicalSpecs: [
      { id: 1, icon: "gearbox", label: "Gear Box", value: "Automatic" },
      { id: 2, icon: "fuel", label: "Fuel", value: "PB 95" },
      { id: 3, icon: "doors", label: "Doors", value: "4" },
      { id: 4, icon: "ac", label: "Air Conditioner", value: "Yes" },
      { id: 5, icon: "seats", label: "Seats", value: "5" },
      { id: 6, icon: "distance", label: "Distance", value: "500" },
    ],
    equipment: [
      { id: 1, label: "ABS" },
      { id: 2, label: "Air Bags" },
      { id: 3, label: "Cruise Control" },
      { id: 4, label: "Pilot Assist" },
      { id: 5, label: "Panoramic Roof" },
      { id: 6, label: "Air Conditioner" },
    ],
  },
  {
    id: 17,
    title: "Mazda CX-5",
    pricePerDay: 58,
    mainImage: "car-2.png",
    gallery: ["car-2.png", "car-4.png", "car-5.png"],
    technicalSpecs: [
      { id: 1, icon: "gearbox", label: "Gear Box", value: "Automatic" },
      { id: 2, icon: "fuel", label: "Fuel", value: "PB 95" },
      { id: 3, icon: "doors", label: "Doors", value: "4" },
      { id: 4, icon: "ac", label: "Air Conditioner", value: "Yes" },
      { id: 5, icon: "seats", label: "Seats", value: "5" },
      { id: 6, icon: "distance", label: "Distance", value: "Unlimited" },
    ],
    equipment: [
      { id: 1, label: "ABS" },
      { id: 2, label: "Air Bags" },
      { id: 3, label: "Cruise Control" },
      { id: 4, label: "i-Activsense" },
      { id: 5, label: "Bose Sound" },
      { id: 6, label: "Air Conditioner" },
    ],
  },
  {
    id: 18,
    title: "Mercedes GLE",
    pricePerDay: 140,
    mainImage: "car-3.png",
    gallery: ["car-3.png", "car-2.png", "car-1.png"],
    technicalSpecs: [
      { id: 1, icon: "gearbox", label: "Gear Box", value: "Automatic" },
      { id: 2, icon: "fuel", label: "Fuel", value: "PB 95" },
      { id: 3, icon: "doors", label: "Doors", value: "4" },
      { id: 4, icon: "ac", label: "Air Conditioner", value: "Yes" },
      { id: 5, icon: "seats", label: "Seats", value: "5" },
      { id: 6, icon: "distance", label: "Distance", value: "400" },
    ],
    equipment: [
      { id: 1, label: "ABS" },
      { id: 2, label: "Air Bags" },
      { id: 3, label: "Cruise Control" },
      { id: 4, label: "MBUX" },
      { id: 5, label: "Air Suspension" },
      { id: 6, label: "Air Conditioner" },
    ],
  },
  {
    id: 19,
    title: "BMW X5",
    pricePerDay: 125,
    mainImage: "car-4.png",
    gallery: ["car-4.png", "car-5.png", "car-2.png"],
    technicalSpecs: [
      { id: 1, icon: "gearbox", label: "Gear Box", value: "Automatic" },
      { id: 2, icon: "fuel", label: "Fuel", value: "PB 95" },
      { id: 3, icon: "doors", label: "Doors", value: "4" },
      { id: 4, icon: "ac", label: "Air Conditioner", value: "Yes" },
      { id: 5, icon: "seats", label: "Seats", value: "5" },
      { id: 6, icon: "distance", label: "Distance", value: "500" },
    ],
    equipment: [
      { id: 1, label: "ABS" },
      { id: 2, label: "Air Bags" },
      { id: 3, label: "Cruise Control" },
      { id: 4, label: "xDrive" },
      { id: 5, label: "Harman Kardon" },
      { id: 6, label: "Air Conditioner" },
    ],
  },
  {
    id: 20,
    title: "Audi Q8",
    pricePerDay: 135,
    mainImage: "car-5.png",
    gallery: ["car-5.png", "car-1.png", "car-3.png"],
    technicalSpecs: [
      { id: 1, icon: "gearbox", label: "Gear Box", value: "Automatic" },
      { id: 2, icon: "fuel", label: "Fuel", value: "PB 95" },
      { id: 3, icon: "doors", label: "Doors", value: "4" },
      { id: 4, icon: "ac", label: "Air Conditioner", value: "Yes" },
      { id: 5, icon: "seats", label: "Seats", value: "5" },
      { id: 6, icon: "distance", label: "Distance", value: "450" },
    ],
    equipment: [
      { id: 1, label: "ABS" },
      { id: 2, label: "Air Bags" },
      { id: 3, label: "Cruise Control" },
      { id: 4, label: "Quattro" },
      { id: 5, label: "Virtual Cockpit" },
      { id: 6, label: "Air Conditioner" },
    ],
  },
];

/* =========================================================
   Transform: string → actual paths (icons + images)
========================================================= */
export const carDetails: CarDetail[] = rawCarDetails.map((detail) => ({
  ...detail,
  mainImage: detailImageMap[detail.mainImage] ?? car1,
  gallery: detail.gallery.map((img) => detailImageMap[img] ?? car1),
  technicalSpecs: detail.technicalSpecs.map((spec) => ({
    ...spec,
    icon: detailIconMap[spec.icon] ?? gearboxIcon,
  })),
}));