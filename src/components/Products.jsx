import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Nav.css";

class Product extends React.Component {
  state = {
    products: [],
    type: "All",
  };

  //The code is asking for the products from a server.
  //The code then iterates through the data.
  // Fetch data from an API and then display it on the screen.
  // Using axios to make HTTP requests, get data back, and set state for your application.
  componentDidMount() {
    axios.get("/Products").then((res) => {
      const items = res.data;
      this.setState({ products: items });
    });
  }

  //Filter function
  myFilter(type) {
    return () => {
      this.setState({ type });
    };
  }

  render() {
    return (
      <>
        <h1 className="site-title">Desktop Products</h1>

        <div className="full-con">
          <div className="prod-container">
            <h4>Filter By Category: </h4>
            <button onClick={this.myFilter("All")}>All</button>
            <button onClick={this.myFilter("monitor")}>Monitors</button>
            <button onClick={this.myFilter("desktop")}>Desktops</button>
            <button onClick={this.myFilter("keyboard")}>Keyboards</button>
          </div>
          <div className="linkContain">
            <h4>Sort By Price: </h4>
            <Link className="navLink" to="/Products/LowtoHigh">
              Low to High
            </Link>
            <Link className="navLink" to="/Products/HightoLow">
              High to Low
            </Link>
            <Link className="navLink" to="/Products">
              Reset
            </Link>
          </div>
        </div>

        <div className="prod">
          {this.state.products

            .filter((record) => {
              if (this.state.type === "All") {
                return true;
              } else {
                return this.state.type === record.category;
              }
            })

            .map((card) => (
              <div className="products" key={card.id}>
                <img className="img" src={card.image} alt={card.device} />
                <p className="device">{card.device}</p>
                <p className="description">{card.description}</p>
                <p className="price">${card.price}</p>
              </div>
            ))}
        </div>
      </>
    );
  }
}

export default Product;
