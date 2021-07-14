import React from "react";
import { Card } from "react-bootstrap";
import ReadMore from "../utilites/readmore";

const PopularShows = ({ show }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        style={{ width: "300px", height: "300px" }}
        src={`https://image.tmdb.org/t/p/original/${show.poster_path}`}
      />
      <Card.Body>
        <Card.Title style={{ color: "white" }}>{show.original_name}</Card.Title>
        <ReadMore style={{ color: "white" }}>{show.overview}</ReadMore>
      </Card.Body>
    </Card>
  );
};

export default PopularShows;
