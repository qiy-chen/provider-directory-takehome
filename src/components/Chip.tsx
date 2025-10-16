import "./Chip.css";
import { FaLocationDot } from "react-icons/fa6";

export default function Chip({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected?: boolean;
  onClick: () => void;
}) {
  return (
    <div className={`Chip${selected ? " selected" : ""}`} onClick={onClick}>
      <FaLocationDot style={{ marginRight: 5, color: "#6277F0" }} />
      {label}
    </div>
  );
}
