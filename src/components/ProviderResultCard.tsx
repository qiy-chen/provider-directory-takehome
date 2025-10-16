import { Link } from "react-router-dom";
import { PartialProvider } from "../types";
import "./ProviderResultCard.css";
import { getFullTitle, getProviderProfession } from "../utils";

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
    <Link
      to={`/provider/${provider.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
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
            <div className="ProviderName">
              {getFullTitle(provider.name, provider.title)}
            </div>
            <div className="ProviderTitle">
              {getProviderProfession(provider.title)}
            </div>
          </div>
        </div>
        <div className="ProviderBio">{provider.bio}</div>
        <div className="ProviderAvailability">
          {AVAILABILITY_TO_LABEL[provider.availabilty]}
        </div>
      </div>
    </Link>
  );
}
