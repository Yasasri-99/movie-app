import { Component } from "react";

class Moviecard extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     title: "Titanic",
  //     plot: "The adventurous sink of titanic ship",
  //     price: "Rs 199 /-",
  //     rating: 8.8,
  //     stars: 0,
  //     fav: true,
  //     isIncart: true,
  //   };
  // this.addStars = this.addStars.bind(this);------
  // }
  // addStars = () => {
  //   if (this.state.stars >= 5) {
  //     return;
  //   }
  //   //form1----------
  //   // this.setState({---------
  //   //   stars: this.state.stars + 0.5,-------
  //   // });-------
  //   //form2-----
  //   this.setState((prevState) => {
  //     return {
  //       stars: prevState.stars + 0.5,
  //     };
  //   });

  //   //this.state.stars += 0.5;----------
  //   // console.log("this.state.stars : ",this.state.stars);-------
  // };
  // decStars = () => {
  //   if (this.state.stars <= 0) {
  //     return;
  //   }
  //   this.setState({
  //     stars: this.state.stars - 0.5,
  //   });
  // };

  // handleFav = () => {
  //   this.setState({
  //     fav: !this.state.fav,
  //   });
  // };

  // handleAddToCart = () => {
  //   this.setState({
  //     isIncart: !this.state.isIncart,
  //   });
  // };
  render() {
    const { movies, onIncStars, onClickFav, onClickAddtocart, onDecStars } =
      this.props;
    const { title, plot, poster, price, rating, stars, fav, isIncart } =
      this.props.movies;

    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img alt="Poster" src={poster} />
          </div>

          <div className="right">
            <div className="title">{title}</div>
            <div className="plot"> {plot} </div>
            <div className="price">{price}</div>

            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  className="str-btn"
                  alt="decrease"
                  src="https://cdn-icons-png.flaticon.com/128/43/43625.png"
                  // onClick={this.decStars.bind(this)}
                  onClick={() => onDecStars(movies)}
                />
                <img
                  alt="star"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                  className="stars"
                />
                <img
                  className="str-btn"
                  alt="increase"
                  src="https://cdn-icons-png.flaticon.com/128/748/748113.png"
                  // onClick={this.addStars.bind(this)}
                  onClick={() => onIncStars(movies)}
                />
                <span className="starCount">{stars}</span>
              </div>

              {/* {fav ? (
                <button className="unfavourite-btn" onClick={this.handleFav}>
                  Unfavoutite
                </button>
              ) : (
                <button className="favourite-btn" onClick={this.handleFav}>
                  Favoutite
                </button>
              )} */}
              <button
                className={fav ? "unfavourite-btn" : "favourite-btn"}
                // onClick={this.handleFav}
                onClick={() => onClickFav(movies)}
              >
                {fav ? "Unfavoutite" : "Favoutite"}
              </button>

              <button
                className={isIncart ? "unfavourite-btn" : "cart-btn"}
                // onClick={this.handleAddToCart}
                onClick={() => onClickAddtocart(movies)}
              >
                {isIncart ? "Remove from cart" : "Add to cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Moviecard;
