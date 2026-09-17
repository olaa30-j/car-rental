/* =========================================================
   PageHeader.tsx
========================================================= */
import { Link } from "react-router-dom";

/* =========================================================
   Types
========================================================= */
interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  breadcrumbs: Breadcrumb[];
}

/* =========================================================
   Component
========================================================= */
export default function PageHeader({ title, breadcrumbs }: PageHeaderProps) {
  return (
    <section className="container flex flex-col items-center justify-center py-16 text-center">
      {/* Title */}
      <h2>
        {title}
      </h2>

      {/* Breadcrumbs */}
      <nav
        aria-label="Breadcrumb"
        className="mt-5 flex items-center gap-2 text-sm"
      >
        {breadcrumbs.map((crumb, idx) => {
          const isLast = idx === breadcrumbs.length - 1;

          return (
            <div key={idx} className="flex items-center gap-2">
              {/* Separator (rendered before all but the first item) */}
              {idx > 0 && <span className="text-black/60">/</span>}

              {isLast || !crumb.href ? (
                <span className="text-black">{crumb.label}</span>
              ) : (
                <Link
                  to={crumb.href}
                  className="text-black/60 transition hover:text-primary"
                >
                  {crumb.label}
                </Link>
              )}
            </div>
          );
        })}
      </nav>
    </section>
  );
}