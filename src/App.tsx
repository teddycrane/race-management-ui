import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";
import Header from "./components/Header";

const HomePage = loadable(() => import("./components/Home"));

export const App = (): JSX.Element => {
  return (
    <div data-testid="home-app">
      <Header />
      <div>test content</div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
