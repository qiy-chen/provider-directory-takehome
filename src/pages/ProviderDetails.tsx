import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProvider } from "../api";
import { Provider } from "../types";
import ProviderInfoItem from "../components/ProviderInfoItem";
import { getFullTitle, getProviderProfession } from "../utils";
import BreadCrumbs from "../components/BreadCrumbs";
import "./ProviderDetails.css";

export default function ProviderDetails() {
  const { id } = useParams<{ id: string }>();
  const [provider, setProvider] = useState<Provider | null>(null);
  const lenghtyThreshold = 300;
  const [bioExpanded, setBioExpanded] = useState(false);

  useEffect(() => {
    fetchProvider(id).then((provider) => {
      setProvider(provider);
      setBioExpanded(provider.bio.length <= lenghtyThreshold);
    });
  }, [id]);
  return (
    <>
      {provider === null ? (
        <div>Loading</div>
      ) : (
        <div className="ProviderDetailsFrame">
          <div className="ProviderDetailsContainer">
            <BreadCrumbs
              items={[
                { label: "Providers", href: "/" },
                { label: getFullTitle(provider.name, provider.title) },
              ]}
            />
            <div className="ProviderDetails">
              {provider.avatarUrl ? (
                <img
                  className="ProviderAvatarLarge"
                  src={provider.avatarUrl}
                  alt={`${provider.name}'s avatar`}
                />
              ) : (
                <div className="ProviderAvatarPlaceholderLarge" />
              )}
              <div className="ProviderInfo">
                <div className="ProviderName">
                  {getFullTitle(provider.name, provider.title)}
                </div>
                <div className="ProviderTitle">
                  {getProviderProfession(provider.title)}
                </div>
                <div className="ProviderBio">
                  {provider.bio.slice(
                    0,
                    bioExpanded ? undefined : lenghtyThreshold
                  ) +
                    (bioExpanded || provider.bio.length <= lenghtyThreshold
                      ? ""
                      : "...")}
                </div>
                {provider.bio.length > 300 && (
                  <div
                    className="ProviderBioToggle"
                    onClick={() => setBioExpanded(!bioExpanded)}
                  >
                    {bioExpanded ? "Read less" : "Read more"}
                  </div>
                )}
                <div className="ProviderDivider" />
                <ProviderInfoItem
                  label="Location"
                  value={provider.location}
                  icon={null}
                />
                <ProviderInfoItem
                  label="Education"
                  value={provider.education}
                  icon={null}
                />
                <ProviderInfoItem
                  label="Languages"
                  value={provider.languages.join(", ")}
                  icon={null}
                />
                <div className="ProviderBookButton">Book with us</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
