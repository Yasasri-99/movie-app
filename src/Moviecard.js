import { Component } from "react";

class Moviecard extends Component {
  constructor() {
    super();
    this.state = {
      title: "Titanic",
      plot: "The adventurous sink of titanic ship",
      price: "Rs 199 /-",
      rating: 8.8,
      stars: 0,
    };
    // this.addStars = this.addStars.bind(this);
  }
  addStars = () => {
    console.log("this : ", this);
    if (this.state.stars >= 5) {
      return;
    }
    //form1
    // this.setState({
    //   stars: this.state.stars + 0.5,
    // });
    //form2
    this.setState((prevState) => {
      return {
        stars: prevState.stars + 0.5,
      };
    });

    //this.state.stars += 0.5;
    // console.log("this.state.stars : ",this.state.stars);
  };
  decStars = () => {
    if (this.state.stars <= 0) {
      return;
    }
    this.setState({
      stars: this.state.stars - 0.5,
    });
  };

  render() {
    const { title, plot, price, rating, stars } = this.state;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img
              alt="Poster"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNRxxkYHTzu-T5l-jHg9UjEsMBjvZMXkAlXQ&s"
            />
          </div>

          <div className="right">
            <div className="title">{title}</div>
            <div className="plot"> {this.state.plot} </div>
            <div className="price">{price}</div>

            <div className="footer">
              <div className="rating">4.5</div>
              <div className="star-dis">
                <img
                  className="str-btn"
                  alt="decrease"
                  src="https://cdn-icons-png.flaticon.com/128/43/43625.png"
                  onClick={this.decStars.bind(this)}
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
                  onClick={this.addStars.bind(this)}
                />
                <span className="starCount">{stars}</span>
              </div>
              <button className="favourite-btn">Favoutite</button>
              <button className="cart-btn">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Moviecard;
