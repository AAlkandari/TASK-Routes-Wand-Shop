import React from "react";
import { useParams } from "react-router-dom";
import wands from "../wands";

function Details() {
  const wandsaSlug = useParams().wandsaSlug;

  const wandsaData = wands.find((e) => e.slug === wandsaSlug);
  return (
    <div>
      <p>{wandsaData.core}</p>
      <p>{wandsaData.length}</p>
      <p>{wandsaData.wood}</p>
      <img className="card" src={wandsaData.imageUrl} />
    </div>
  );
}

export default Details;