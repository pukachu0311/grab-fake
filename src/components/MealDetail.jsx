import React from "react";
import plus from "../assets/plus-white.svg";
function MealDetail(prop) {
  return (
    <>
      <div className="col-md-4">
        <div className="card" style={{ width: "385px", height: "230px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                style={{ margin: "15px" }}
                src={prop.url}
                className="card-img"
                alt="Meal"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body" style={{ marginLeft: "15px" }}>
                <p
                  className="card-title"
                  style={{ fontWeight: "300", fontSize: "16px" }}
                >
                  {prop.title}
                </p>
                <p
                  className="card-text"
                  style={{ color: "#9a9a9a", fontSize: "15px" }}
                >
                  {prop.description}
                </p>
                <p style={{ fontWeight: "500" }}>{prop.price}</p>
              </div>
              <button
                className="round-button"
                onClick={() => setIsOpen(!isOpen)}
              >
                <img src={plus} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MealDetail;
