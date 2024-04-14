import React from "react";

const Drawer = ({ isOpen, onClose, meal }) => {
  if (!isOpen || !meal) return null;

  return (
    <div className="drawer-container">
      <div className="drawer-content">
        <button className="drawer-close" onClick={onClose}>
          Close
        </button>
        <img src={meal.imageSrc} alt="Meal" />
        <h2>{meal.title}</h2>
        <p>{meal.description}</p>
        <p>{meal.price}</p>
      </div>
    </div>
  );
};

export default Drawer;
