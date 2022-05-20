/* eslint-disable array-callback-return */
import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const BeerContext = createContext();

export default function BeerContextProvider({ children }) {
  const [beers, setBeers] = useState([]);
  const [filteredBeers, setFilteredBeers] = useState([]);
  const [paginate, setPaginate] = useState(1);

  const handleNext = () => {
    setPaginate(paginate + 1);
  };

  const handlePrev = () => {
    if (paginate > 0) {
      setPaginate(paginate - 1);
    }
  };

  useEffect(() => {
    const getBeers = async () => {
      const res = await axios.get(`https://api.punkapi.com/v2/beers?page=${paginate}&per_page=7`);
      setBeers(res.data);
      setFilteredBeers(res.data);
    };

    getBeers();
  }, [paginate]);

  const onFilter = (inputValue) => {
    let filteredBeer = filteredBeers.filter((beer) => {
      if (beer.name.toLowerCase().includes(inputValue.toLowerCase())) {
        return beer;
      }
    });
    setBeers(filteredBeer);
  };

  const onSearch = (event) => {
    onFilter(event.target.value);
  };

  return <BeerContext.Provider value={{ beers, onFilter, onSearch, handleNext, handlePrev, paginate }}>{children}</BeerContext.Provider>;
}
