import { useState } from "react";
import "./Card.scss";
import Trash from "../../../assets/trash.png";
import { Link, generatePath } from "react-router-dom";

const Card = ({ beer }) => {
  const [visibility, setVisibility] = useState(true);

  const handleChange = () => {
    setVisibility(false);
  };

  return (
    <>
      {visibility && (
        <figure className="c-card">
          <img className="c-card__trash" src={Trash} onClick={handleChange} alt="trash can" />
          <Link className="c-link" to={generatePath("/beers/:id", { id: beer.id })}>
            <img className="c-card__img" src={beer.image_url} alt={beer.name} />
            <div className="c-card__body">
              <figcaption className="c-card__name">{beer.name}</figcaption>
              <p className="c-card__tagline">{beer.tagline}</p>
              <p className="c-card__description">{beer.description}</p>
              <section className="c-card__properties">
                <div className="c-card__property">
                  <p className="c-card__properties__title">Alcohol</p>
                  <p className="c-card__properties__value">{beer.abv}%</p>
                </div>
                <div className="c-card__property">
                  <p className="c-card__properties__title">Bitterness</p>
                  <p className="c-card__properties__value">{beer.ibu}</p>
                </div>
                <div className="c-card__property">
                  <p className="c-card__properties__title">EBC</p>
                  <p className="c-card__properties__value">{beer.ebc}</p>
                </div>
                <div className="c-card__property">
                  <p className="c-card__properties__title">SRM</p>
                  <p className="c-card__properties__value">{beer.srm}</p>
                </div>
                <div className="c-card__property">
                  <p className="c-card__properties__title">PH</p>
                  <p className="c-card__properties__value">{beer.ph}</p>
                </div>
              </section>
            </div>
          </Link>
        </figure>
      )}
    </>
  );
};

export default Card;
