import React from "react";
import MovieList from "./MovieList";
import "./index.css";
import Navbar from "./Navbar";
import { movies } from "./movieData";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount: 0,
    };
  }
  handleAddStars = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);
    if (movies[movieId].stars < 5) {
      movies[movieId].stars += 0.5;
    }
    this.setState({
      movies,
    });
  };
  handleDecStars = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);
    if (movies[movieId].stars > 0) {
      movies[movieId].stars -= 0.5;
    }
    this.setState({
      movies,
    });
  };
  handleToggleFav = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);

    movies[movieId].fav = !movies[movieId].fav;

    this.setState({
      movies,
    });
  };

  handleAddtocart = (movie) => {
    let { movies, cartCount } = this.state;
    const movieId = movies.indexOf(movie);

    movies[movieId].isIncart = !movies[movieId].isIncart;

    if (movies[movieId].isIncart) {
      cartCount = cartCount + 1;
    } else {
      cartCount -= 1;
    }

    this.setState({
      movies,
      cartCount,
    });
  };

  render() {
    const { movies, cartCount } = this.state;
    return (
      <>
        <Navbar cartCount={cartCount} />
        <MovieList
          movies={movies}
          onIncStars={this.handleAddStars}
          onDecStars={this.handleDecStars}
          onClickFav={this.handleToggleFav}
          onClickAddtocart={this.handleAddtocart}
        />
      </>
    );
  }
}
