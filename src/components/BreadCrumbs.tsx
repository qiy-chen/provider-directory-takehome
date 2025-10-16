import { BreadCrumbItem } from "../types";

export default function BreadCrumbs({ items }: { items: BreadCrumbItem[] }) {
  return (
    <nav className="BreadCrumb">
      {items.map((item, index) => (
        <span key={index} className="BreadCrumbItem">
          {item.href ? (
            <a href={item.href} className="BreadCrumbLink">
              {item.label}
            </a>
          ) : (
            <span className="BreadCrumbCurrent">{item.label}</span>
          )}
          {index < items.length - 1 && (
            <span className="BreadCrumbSeparator">/</span>
          )}
        </span>
      ))}
    </nav>
  );
}
