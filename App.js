import React from "react";
import Routes from "./src/routes/index";
import { DataProvider } from "./src/hooks/useData";

export default function App() {
  return (
    <DataProvider>
      <Routes />
    </DataProvider>
  );
}
