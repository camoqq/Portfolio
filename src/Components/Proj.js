import React from "react";
import "./Proj.css";
import pic5 from "../Pics/p5.webp";
import pic1 from "../Pics/p1.png";
import pic7 from "../Pics/p7.jpeg";
import pic6 from "../Pics/mern4.jpg";
import pic9 from "../Pics/p9.jpeg";
import pic2 from "../Pics/countries.jpeg";

const Proj = () => {
  return (
    <div className="firstContainer">
      <div className="project-container">
        <div className="project-card">
          <img src={pic6} alt="pics" />
          <div>
            <h2>Shopping Cart</h2>
            <p>Shopping cart using the MERN stack</p>
          </div>
          <div className="navs">
            <a href="https://github.com/camoqq/mern">view code</a>
            <a href="https://mern-o0ir.onrender.com/">view live</a>
          </div>
        </div>

        <div className="project-card">
          <img src={pic1} alt="pics" />
          <div>
            <h2>Medical Dashboard</h2>
            <p>Dashboard made with Next.js</p>
          </div>
          <div className="navs">
            <a href="https://github.com/camoqq/medical_dashboard">view code</a>
            <a href="https://medical-dashboard-mocha.vercel.app/">view live</a>
          </div>
        </div>

        <div className="project-card">
          <img src={pic9} alt="pics" />
          <div>
            <h2>Car Store</h2>
            <p>App made with Typescript and Redux.</p>
          </div>
          <div className="navs">
            <a href="https://github.com/camoqq/carStore">view code</a>
            <a href="https://car-store-zeta.vercel.app/">view live</a>
          </div>
        </div>
        <div className="project-card">
          <img src={pic2} alt="pics" />
          <div>
            <h2>Countries </h2>
            <p>App made with Typescript.</p>
          </div>
          <div className="navs">
            <a href="https://github.com/camoqq/countries">view code</a>
            <a href="https://countries-lovat-rho.vercel.app/">view live</a>
          </div>
        </div>

        <div className="project-card">
          <img src={pic7} alt="pics" />
          <div>
            <h2>Dice Tic Tac Toe</h2>
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
