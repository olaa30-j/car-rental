/* =========================================================
   ReviewCard.tsx
========================================================= */
import { type Review } from "../../../data/reviews";

/* =========================================================
   Types
========================================================= */
interface ReviewCardProps {
  review: Review;
}

/* =========================================================
   Component
========================================================= */
export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article
      className="
        flex flex-col
        w-full
        overflow-hidden
        rounded-[var(--border-radius)]
        bg-[#FAFAFA]
        mx-auto
      "
    >
      {/* =====================================================
          Top Section: Quote Icon + Review Text
      ===================================================== */}
      <div className="flex flex-col items-start px-[36px] pt-[52px] pb-[24px] text-center min-h-[256px]">
        {/* Quote Icon */}
        <img
          src={review.quoteIcon}
          alt="Quote"
          className="h-[32px] w-[32px] object-contain"
        />

        {/* Review Text */}
        <p className="mt-6 text-[15px] leading-relaxed text-black/80">
          {review.text}
        </p>
      </div>

      {/* =====================================================
          Bottom Section: Purple Panel with Avatar + Info
      ===================================================== */}
      <div className="relative mt-auto bg-primary pt-[50px] pb-[24px] text-center">
        {/* Avatar (overlaps the two sections) */}
        <div className="absolute -top-[35px] left-1/2 -translate-x-1/2">
          <img
            src={review.avatar}
            alt={review.name}
            className="
              h-[70px] w-[70px]
              rounded-full
              object-cover
              border-4 border-[#FAFAFA]
            "
          />
        </div>

        {/* Company */}
        <p className="text-[13px] text-white/80">{review.company}</p>

        {/* Name */}
        <h6 className="mt-1 font-semibold text-white">{review.name}</h6>
      </div>
    </article>
  );
}