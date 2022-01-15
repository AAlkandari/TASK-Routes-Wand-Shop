import React from "react";
import { Link } from "react-router-dom";
import wands from "../wands";
import Details from "./Details";

function Wandsa({ wandsaData }) {
  return (
    <div className="container">
      <p>{wandsaData.core}</p>

      <Link to={`/WandsList/${wandsaData.slug}`}>
        <img className="card" src={wandsaData.imageUrl} />{" "}
      </Link>
    </div>
  );
}

export default Wandsa;