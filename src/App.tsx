import React from "react";
import { fetchProviders } from "./api";
import ProvidersPage from "./pages/ProvidersPage";
import { PartialProvider } from "./types";
import { Switch, Route } from "react-router-dom";
import ProviderDetails from "./pages/ProviderDetails";

function App() {
  const [providers, setProviders] = React.useState<PartialProvider[] | null>(
    null
  );
  React.useEffect(() => {
    fetchProviders().then((providers: PartialProvider[]) => {
      // sort providers by availability , then by name
      providers.sort((a, b) => {
        if (a.availabilty === b.availabilty) {
          return a.name.localeCompare(b.name);
        }
        return a.availabilty === "tomorrow" ? -1 : 1;
      });
      setProviders([...providers]);
    });
  }, []);

  return (
    <Switch>
      <Route path="/provider/:id">
        <ProviderDetails />
      </Route>
      <Route path="/">
        <ProvidersPage providers={providers} />
      </Route>
    </Switch>
  );
}

export default App;
