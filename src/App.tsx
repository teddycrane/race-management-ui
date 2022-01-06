import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";
import Header from "./components/Header";

const HomePage = loadable(() => import("./components/Home"));
const LoginPage = loadable(() => import("./components/Login"));

export const App = (): JSX.Element => {
  return (
    <div data-testid="home-app">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
