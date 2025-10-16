import { Link } from "react-router-dom";
import { BreadCrumbItem } from "../types";
import "./BreadCrumbs.css";
import { IoIosArrowForward } from "react-icons/io";

export default function BreadCrumbs({ items }: { items: BreadCrumbItem[] }) {
  return (
    <div className="BreadCrumbs">
      {items.map((item, index) => (
        <div key={index} className="BreadCrumbs">
          {item.href ? (
            <Link
              to={item.href}
              style={{ textDecoration: "none", color: "#6E7178" }}
            >
              {item.label}
            </Link>
          ) : (
            <div className="BreadCrumbsCurrent">{item.label}</div>
          )}
          {index < items.length - 1 && (
            <IoIosArrowForward style={{ color: "#C6C9CF" }} />
          )}
        </div>
      ))}
    </div>
  );
}
