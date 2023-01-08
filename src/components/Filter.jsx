import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Nav.css";

const PriceFilterButton = () => {
  useEffect(() => {
    getProducts();
  }, []);
  const [products, setProducts] = useState([]);

  const getProducts = (category) => {
    const url = category
      ? `http://localhost:3001/filtered${category}`
      : `http://localhost:3001/Products`;
    axios
      .get(url, {})
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {/* <div className="filter_btns">
        <button className="all_btn" onClick={() => getProducts()}>
          All
        </button>
        <button className="monitor_btn" onClick={() => getProducts("monitor")}>
          Monitors
        </button>
        <button className="desktop_btn" onClick={() => getProducts("desktop")}>
          Desktops
        </button>
        <button
          className="keyboard_btn"
          onClick={() => getProducts("keyboard")}
        >
          Keyboards
        </button>
      </div> */}
      {/* <div className="prod">
        {products.map((card) => (
          <div className="products" key={card.id}>
            <img src={card.image} alt={card.device} />
            <p className="device">{card.device}</p>
            <p className="description">{card.description}</p>
            <p className="price">${card.price}</p>
          </div>
        ))}
      </div> */}
    </>
  );
};

export default PriceFilterButton;
