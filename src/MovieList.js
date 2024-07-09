import { Component } from "react";
import Moviecard from "./Moviecard";
import { movies } from "./movieData";

function MovieList(props) {
  // const { title, plot, price, rating, stars, fav, isIncart, poster } =this.state.movies;
  const { movies, onIncStars, onDecStars, onClickFav, onClickAddtocart } =
    props;
  return (
    <div className="main">
      {movies.map((movie, index) => (
        <Moviecard
          movies={movie}
          // key={index}
          key={movie.id}
          onIncStars={onIncStars}
          onDecStars={onDecStars}
          onClickFav={onClickFav}
          onClickAddtocart={onClickAddtocart}
        />
      ))}
    </div>
  );
}

export default MovieList;
