import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProvider } from "../api";
import { Provider } from "../types";
import ProviderInfoItem from "../components/ProviderInfoItem";
import { getFullTitle, getProviderProfession } from "../utils";
import BreadCrumbs from "../components/BreadCrumbs";
import "./ProviderDetails.css";
import Loading from "../components/Loading";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { PLACEHOLDER_AVATAR_URL } from "../constants";

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
    <div className="ProviderDetailsFrame">
      {provider === null ? (
        <Loading />
      ) : (
        <div className="ProviderDetailsContainer">
          <BreadCrumbs
            items={[
              { label: "Mental Wellness", href: "/" },
              { label: getFullTitle(provider.name, provider.title) },
            ]}
          />
          <div className="ProviderDetails">
            <img
              className="ProviderAvatarLarge"
              src={
                provider.avatarUrl === ""
                  ? PLACEHOLDER_AVATAR_URL
                  : provider.avatarUrl
              }
              alt={`${provider.name}'s avatar`}
            />
            <div className="ProviderInfoFrame">
              <div className="ProviderInfo">
                <div className="ProviderNameTitle">
                  <div className="ProviderName">
                    {getFullTitle(provider.name, provider.title)}
                  </div>
                  <div className="ProviderTitle">
                    {getProviderProfession(provider.title)}
                  </div>
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
                    {bioExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </div>
                )}
              </div>
              <div className="ProviderInfo">
                <ProviderInfoItem
                  label="Location"
                  value={provider.location}
                  iconPath={"/icons/location.png"}
                />
                <ProviderInfoItem
                  label="Education"
                  value={provider.education}
                  iconPath={"/icons/education.png"}
                />
                <ProviderInfoItem
                  label="Languages"
                  value={provider.languages.join(", ")}
                  iconPath={"/icons/language.png"}
                />
                <div className="ProviderBookButton">Book with us</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
