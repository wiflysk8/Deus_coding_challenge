import React from "react";
import { Route, Routes } from "react-router-dom";
import BeerDetail from "../shared/components/BeerDetail/BeerDetail";
import Gallery from "../shared/components/Gallery/Gallery";

const RoutesFile = () => {
  return (
    <Routes>
      <Route path="/" element={<Gallery />} />;
      <Route path="/beers/:id" element={<BeerDetail />} />;
    </Routes>
  );
};

export default RoutesFile;
