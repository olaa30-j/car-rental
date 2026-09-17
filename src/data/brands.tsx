import type { Brand } from '../components/products/Brands';

import toyota from '../assets/products/brands/Logo (1).png';
import ford from '../assets/products/brands/Logo (4).png';
import mercedes from '../assets/products/brands/Logo (5).png';
import jeep from '../assets/products/brands/Logo (6).png';
import bmw from '../assets/products/brands/Logo (7).png';
import audi from '../assets/products/brands/Logo (8).png';

export const brands: Brand[] = [
  {
    id: 'toyota',
    name: 'Toyota',
    logo: <img src={toyota} alt="Toyota" className="h-8 w-auto md:h-10" />,
  },
  {
    id: 'ford',
    name: 'Ford',
    logo: <img src={ford} alt="Ford" className="h-8 w-auto md:h-10" />,
  },
  {
    id: 'mercedes',
    name: 'Mercedes-Benz',
    logo: <img src={mercedes} alt="Mercedes" className="h-8 w-auto md:h-10" />,
  },
  {
    id: 'jeep',
    name: 'Jeep',
    logo: <img src={jeep} alt="Jeep" className="h-8 w-auto md:h-10" />,
  },
  {
    id: 'bmw',
    name: 'BMW',
    logo: <img src={bmw} alt="BMW" className="h-8 w-auto md:h-10" />,
  },
  {
    id: 'audi',
    name: 'Audi',
    logo: <img src={audi} alt="Audi" className="h-8 w-auto md:h-10" />,
  },
];