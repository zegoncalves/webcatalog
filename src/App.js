import React from "react";
import BarraPesquisa from "./Componentes/BarraPesquisa";
import ListaFilmes from "./Componentes/ListaFilmes";

const API = 'INSERIRAPICODE';

class App extends React.Component {
  state = {
    search: "",
    results: [],
    currentPage: 1
  };

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API}&language=en-US&page=1`
    )
      .then(response => response.json())
      .then(results => this.setState({ results: results.results, totalPages: results.total_pages }));
  }

  handleChange = e => {
    this.setState({ search: e.target.value, currentPage: 1 }, this.updateMovies);
  };

  updateMovies() {
    const { currentPage, search } = this.state;

    return fetch(
      search !== '' ?
        `https://api.themoviedb.org/3/search/movie?api_key=${API}&query=${search}&language=en-US&page=${currentPage}`
        : `https://api.themoviedb.org/3/movie/top_rated?api_key=${API}&language=en-US&page=${currentPage}`
    )
      .then(response => response.json())
      .then(response => this.setState({ results: response.results, totalPages: response.total_pages }));
  }


  selecionarFilmeClick = (index) => {
    const { results } = this.state;

    if (index >= 0 && index <= results.length) {
      this.setState({ filmeSelecionado: results[index] });
    } else {
      this.setState({ filmeSelecionado: null });
    }
  }

  paginaAnterior() {
    const { currentPage } = this.state;

    if (currentPage > 1) {
      this.setState({ currentPage: currentPage - 1 }, this.updateMovies);
    }
  }

  paginaSeguinte() {
    const { currentPage, totalPages } = this.state;

    if (currentPage < totalPages) {
      this.setState({ currentPage: currentPage + 1 }, this.updateMovies);
    }
  }

  render() {
    const { search, results, filmeSelecionado } = this.state;

    return (
      <>
        <BarraPesquisa handleChange={this.handleChange} search={search} />
        <ListaFilmes listaFilmes={results} selecionarFilmeClick={this.selecionarFilmeClick} filmeSelecionado={filmeSelecionado} />
        <div className="text-center mb-5">
          <a href="#" className="mr-3 text-white" onClick={this.paginaAnterior.bind(this)}>{"<< Anterior"}</a>
          <a href="#" className="ml-3 text-white" onClick={this.paginaSeguinte.bind(this)}>{"Seguinte >>"}</a>
        </div>
      </>
    );
  }
}

export default App;
