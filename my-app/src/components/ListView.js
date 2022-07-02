import React from "react";
// import PropTypes from "prop-types";
// import UserModel from "../models/UserModel";

export default function CardsView(props) {
  const { products } = props;
    

  function ShopCard(itemArray, index) { // функция отрисовки элемента

    const name = itemArray.name;
    const color = itemArray.color;
    const price = itemArray.price;

    return (
      <div className="ShopCard2" key={index}>
        <img src={itemArray.img} alt={itemArray.category} />
        <div className="card-title2">    
            <h3 className="element">{name}</h3>
            <div className="element2">{color}</div>
            </div>
        
        <div className="card-price2">
            <p >${price}</p>
            <button className="btn2"> ADD TO CARD</button>
        </div>
      </div>
    )
  };
  
  return ( // отрисовка всего отфтльтрованного массива элементов
    <div className="list_view">
          {products.map((itemArray, index) => ShopCard(itemArray, index))}
      </div>
  );
}
/*
ShopItemFunc.propTypes = {
  itemArray: PropTypes.arrayOf(UserModel).isRequired
}
*/