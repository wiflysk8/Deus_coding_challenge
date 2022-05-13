import React from "react";
import { Route, Routes } from "react-router-dom";
import BeerDetail from "../shared/components/BeerDetail/BeerDetail";
import Gallery from "../shared/components/Gallery/Gallery";
import PostBeer from "../shared/components/PostBeer/PostBeer";

const RoutesFile = () => {
  return (
    <Routes>
      <Route path="/" element={<Gallery />} />;
      <Route path="/beers/:id" element={<BeerDetail />} />;
      <Route path="/create-beer" element={<PostBeer />} />;
    </Routes>
  );
};

export default RoutesFile;
