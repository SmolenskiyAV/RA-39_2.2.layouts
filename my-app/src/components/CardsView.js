import React from "react";
// import PropTypes from "prop-types";
// import UserModel from "../models/UserModel";

export default function CardsView(props) {
  const { products } = props;
    

  function ShopCard(itemArray, index) { // функция отрисовки элементов в виде плиток

    const name = itemArray.name;
    const color = itemArray.color;
    const price = itemArray.price;

    return (
      <div className="ShopCard" key={index}>
        <img src={itemArray.img} alt={itemArray.category} />
        <div className="card-title">
          <h2>{name}</h2>
        </div>
        <div className="card-title">
          <p>{color}</p>
        </div>
        <div className="card-price">
          <p>${price}</p>
          <button className="btn"> ADD TO CARD</button>
        </div>
      </div>
    );
  };
  
  return ( // отрисовка всего массива элементов
    <div className="cards_view">
          {products.map((itemArray, index) => ShopCard(itemArray, index))}
      </div>
  );
}
/*
ShopItemFunc.propTypes = {
  itemArray: PropTypes.arrayOf(UserModel).isRequired
}
*/