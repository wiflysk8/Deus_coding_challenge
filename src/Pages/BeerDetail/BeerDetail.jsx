import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./BeerDetail.scss";

const BeerDetail = () => {
  const url = "https://api.punkapi.com/v2/beers";
  const [beerDetail, setBeerDetail] = useState();
  let { id } = useParams("id");

  useEffect(() => {
    const getBeer = async () => {
      const res = await axios.get(`${url}/${id}`);
      setBeerDetail(res.data[0]);
      console.log(res.data);
    };

    getBeer();
  }, [id]);

  return (
    beerDetail && (
      <section className="c-beerDetail">
        <h1 className="c-beerDetail__name">{beerDetail.name}</h1>
        <img className="c-beerDetail__img" src={beerDetail.image_url} alt="" />
        <h3>Food pairing:</h3>
        <div className="c-beerDetail__food">
          {beerDetail.food_pairing.map((pairing) => (
            <p className="c-beerDetail__description">{pairing}</p>
          ))}
        </div>
        <Link to="/">
          <button class="cta">
            <span class="hover-underline-animation"> Go to Gallery </span>
            <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
              <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
            </svg>
          </button>
        </Link>
      </section>
    )
  );
};

export default BeerDetail;
