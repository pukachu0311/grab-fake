import Navbar from "./Header";
import "./Design.css";
import React from "react";
import DetailMeal from "./DetailMeal";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { Tabs } from "antd";
const Detail = () => {
  return (
    <main>
      <Navbar />
      <div className="container">
        <nav
          style={{
            marginLeft: "40px",
            marginTop: "100px",
            "--bs-breadcrumb-divider": 'url("src/assets/icon-next.svg")',
          }}
          aria-label="breadcrumb"
        >
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link
                style={{ textDecoration: "none", color: "#00a5cf" }}
                to="/grab-fake"
              >
                Home
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link
                style={{ textDecoration: "none", color: "#00a5cf" }}
                to="/restaurant"
              >
                Cuisine
              </Link>
            </li>
            <li
              style={{ color: "black" }}
              className="breadcrumb-item active"
              aria-current="page"
            >
              Trạm Cơm Gà - 24H Station
            </li>
          </ol>
        </nav>
        <div style={{ marginLeft: "40px" }}>
          <h1 style={{ fontWeight: "bold" }}>Trạm Cơm Gà - 24H Station</h1>
          <p className="card-text" style={{ color: "#707070", margin: 0 }}>
            Rice
          </p>
          <p className="info" style={{ width: "300px", height: "50px" }}>
            <img src="src/assets/icon-star.svg" alt="Star Icon" /> 4.8
            <img src="src/assets/icon-clock.svg" alt="Clock Icon" /> 25 mins
            <img src="src/assets/full-stop.png" /> 2.2 km
          </p>
          <p>
            <strong>Opening Hour</strong> &emsp; Today 00:00-02:00 07:00-23:59
          </p>
          <img
            className="promo"
            src="src/assets/icon-promo-tag.svg"
            style={{ padding: 0 }}
          />
          <p>Get a free Kem Oreo Phô mai with 149.000₫ min. order</p>
          <img
            className="promo"
            src="src/assets/icon-promo-tag.svg"
            style={{ padding: 0, margin: 0 }}
          />
          <p>15.000₫ off delivery fee with 200.000₫ min. order</p>
        </div>

        <div className="tabContainer">
          <Tabs defaultActiveKey="tab1">
            <Tabs.TabPane
              tab={<span className="tab-title">Promotion Combo</span>}
              key="tab1"
            >
              <DetailMeal />
            </Tabs.TabPane>
            <Tabs.TabPane
              tab={<span className="tab-title">Bestseller Chicken Rice</span>}
              key="tab2"
            >
              <DetailMeal />
            </Tabs.TabPane>
            <Tabs.TabPane
              tab={<span className="tab-title">Món ăn kèm</span>}
              key="tab3"
            >
              <div> </div>
            </Tabs.TabPane>
          </Tabs>
        </div>
      </div>
    </main>
  );
};
export default Detail;
