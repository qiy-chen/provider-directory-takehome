export default function ProviderInfoItem({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="ProviderInfoFrame">
      {icon && <div className="ProviderInfoIcon">{icon}</div>}
      <div className="ProviderInformation">
        <div className="ProviderInfoLabel">{label}</div>
        <div className="ProviderInfoValue">{value}</div>
      </div>
    </div>
  );
}
