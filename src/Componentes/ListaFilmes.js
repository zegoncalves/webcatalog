import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FichaFilme from "./FichaFilme";

export default function ListaFilmes(props) {
  const { listaFilmes, filmeSelecionado, selecionarFilmeClick } = props;

  if (!listaFilmes) {
    return (
      <Container>
        <Row>
          <Col>A carregar...</Col>
        </Row>
      </Container>
    );
  }

  const image_path = filmeSelecionado ? `https://image.tmdb.org/t/p/w500/${filmeSelecionado.poster_path}` : '';

  return (
    <Container className={"cartaz"}>
      <Row>
        {listaFilmes.map((filme, index) => {
          return (
            <Col className={"col-12 col-lg-2" + (index % 5 === 0 ? ' offset-1' : '')} key={'movie-' + index}>
              <FichaFilme
                key={index}
                title={filme.title}
                year={filme.release_date}
                overview={filme.overview}
                poster_path={filme.poster_path}
                vote_average={filme.vote_average}
                onClick={() => selecionarFilmeClick(index)}
              />
            </Col>
          );
        })}
      </Row>
      {filmeSelecionado && <>
        <div className="overlay" onClick={() => selecionarFilmeClick(-1)}></div>
        <div className="movie-description">
          <div className="d-flex">
            <img src={image_path} />
            <div>
              <h4 className="font-weight-bold text-uppercase mb-0 text-white w-75">{filmeSelecionado.title}</h4>
              <p className="text-muted">{filmeSelecionado.release_date.substring(0, 4)}</p>
              <p>{filmeSelecionado.overview}</p>
              <p>Rating: {filmeSelecionado.vote_average}</p>
            </div>
          </div>
          <a className="btn-close" onClick={() => selecionarFilmeClick(-1)}>X</a>
        </div></>}
    </Container>
  );
}