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
      <div className="CardProviderResultCard">
        <div className="CardProviderHeader">
          {provider.avatarUrl ? (
            <img
              className="CardProviderAvatar"
              src={provider.avatarUrl}
              alt={`${provider.name}'s avatar`}
            />
          ) : (
            <div className="CardProviderAvatarPlaceholder" />
          )}
          <div className="CardProviderInfo">
            <div className="CardProviderName">
              {getFullTitle(provider.name, provider.title)}
            </div>
            <div className="CardProviderTitle">
              {getProviderProfession(provider.title)}
            </div>
          </div>
        </div>
        <div className="CardProviderBio">{provider.bio}</div>
        <div className="CardProviderAvailability">
          {AVAILABILITY_TO_LABEL[provider.availabilty]}
        </div>
      </div>
    </Link>
  );
}
