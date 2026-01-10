import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems.jsx";
import ErrorMessage from "./components/ErrorMessage.jsx";

function App() {
  let foodItems = [
    "Vegetables",
    "Protein without meat",
    "Vitamin C from fruits",
    "Mustard oil for cooking",
    "Lemon water in the morning",
    "Black cumin seeds",
    "Flaxseeds, chia seeds, pumpkin seeds",
    "Amla with hot water",
    "Oats, quinoa or brown rice",
    "Nuts and dry fruits",
  ];

  return (
    <>
      <h1>Healthy Food</h1>

      <FoodItems foodItems={foodItems} />
      <ErrorMessage foodItems={foodItems} />
    </>
  );
}

export default App;
