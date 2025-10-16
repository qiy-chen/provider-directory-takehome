import Chip from "../components/Chip";
import "./ProvidersPage.css";
import { PartialProvider } from "../types";
import { useState } from "react";
import ProviderResultCard from "../components/ProviderResultCard";

const LOCATION_TO_ABBR: { [fullName: string]: string } = {
  Ontario: "ON",
  Quebec: "QC",
};

export default function ProvidersPage({
  providers,
}: {
  providers: PartialProvider[] | null;
}) {
  function getLocationsLabels(providers: PartialProvider[] | null) {
    const locations = new Set<string>();
    providers?.forEach(({ location }) => {
      const province = location.split(", ")[1];
      locations.add(province);
    });
    return Array.from(locations);
  }
  const locations = getLocationsLabels(providers);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const selectedProviders = providers?.filter(
    (provider) =>
      provider.location.split(", ")[1] === selectedLocation ||
      selectedLocation === null
  );
  return (
    <div className="ProvidersPage">
      <div className="ProvidersHeader">
        <div className="ProvidersTitle">Browse our providers</div>
        <div className="ProvidersSubtitle">Mental Wellness</div>
        <div className="ProvidersLocations">
          {locations.length > 0 &&
            locations.map((location) => (
              <Chip
                key={location}
                label={LOCATION_TO_ABBR[location]}
                selected={selectedLocation === location}
                onClick={() => {
                  if (selectedLocation === location) setSelectedLocation(null);
                  else setSelectedLocation(location);
                }}
              />
            ))}
        </div>
      </div>
      <div className="ProvidersDivider" />
      {providers === null ? (
        <div>Loading</div>
      ) : (
        <div className="ProvidersResultsFrame">
          <div className="ProvidersResults">
            <div className="ProvidersCount">
              <span className="ProvidersCountNumber">
                {selectedProviders!.length + " "}
              </span>
              providers {selectedLocation !== null && ` in ${selectedLocation}`}
            </div>
            <div className="ProvidersList">
              {selectedProviders!.map((provider) => (
                <div key={provider.id} className="ProviderCardWrapper">
                  <ProviderResultCard provider={provider} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
