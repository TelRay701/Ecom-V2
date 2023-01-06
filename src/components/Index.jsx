import React from "react";
import "./Nav.css";
import Homejs from "./home";

const Home = () => {
  return (
    //  About NGT
    <>
      <Homejs />
      <header className="head">
        <h2>
          Next Generation Tech is here to supply with quality desktops,
          monitors, and keyboards for all intermediate gamers.
        </h2>
        <p className="text">
          As a part of our efforts to ensure that our customers are prepared for
          any situation, we offer them quality setups that allow them to
          steamroll their competitors
        </p>
      </header>

      <section className="product">
        <h2 className="product-category">Gaming Desktop Computer's</h2>
        {/* <button className="pre-btn">
          <img src="images/arrow.png" alt="Left Arrow" />
        </button>
        <button className="nxt-btn">
          <img src="images/arrow.png" alt="Right Arrow" />
        </button> */}
        <div className="product-container">
          <div className="product-card">
            <div className="product-image">
              <img
                src="./images/asus-pc.png"
                className="product-cover"
                alt="Asus PC"
              />
              <button className="card-btn">Add To Cart</button>
            </div>
            <div className="product-info">
              <h2 className="product-brand">Asus - ROG Gaming Desktop</h2>
              <span className="price">$1,199.99</span>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img
                src="./images/cyberpower-pc.png"
                className="product-cover"
                alt="Cyberpower PC"
              />
              <button className="card-btn">Add To Cart</button>
            </div>
            <div className="product-info">
              <h2 className="product-brand">CyberpowerPC - Gaming Desktop</h2>
              <span className="price">$1,299.99</span>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img
                src="./images/ibuypower-pc.png"
                className="product-cover"
                alt="iBuyPower Y60 PC"
              />
              <button className="card-btn">Add To Cart</button>
            </div>
            <div className="product-info">
              <h2 className="product-brand">iBuyPower Y60 - Gaming Desktop</h2>
              <span className="price">$2,099.99</span>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img
                src="./images/nzxt-pc.png"
                className="product-cover"
                alt="NZXT PC"
              />
              <button className="card-btn">Add To Cart</button>
            </div>
            <div className="product-info">
              <h2 className="product-brand">NZXT - Elite Compact Desktop</h2>
              <span className="price">$159.99</span>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img
                src="./images/razer-pc.png"
                className="product-cover"
                alt="Razer PC"
              />
              <button className="card-btn">Add To Cart</button>
            </div>
            <div className="product-info">
              <h2 className="product-brand">Razer - Gaming Desktop</h2>
              <span className="price">$249.99</span>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img
                src="./images/lenovo-pc.png"
                className="product-cover"
                alt="Lenovo PC"
              />
              <button className="card-btn">Add To Cart</button>
            </div>
            <div className="product-info">
              <h2 className="product-brand">Lenovo - Gaming Desktop</h2>
              <span className="price">$1,399.99</span>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image">
              <img
                src="./images/hpomen-pc.png"
                className="product-cover"
                alt="HP Omen PC"
              />
              <button className="card-btn">Add To Cart</button>
            </div>
            <div className="product-info">
              <h2 className="product-brand">HP Omen - 25L Gaming Desktop</h2>
              <span className="price">$1,499.99</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
