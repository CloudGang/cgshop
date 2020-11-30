import React from "react";
import { useHistory } from "react-router-dom";
import cloudgang from './data/cloudgang.png'

function Home() {
  const history = useHistory();
  const routeToShop = event => {
    setTimeout(() => {
      history.push("/item-list");
    }, 400);
  };

  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src={cloudgang}
        alt="Cloud Gang Clothing"
      />
      <button
        onClick={routeToShop}
        className="md-button shop-button"
      >
        Shop now!
      </button>
    </div>
  );
}

export default Home;
