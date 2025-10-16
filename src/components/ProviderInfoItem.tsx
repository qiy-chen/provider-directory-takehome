import "./ProviderInfoItem.css";

export default function ProviderInfoItem({
  label,
  value,
  iconPath,
}: {
  label: string;
  value: string;
  iconPath?: string;
}) {
  return (
    <div className="ProviderInfoItemFrame">
      {iconPath && (
        <img className="ProviderInfoItemIcon" src={iconPath} alt="label" />
      )}
      <div className="ProviderInfoItemInformation">
        <div className="ProviderInfoItemLabel">{label}</div>
        <div className="ProviderInfoItemValue">{value}</div>
      </div>
    </div>
  );
}
