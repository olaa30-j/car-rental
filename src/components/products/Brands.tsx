import type { ReactNode } from 'react';

export interface Brand {
  id: string;
  name: string;
  logo: ReactNode; 
}

interface BrandsProps {
  brands: Brand[];
  className?: string;
}

const Brands = ({ brands, className = '' }: BrandsProps) => {
  return (
    <section className={`w-full bg-[#fafafa] my-[60px] rounded-[40px] ${className}`}>
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8 md:justify-between">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center justify-center transition-opacity duration-200 hover:opacity-70"
              title={brand.name}
            >
              {brand.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;