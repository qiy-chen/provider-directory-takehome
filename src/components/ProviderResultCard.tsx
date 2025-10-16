import { PartialProvider } from "../types";
import "./ProviderResultCard.css";

const AVAILABILITY_TO_LABEL: { [fullName: string]: string } = {
  tomorrow: "Available tomorrow",
  "next-week": "Available in the next week",
};

export default function ProviderResultCard({
  provider,
}: {
  provider: PartialProvider;
}) {
  return (
    <div className="ProviderResultCard">
      <div className="ProviderHeader">
        {provider.avatarUrl ? (
          <img
            className="ProviderAvatar"
            src={provider.avatarUrl}
            alt={`${provider.name}'s avatar`}
          />
        ) : (
          <div className="ProviderAvatarPlaceholder" />
        )}
        <div className="ProviderInfo">
          <div className="ProviderName">{provider.name}</div>
          <div className="ProviderTitle">{provider.title}</div>
        </div>
      </div>
      <div className="ProviderBio">{provider.bio}</div>
      <div className="ProviderAvailability">
        {AVAILABILITY_TO_LABEL[provider.availabilty]}
      </div>
    </div>
  );
}
