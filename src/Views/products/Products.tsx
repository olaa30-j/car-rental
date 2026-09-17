// src/Views/products/Products.tsx
import { useEffect, useMemo, useRef, useState } from 'react';
import { cars } from '../../data/cars';
import CarCard from '../../components/shared/CarCard/CarCard';
import LoadingSpinner from '../LoadingSpinner';
import Tabs from '../../components/products/Tabs';
import { carTabs } from '../../data/carTabs';
import Brands from '../../components/products/Brands';
import { brands } from '../../data/brands';

const PAGE_SIZE = 9;
const LOAD_DELAY = 800; // ms — fake network delay

const Products = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const loaderRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Filter cars by active tab
  const filteredCars = useMemo(() => {
    if (activeTab === 'all') return cars;
    return cars.filter(
      (car) => car.category.toLowerCase() === activeTab.toLowerCase()
    );
  }, [activeTab]);

  const visibleCars = filteredCars.slice(0, visibleCount);
  const hasMore = visibleCount < filteredCars.length;

  // Reset pagination when tab changes
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
    setIsLoadingMore(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, [activeTab]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Infinite scroll with delay
  useEffect(() => {
    const el = loaderRef.current;
    if (!el || !hasMore || isLoadingMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoadingMore) {
          setIsLoadingMore(true);

          timeoutRef.current = setTimeout(() => {
            setVisibleCount((prev) =>
              Math.min(prev + PAGE_SIZE, filteredCars.length)
            );
            setIsLoadingMore(false);
          }, LOAD_DELAY);
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasMore, isLoadingMore, activeTab, filteredCars.length]);

  return (
    <section className="container py-10">
      <h2 className="text-center text-2xl font-bold mb-6">
        Select a vehicle group
      </h2>

      {/* Reusable Tabs */}
      <div className="flex justify-center mb-10">
        <Tabs
          tabs={carTabs}
          activeTab={activeTab}
          onChange={setActiveTab}
        />
      </div>

      {/* Car Grid */}
      {visibleCars.length === 0 ? (
        <p className="text-center text-gray-500 py-10">
          No cars found in this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleCars.map((car) => (
            <CarCard
              key={car.id}
              image={car.image}
              name={car.title}
              category={car.category}
              price={car.price}
              features={car.features}
            />
          ))}
        </div>
      )}

      {/* Infinite scroll trigger */}
      {hasMore && (
        <div ref={loaderRef} className="flex justify-center py-10">
          {isLoadingMore ? (
            <LoadingSpinner />
          ) : (
            <div className="h-10" /> // placeholder to keep layout stable
          )}
        </div>
      )}

      <div>
        <Brands brands={brands} />
      </div>
    </section>
  );
};

export default Products;