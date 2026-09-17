/* =========================================================
   VideoPlayer.tsx
========================================================= */
import { useState } from "react";

/* =========================================================
   Types
========================================================= */
interface VideoPlayerProps {
  videoId: string;
  poster: string;
  className?: string;
}

/* =========================================================
   Component
========================================================= */
export default function VideoPlayer({
  videoId,
  poster,
  className = "",
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className={`
        relative
        max-w-6xl
        h-[600px]
        aspect-video
        overflow-hidden
        rounded-[var(--border-radius)]
        bg-gray-200
        mx-auto
        group
        cursor-pointer
        ${className}
      `}
      onClick={() => !isPlaying && setIsPlaying(true)}
    >
      {isPlaying ? (
        /* =====================================================
           Playing: YouTube iframe
        ===================================================== */
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&rel=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        /* =====================================================
           Idle: Blurred poster + Play button
        ===================================================== */
        <>
          {/* Poster — blurred */}
          <img
            src={poster}
            alt="Video preview"
            className="
              absolute inset-0
              h-full w-full
              object-cover
              blur-[6px]
              scale-110
              transition-transform duration-500
              group-hover:scale-[1.15]
            "
          />

          {/* Optional dark tint for better button contrast */}
          <div className="absolute inset-0 bg-black/10" />

          {/* Play Button Overlay */}
          <button
            aria-label="Play video"
            className="
              absolute inset-0
              flex items-center justify-center
            "
          >
            <span
              className="
                flex h-[64px] w-[64px]
                items-center justify-center
                rounded-full
                bg-primary
                shadow-lg
                transition-transform
                duration-300
                group-hover:scale-110
              "
            >
              {/* Play Triangle */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="h-10 w-10"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        </>
      )}
    </div>
  );
}