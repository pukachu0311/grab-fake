import Navbar from "./Header";
import "./Design.css";
import React, { useState } from "react";

const Drawer = ({ isOpen, onClose, meal }) => {
  if (!isOpen) return null;

  return (
    <div className="drawer-container">
      <div className="drawer-content">
        <button className="drawer-close" onClick={onClose}>
          Close
        </button>
        <h2>{meal.title}</h2>
        <p>{meal.description}</p>
        <p>{meal.price}</p>
      </div>
    </div>
  );
};

const DetailMeal = () => {
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const mealsData = [
    {
      title: "Combo Rice With Chicken Thigh Includes Coca Coca 50% Off",
      description: "Mỗi phần ăn bao gồm 01 bịch tương ớt, 01 bịch nước tương.",
      price: "28.000",
      imageSrc:
        "src/assets/menueditor_item_2c3ab67abac047f78a89890b32ac32c5_1708761727475972298.webp",
    },
    {
      title: "Combo Rice With Chicken Thigh And Sauce",
      description:
        "Combo Includes Chicken Thigh Rice With Optional Sauce And Cold Seaweed Soup",
      price: "45.750",
      imageSrc:
        "https://food-cms.grab.com/compressed_webp/items/VNITE2024020610441903248/detail/menueditor_item_85427b70d75840c7bc76d341bd3635a8_1708608269260714876.webp",
    },
    {
      title: "Rice With Grilled Pork",
      description: "Mỗi phần ăn bao gồm 01 bịch tương ớt, 01 bịch nước tương.",
      price: "35.000",
      imageSrc:
        "https://food-cms.grab.com/compressed_webp/items/VNITE2024020304250857510/detail/menueditor_item_07b32cc0e2f84eca92996ac4db79b06f_1706934294696427230.webp",
    },
    {
      title: "Rice With Chicken Thigh Without Sauce",
      description:
        "Combo Includes Chicken Thigh Rice With Optional Sauce And Cold Seaweed Soup",
      price: "45.750",
      imageSrc:
        "https://food-cms.grab.com/compressed_webp/items/VNITE2024020303512252464/detail/menueditor_item_4c0e6f1a3f9d4a498ef98ba6203eaf2a_1706953593181323001.webp",
    },
  ];

  const handleClick = (index) => {
    setSelectedMeal(meals[index]);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="container">
      <h1 className="fw-bold">Promotion Combo</h1>
      <div className="row row-cols-1 row-cols-md-3 g-0">
        {mealsData.map((meal, index) => (
          <div key={index} className="col">
            <div className="card" style={{ width: "385px", height: "210px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={meal.imageSrc}
                    className="card-img"
                    alt="Meal"
                    style={{
                      margin: "15px",
                      maxWidth: "100%",
                      maxHeight: "100%",
                    }}
                  />
                </div>
                <div className="col-md-8">
                  <div
                    className="card-body"
                    style={{ textAlign: "left", marginLeft: "5px" }}
                  >
                    <h5
                      className="card-title"
                      style={{ fontWeight: "300", fontSize: "16px" }}
                    >
                      {meal.title}
                    </h5>
                    <p
                      className="card-text"
                      style={{ color: "#9a9a9a", fontSize: "15px" }}
                    >
                      {meal.description}
                    </p>
                    <p className="fw-500">{meal.price}</p>
                  </div>
                  <button
                    className="round-button"
                    onClick={() => handleClick(index)}
                  >
                    <img src="src/assets/plus-white.svg" alt="Add" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} meal={selectedMeal} />
    </div>
  );
};

export default DetailMeal;
