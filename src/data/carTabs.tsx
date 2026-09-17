import { Car, CarTaxiFront, Truck, Bus, CarFront } from 'lucide-react';
import type { TabItem } from '../components/products/Tabs';

export const carTabs: TabItem[] = [
  { id: 'all', label: 'All vehicles', icon: <Car size={18} /> },
  { id: 'sedan', label: 'Sedan', icon: <CarFront size={18} /> },
  { id: 'cabriolet', label: 'Cabriolet', icon: <CarTaxiFront size={18} /> },
  { id: 'pickup', label: 'Pickup', icon: <Truck size={18} /> },
  { id: 'suv', label: 'Suv', icon: <Bus size={18} /> },
  { id: 'minivan', label: 'Minivan', icon: <Bus size={18} /> },
];