import { Route, Routes } from "react-router-dom";
import BeerDetail from "../Pages/BeerDetail/BeerDetail";
import Gallery from "../Pages/Gallery/Gallery";
import PostBeer from "../Pages/PostBeer/PostBeer";

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
