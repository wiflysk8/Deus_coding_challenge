/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { BeerContext } from "../../contexts/BeerContext";
import "./Gallery.scss";
import Search from "../../../assets/lupa.png";
import Card from "../Card/Card";
import Nav from "../Nav/Nav";

const Gallery = () => {
  const { beers, onSearch, handleNext, handlePrev, paginate } = useContext(BeerContext);

  return (
    <>
      <Nav />
      <section className="c-gallery">
        <img src={Search} alt="lupa" className="c-gallery__search" />
        <input className="c-gallery__input" type="text" onChange={onSearch} placeholder="Search for your favourite beer..." />

        {beers.map((beer) => beer.image_url !== "https://images.punkapi.com/v2/keg.png" && beer.name !== "Edge" && <Card key={beer.id} beer={beer} />)}
        <div className="c-gallery__btns">
          <a className="fancy" href="#" onClick={handlePrev}>
            <span className="top-key"></span>
            <span className="text">Prev Page...</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
          </a>
          <span className="c-gallery__btns__paginate">{paginate}</span>
          <a className="fancy" href="#" onClick={handleNext}>
            <span className="top-key"></span>
            <span className="text">Next Page...</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
          </a>
        </div>
      </section>
    </>
  );
};

export default Gallery;
