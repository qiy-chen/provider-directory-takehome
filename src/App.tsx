import React from "react";
import "./App.css";
import { fetchProviders, fetchProvider } from "./api";
import ProvidersPage from "./pages/ProvidersPage";
import { PartialProvider } from "./types";
import { Switch, Route } from "react-router-dom";
import ProviderDetails from "./pages/ProviderDetails";

function App() {
  // Samples of API requests
  const [providers, setProviders] = React.useState<PartialProvider[] | null>(
    null
  );
  React.useEffect(() => {
    fetchProviders().then((providers: PartialProvider[]) => {
      console.log(providers);
      setProviders([...providers]);
    });
    fetchProvider("1").then(console.log);
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
