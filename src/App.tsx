import React from "react";
import "./App.css";
import { fetchProviders, fetchProvider } from "./api";
import ProvidersPage from "./pages/ProvidersPage";
import { PartialProvider } from "./types";

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

  return <ProvidersPage providers={providers} />;
}

export default App;
