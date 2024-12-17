/* eslint-disable react/prop-types */
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";

export default function FoodItem({ CategorizedFood }) {
  const { addToCart } = useContext(AppContext)
  const [count, setCount] = useState(1);

  function increaseCountHandler() {
    setCount(count + 1);
  }

  function decreaseCountHandler() {
    count > 1 ? setCount(count - 1) : 1;
  }

  function addToCartHandler(CategorizedFood) {
      addToCart(CategorizedFood)
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src={CategorizedFood.img}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{CategorizedFood.name}</h5>
        <p className="card-text">{CategorizedFood.description}</p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <button
            onClick={decreaseCountHandler}
            style={{
              border: "none",
              backgroundColor: "yellowgreen",
              padding: "0px 5px",
              height: "30px",
              width: "30px",
            }}
          >
            <strong>-</strong>
          </button>
          <p>{count}</p>
          <button
            onClick={increaseCountHandler}
            style={{
              border: "none",
              backgroundColor: "yellowgreen",
              padding: "0px 5px",
              height: "30px",
              width: "30px",
            }}
          >
            <strong>+</strong>
          </button>
          <strong>Total price : {count * 1000} Rs.</strong>

          <button 
            type="button"
            onClick={() => (addToCartHandler(CategorizedFood))}
            className="btn"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
