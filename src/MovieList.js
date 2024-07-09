import { Component } from "react";
import Moviecard from "./Moviecard";
import { movies } from "./movieData";

class MovieList extends Component {
  render() {
    // const { title, plot, price, rating, stars, fav, isIncart, poster } =this.state.movies;
    const { movies, onIncStars, onDecStars, onClickFav, onClickAddtocart } =
      this.props;
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
}

export default MovieList;
