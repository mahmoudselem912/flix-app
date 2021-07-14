import React from "react";
import { Card } from "react-bootstrap";
import ReadMore from "../utilites/readmore";

const DisplaySearch = ({ result }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        style={{ width: "300px", height: "300px" }}
        src={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
      />
      <Card.Body>
        <Card.Title style={{ color: "white" }}>
          {result.original_title}
        </Card.Title>
        <ReadMore style={{ color: "white" }}>{result.overview}</ReadMore>
      </Card.Body>
    </Card>
  );
};

export default DisplaySearch;
