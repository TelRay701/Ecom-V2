import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Nav.css";

export default class Productlist extends React.Component {
  state = {
    products: [],
    type: "All",
  };

  //UseState is a react hook that lets you set some state to react component.

  componentDidMount() {
    axios.get("/Products/LowtoHigh").then((res) => {
      const products = res.data;
      this.setState({ products: res.data });
    });
  }

  myFilter(type) {
    return () => {
      this.setState({ type });
    };
  }

  render() {
    return (
      <>
        <h1 className="site-title">Desktop Products</h1>

        <div className="product-container">
          <div id="filter-container"></div>
          <h4>Filter By Category: </h4>
          <button onClick={this.myFilter("All")}>All</button>
          <button onClick={this.myFilter("monitor")}>Monitors</button>
          <button onClick={this.myFilter("desktop")}>Desktops</button>
          <button onClick={this.myFilter("keyboard")}>Keyboards</button>
          <h4>Sort By Price: </h4>
          <Link to="/Products/LowtoHigh">Low to High</Link>
          <Link to="/Products/HightoLow">High to Low</Link>
          <Link to="/Products">Reset</Link>
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
