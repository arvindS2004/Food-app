import React, { useContext } from "react";
import "./Foodit.css";
import { assets } from "../assets/assets";
import { StoreContext } from "../pages/StoreContext";

const Foodit = ({ id, name, price, description, image }) => {

  const {cartItem,addtoCart,removefromCart} = useContext(StoreContext);

  return (
    <div className="foor-item">
      <div className="food-item-img-cont">
        <img className="food-item-img" src={image} alt="" />
      </div>
      <div className="food-item-info">
        <div className="food-item-name">
          <p>{name}</p>
          <img src={assets.star} alt="" />
        </div>
        <p className="food-desc">{description}</p>
        <div className="price">₹{price}</div>
        {!cartItem[id] ? (
          <div className="add" onClick={() => addtoCart(id)}>
            <button>Add ➕</button>
          </div>
        ) : (
          <div className="food-count">
            <div style={{backgroundColor:'tomato', borderRadius:'100%',padding:'4px'}} onClick={() => removefromCart(id)}>➖</div>
            <div>{cartItem[id]}</div>
            <div style={{backgroundColor:'rgba(47, 255, 0, 0.356)', borderRadius:'100%',padding:'4px'}} onClick={() => addtoCart(id)}>➕</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Foodit;
