import React from "react";

import { Card, Button } from "react-bootstrap";

export default function FichaFilme(props) {
  const { title, year, overview, poster_path, vote_average, onClick } = props;

  const image_path = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <Card className="movie-card border-0 mb-4" onClick={onClick}>
      <Card.Img variant="top" src={image_path} />
      <Card.Title className="mt-2">
        <p className="font-weight-bold text-uppercase mb-0 text-white">{title}</p>
        <span className="text-muted">{year.substring(0, 4)}</span>
      </Card.Title>
    </Card>
  );
}