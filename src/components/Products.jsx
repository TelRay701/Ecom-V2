import React from "react";
import axios from "axios";
import "./Nav.css";

class Product extends React.Component {
  state = {
    products: [],
  };

  constructor(props) {
    super(props);
    this.state = { products: [] };
  }
  componentDidMount() {
    axios.get("/Products").then((res) => {
      const products = res.data;
      this.setState({ products });
    });
  }

  render() {
    return (
      <>
        <h1 className="site-title">Desktop Products</h1>
        <div className="prod">
          {this.state.products.map((card) => {
            return (
              <div className="products">
                <img className="img" src={card.image} alt={card.device} />
                <p className="device">{card.device}</p>
                <p className="description">{card.description}</p>
                <p className="price">${card.price}</p>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Product;
