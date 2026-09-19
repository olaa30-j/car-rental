/* =========================================================
   Types
========================================================= */
export interface NumberedItemData {
  id: number;
  title?: string;
  description: string;
}

type ListVariant = "number" | "check";

interface NumberedListProps {
  items: NumberedItemData[];
  className?: string;
  variant?: ListVariant;
}

/* =========================================================
   Badge (Number or Check)
========================================================= */
function ItemBadge({ id, variant = "number" }: { id: number; variant: ListVariant }) {
  const baseClasses = `
    flex items-center justify-center
    shrink-0
    rounded-full bg-primary
    text-white
  `;

  if (variant === "check") {
    return (
      <span className={`${baseClasses} w-9 h-9`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
    );
  }

  return (
    <span className={`${baseClasses} px-[12.5px] py-[6.5px]`}>
      {id}
    </span>
  );
}

/* =========================================================
   Single Item
========================================================= */
function NumberedItem({
  id,
  title,
  description,
  variant,
}: NumberedItemData & { variant: ListVariant }) {
  // ---- No title → badge sits next to the description ----
  if (!title) {
    return (
      <div className="flex gap-4">
        <ItemBadge id={id} variant={variant} />
        <p className="leading-relaxed text-blur-text">{description}</p>
      </div>
    );
  }

  // ---- Has title → badge + title on top, description below ----
  return (
    <div>
      <div className="flex gap-4 items-center">
        <ItemBadge id={id} variant={variant} />
        <h5>{title}</h5>
      </div>
      <p className="pt-[10px] leading-relaxed text-blur-text">
        {description}
      </p>
    </div>
  );
}

/* =========================================================
   List
========================================================= */
export default function NumberedList({
  items,
  className = "",
  variant = "number",
}: NumberedListProps) {
  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      {items.map((item) => (
        <NumberedItem key={item.id} {...item} variant={variant} />
      ))}
    </div>
  );
}