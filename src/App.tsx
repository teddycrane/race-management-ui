import React from "react";
import { Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";

const HomePage = loadable(() => import("./components/Home"));

export const App = (): JSX.Element => {
  return (
    <div data-testid="home-app">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
