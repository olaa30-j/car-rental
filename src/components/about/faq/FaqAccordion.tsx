import { useState } from "react";
import type { FaqItemData } from "../../../data/faqContent";

/* =========================================================
   Types
========================================================= */
interface FaqAccordionProps {
  items: FaqItemData[];
  className?: string;
  /** Allow multiple items open at once. Default: false (only one open) */
  allowMultiple?: boolean;
  /** Index of the item open by default. Default: 0 (first item) */
  defaultOpenId?: number | null;
}

/* =========================================================
   Single Accordion Item
========================================================= */
function FaqItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItemData;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-gray-300 rounded-2xl overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="
          w-full flex items-center justify-between gap-4
          px-6 py-5 text-left
          hover:bg-gray-50 transition-colors
        "
      >
        <h4 className="font-bold text-gray-900">
          {item.question}
        </h4>

        {/* Chevron icon — rotates when open */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`
            w-5 h-5 shrink-0 text-gray-700
            transition-transform duration-300
            ${isOpen ? "rotate-180" : "rotate-0"}
          `}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Answer — animated open/close */}
      <div
        className={`
          grid transition-all duration-300 ease-in-out
          ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
        `}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 leading-relaxed text-black/60">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   List
========================================================= */
export default function FaqAccordion({
  items,
  className = "",
  allowMultiple = false,
  defaultOpenId = 0,
}: FaqAccordionProps) {
  const [openIds, setOpenIds] = useState<number[]>(
    defaultOpenId !== null ? [defaultOpenId] : []
  );

  const toggle = (id: number) => {
    setOpenIds((prev) => {
      const isOpen = prev.includes(id);
      if (isOpen) return prev.filter((x) => x !== id);
      return allowMultiple ? [...prev, id] : [id];
    });
  };

  return (
    <div className={`flex flex-col gap-5 ${className}`}>
      {items.map((item) => (
        <FaqItem
          key={item.id}
          item={item}
          isOpen={openIds.includes(item.id)}
          onToggle={() => toggle(item.id)}
        />
      ))}
    </div>
  );
}