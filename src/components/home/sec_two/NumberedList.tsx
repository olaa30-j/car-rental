/* =========================================================
   Types
========================================================= */
export interface NumberedItemData {
  id: number;
  title: string;
  description: string;
}

interface NumberedListProps {
  items: NumberedItemData[];
  className?: string;
}

/* =========================================================
   Single Item
========================================================= */
function NumberedItem({ id, title, description }: NumberedItemData) {
  return (
    <div>
      {/* Content */}
      <div className="flex gap-4 items-center">
        {/* Number Badge */}
        <span
          className="
          px-[12.5px] py-[6.5px]
          rounded-full bg-primary
          text-white
        "
        >
          {id}
        </span>

        <h5>{title}</h5>
      </div>
      <p className="pt-[10px] leading-relaxed text-black/60">
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
}: NumberedListProps) {
  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      {items.map((item) => (
        <NumberedItem key={item.id} {...item} />
      ))}
    </div>
  );
}