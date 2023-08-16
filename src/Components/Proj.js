import React from "react";
import "./Proj.css";
import pic5 from "../Pics/p5.webp";
import pic3 from "../Pics/p3.jpeg";
import pic7 from "../Pics/p7.jpeg";
import pic6 from "../Pics/p6.jpeg";

const Proj = () => {
  return (
    <div className="firstContainer">
      <h1>Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={pic6} alt="pics" />
          <div>
            <h2>Shopping Cart</h2>
            <p>Shopping cart using context API with useReducer Hook</p>
          </div>
          <div className="navs">
            <a href="https://github.com/camoqq/newCart">view code</a>
            <a href="https://camoqq.github.io/newCart/">view live</a>
          </div>
        </div>

        <div className="project-card">
          <img src={pic3} alt="pics" />
          <div>
            <h2>Weather</h2>
            <p>Weather app made with a custom hook</p>
          </div>
          <div className="navs">
            <a href="https://github.com/camoqq/weatherApp">view code</a>
            <a href="https://camoqq.github.io/weatherApp/">view live</a>
          </div>
        </div>

        <div className="project-card">
          <img src={pic7} alt="pics" />
          <div>
            <h2>Tic Tac Toe</h2>
            <p>Place 3 marks in a row to win the game</p>
          </div>
          <div className="navs">
            <a href="https://github.com/camoqq/tic-tac-toe">view code</a>
            <a href="https://camoqq.github.io/tic-tac-toe/">view live</a>
          </div>
        </div>

        <div className="project-card">
          <img src={pic5} alt="pics" />
          <div>
            <h2>Movies</h2>
            <p>Movies app with reducers</p>
          </div>
          <div className="navs">
            <a href="https://github.com/camoqq/movies">view code</a>
            <a href="https://camoqq.github.io/movies/">view live</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proj;
