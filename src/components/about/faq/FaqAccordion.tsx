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
  name,
  defaultOpen,
}: {
  item: FaqItemData;
  name: string;
  defaultOpen: boolean;
}) {
  return (
    <details
      name={name}
      open={defaultOpen}
      className="group border border-gray-300 rounded-2xl overflow-hidden bg-white"
    >
      <summary
        className="
          w-full flex items-center justify-between gap-4
          px-6 py-5 text-left cursor-pointer list-none
          hover:bg-gray-50 group-open:bg-gray-50 transition-colors
          [&::-webkit-details-marker]:hidden
        "
      >
        <h4 className="font-bold text-gray-900">{item.question}</h4>

        {/* Chevron icon — rotates when open via group-open */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="
            w-5 h-5 shrink-0 text-gray-700
            transition-transform duration-300
            group-open:rotate-180
          "
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </summary>

      {/* Answer — animated open/close using grid trick + open: variant */}
      <div
        className="
          grid grid-rows-[0fr] opacity-0
          transition-all duration-300 ease-in-out
          group-open:grid-rows-[1fr] group-open:opacity-100
        "
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 leading-relaxed text-blur-text">
            {item.answer}
          </p>
        </div>
      </div>
    </details>
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
  // A shared `name` makes the <details> elements mutually exclusive
  // (only one can be open at a time) — native browser behavior.
  const groupName = allowMultiple ? undefined : "faq-accordion";

  return (
    <div className={`flex flex-col gap-5 ${className}`}>
      {items.map((item) => (
        <FaqItem
          key={item.id}
          item={item}
          name={groupName ?? `faq-${item.id}`}
          defaultOpen={defaultOpenId === item.id}
        />
      ))}
    </div>
  );
}