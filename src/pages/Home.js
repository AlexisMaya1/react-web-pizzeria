import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Pizeria </h1>
        <p> La mejor pizzeria de todas </p>
        <Link to="/menu">
          <button> Ordena ahora </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
