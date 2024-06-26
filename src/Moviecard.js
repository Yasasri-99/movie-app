import { Component } from "react";

class Moviecard extends Component {
  render() {
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
            <div className="title">Titanic</div>
            <div className="plot"> The adventurous sink of titanic ship </div>
            <div className="price">Rs. 199 /-</div>

            <div className="footer">
              <div className="rating">4.5</div>
              <div className="star-dis">
                <img
                  className="str-btn"
                  alt="decrease"
                  src="https://cdn-icons-png.flaticon.com/128/43/43625.png"
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
                />
                <span>0</span>
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
