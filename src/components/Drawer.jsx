import React, { useState } from "react";
import { Button, Drawer } from "antd";

function Drawer({ isOpen, onClose, meal }) {
  const [visible, setVisible] = useState(false);
  if (!isOpen || !meal) return null;

  return (
    <Drawer
      className="drawer-container"
      visible={visible}
      onClose={() => setVisible(false)}
    >
      <div className="drawer-content">
        <button className="drawer-close" onClick={onClose}>
          Close
        </button>
        <img src={meal.imageSrc} alt="Meal" />
        <h2>{meal.title}</h2>
        <p>{meal.description}</p>
        <p>{meal.price}</p>
      </div>
    </Drawer>
  );
}

export default Drawer;
