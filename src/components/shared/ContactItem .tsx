import type { ReactNode } from 'react';

export interface ContactItem {
  id: number | string;
  icon: ReactNode;
  title: string;
  description: string;
}

interface ContactListProps {
  items: ContactItem[];
  className?: string;
}

export default function ContactList({ items, className = '' }: ContactListProps) {
  return (
    <div className={className}>
      {items.map((item) => (
        <div key={item.id} className="flex items-start gap-3">
          <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-secondary">
            {item.icon}
          </div>
          <div className="flex flex-col min-w-0">
            <p>{item.title}</p>
            <p className="text-sm sm:text-base font-semibold break-words">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}