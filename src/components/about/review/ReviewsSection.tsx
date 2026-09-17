/* =========================================================
   ReviewsSection.tsx
========================================================= */
import { useEffect, useRef, useState } from "react";
import ReviewCard from "./ReviewCard";
import { reviews } from "../../../data/reviews";

export default function ReviewsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const [isInitialized, setIsInitialized] = useState(false);

  /* =====================================================
     Scroll to a specific card index (centered)
  ===================================================== */
  const scrollToIndex = (index: number, smooth = true) => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.children[index] as HTMLElement;
    if (!card) return;

    const scrollLeft =
      card.offsetLeft - track.clientWidth / 2 + card.clientWidth / 2;

    track.scrollTo({ left: scrollLeft, behavior: smooth ? "smooth" : "auto" });
    setActiveIndex(index);
  };

  /* =====================================================
     Center card #1 on first mount (no animation)
  ===================================================== */
  useEffect(() => {
    if (isInitialized) return;

    // Wait one frame so layout is ready
    const raf = requestAnimationFrame(() => {
      scrollToIndex(1, false);
      setIsInitialized(true);
    });

    return () => cancelAnimationFrame(raf);
  }, [isInitialized]);

  /* =====================================================
     Autoplay
  ===================================================== */
  useEffect(() => {
    if (!isInitialized) return;

    const AUTOPLAY_INTERVAL = 3500;

    const interval = setInterval(() => {
      const next = (activeIndex + 1) % reviews.length;
      scrollToIndex(next);
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(interval);
  }, [activeIndex, isInitialized]);

  /* =====================================================
     Update active card on manual scroll
  ===================================================== */
  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;

    const center = track.scrollLeft + track.clientWidth / 2;

    let closest = 0;
    let minDistance = Infinity;

    Array.from(track.children).forEach((child, idx) => {
      const el = child as HTMLElement;
      const cardCenter = el.offsetLeft + el.clientWidth / 2;
      const distance = Math.abs(cardCenter - center);

      if (distance < minDistance) {
        minDistance = distance;
        closest = idx;
      }
    });

    if (closest !== activeIndex) setActiveIndex(closest);
  };

  return (
    <section className="container overflow-hidden">
      {/* Section Title */}
      <h2 className="mb-12 text-center">
        Reviews from our customers
      </h2>

      {/* Carousel Track */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="
          flex gap-[24px]
          overflow-x-auto
          scroll-smooth
          snap-x snap-mandatory
          px-[calc(50vw-190px)]
          py-8
          scrollbar-hide
        "
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {reviews.map((review, idx) => {
          const isActive = idx === activeIndex;

          return (
            <div
              key={review.id}
              onClick={() => scrollToIndex(idx)}
              className={`
                flex-shrink-0
                w-[416px]
                snap-center
                cursor-pointer
                transition-transform
                duration-500
                ease-out
                ${isActive ? "scale-105 z-10" : "scale-100"}
              `}
            >
              <ReviewCard review={review} />
            </div>
          );
        })}
      </div>
    </section>
  );
}