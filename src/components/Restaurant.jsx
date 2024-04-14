import React from "react";
import Navbar from "./Header";
import "./Design.css";
import { Link } from "react-router-dom";
import search from "src/assets/search.png";
import star from "../assets/icon-star.svg";
import clock from "../assets/icon-star.svg";
import fullstop from "../assets/full-stop.png";
import promo from "../assets/icon-promo-tag.svg";
import food1 from "../assets/card1.webp";
import food2 from "../assets/cardMaycha.webp";
import food3 from "../assets/CardMac.webp";
import food4 from "../assets/CardPLT.webp";
const Restaurant = () => {
  return (
    <div>
      <Navbar />
      <div className="container" style={{ marginTop: "100px" }}>
        <div
          className="input-group mb-3"
          style={{
            color: "#f7f7f7",
          }}
        >
          <span
            className="input-group-text"
            id="inputGroup-sizing-default"
            style={{ border: 0, borderRadius: " 50px 0 0 50px " }}
          >
            <img src={search} alt="Search icon" />
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            style={{
              backgroundColor: "#f7f7f7",
              color: "#000",
              borderRadius: "0 50px 50px 0 ",
              border: 0,
            }}
          />
        </div>
        <div class="containerCard3">
          <div
            className="card"
            style={{
              width: "180px",
              height: "110px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <a href="#">
              <img
                src="src/assets/placeholder-restaurant-2by1.jpg"
                className="card-img-top"
                alt="..."
                style={{
                  filter: "brightness(60%)",
                  width: "180px",
                  height: "110px",
                }}
              />
              <div
                className="card-img-overlay"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <p
                  className="card-title"
                  style={{
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "300",
                  }}
                >
                  Gần tôi
                </p>
              </div>
            </a>
          </div>

          <div
            className="card"
            style={{
              width: "180px",
              height: "110px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <a href="#">
              <img
                src="https://food.grab.com/static/images/placeholder-restaurant-2by1.jpg"
                className="card-img-top"
                alt="..."
                style={{
                  filter: "brightness(60%)",
                  width: "180px",
                  height: "110px",
                }}
              />
              <div
                className="card-img-overlay"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-80%, -50%)",
                }}
              >
                <p
                  className="card-title"
                  style={{
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "300",
                  }}
                >
                  Gian hàng đồng giá
                </p>
              </div>
            </a>
          </div>

          <div
            className="card"
            style={{
              width: "180px",
              height: "110px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <a href="#">
              <img
                src="https://food.grab.com/static/images/placeholder-restaurant-2by1.jpg"
                className="card-img-top"
                alt="..."
                style={{
                  filter: "brightness(60%)",
                  width: "180px",
                  height: "110px",
                }}
              />
              <div
                className="card-img-overlay"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-70%, -50%)",
                }}
              >
                <p
                  className="card-title"
                  style={{
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "300",
                  }}
                >
                  Đổi vị món tối
                </p>
              </div>
            </a>
          </div>

          <div
            className="card"
            style={{
              width: "180px",
              height: "110px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <a href="#">
              <img
                src="https://food.grab.com/static/images/placeholder-restaurant-2by1.jpg"
                className="card-img-top"
                alt="..."
                style={{
                  filter: "brightness(60%)",
                  width: "180px",
                  height: "110px",
                }}
              />
              <div
                className="card-img-overlay"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-70%, -50%)",
                }}
              >
                <p
                  className="card-title"
                  style={{
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "300",
                  }}
                >
                  Quán trứ danh
                </p>
              </div>
            </a>
          </div>

          <div
            className="card"
            style={{
              width: "180px",
              height: "110px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <a href="#">
              <img
                src="https://food.grab.com/static/images/placeholder-restaurant-2by1.jpg"
                className="card-img-top"
                alt="..."
                style={{
                  filter: "brightness(60%)",
                  width: "180px",
                  height: "110px",
                }}
              />
              <div
                className="card-img-overlay"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-70%, -50%)",
                }}
              >
                <p
                  className="card-title"
                  style={{
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "300",
                  }}
                >
                  Quán mới giá hời
                </p>
              </div>
            </a>
          </div>

          <div
            className="card"
            style={{
              width: "180px",
              height: "110px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <a href="#">
              <img
                src="https://food.grab.com/static/images/placeholder-restaurant-2by1.jpg"
                className="card-img-top"
                alt="..."
                style={{
                  filter: "brightness(60%)",
                  width: "180px",
                  height: "110px",
                }}
              />
              <div
                className="card-img-overlay"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-70%, -50%)",
                }}
              >
                <p
                  className="card-title"
                  style={{
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    color: "white",
                    fontSize: "14px",
                    fontWeight: "300",
                  }}
                >
                  Deal chồng deal
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div style={{ height: "10px", backgroundColor: "#f7f7f7" }}></div>
      <div className="container">
        <nav
          style={{
            marginLeft: "40px",
            marginTop: "30px",
            "--bs-breadcrumb-divider": 'url("src/assets/icon-next.svg")',
          }}
          aria-label="breadcrumb"
        >
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link style={{ textDecoration: "none", color: "#00a5cf" }} to="/">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link style={{ textDecoration: "none", color: "#00a5cf" }} to="/">
                Cuisine
              </Link>
            </li>
            <li
              style={{ color: "black" }}
              className="breadcrumb-item active"
              aria-current="page"
            >
              Khuyến mãi
            </li>
          </ol>
        </nav>
        <h1 style={{ marginLeft: "40px", fontWeight: "bold" }}>
          Food Promos in <a style={{ color: "#00b14f" }}>Location</a>
        </h1>
        <div className="containerCard">
          <div className="card" style={{ width: "280px", border: 0 }}>
            <Link className="link" to="/detail">
              <img src={food1} className="card-img-top" alt="..." />
              <div className="card-body" style={{ padding: 0 }}>
                <h5 className="card-title" style={{ paddingTop: "10px" }}>
                  Trạm Cơm Gà - 24H Station
                </h5>
                <p
                  className="card-text"
                  style={{ color: "#707070", margin: 0 }}
                >
                  Rice
                </p>
                <p className="info">
                  <img src={star} alt="Star Icon" /> 4.8
                  <img src={clock} alt="Clock Icon" /> 25 mins
                  <img src={fullstop} /> 2.2 km
                </p>
                <img className="promo" src={promo} style={{ padding: 0 }} />
                Ưu đãi đến 46k
              </div>
            </Link>
          </div>

          <div className="card" style={{ width: "280px", border: 0 }}>
            <Link className="link" href="/detail">
              <img src={food2} className="card-img-top" alt="..." />
              <div className="card-body" style={{ padding: 0 }}>
                <h5 className="card-title" style={{ paddingTop: "10px" }}>
                  Trà Sữa MayCha - Trịnh Đình Trọng
                </h5>
                <p
                  className="card-text"
                  style={{ color: "#707070", margin: 0 }}
                >
                  Milk Tea
                </p>
                <p className="info">
                  <img src={star} alt="Star Icon" /> 4.4
                  <img src={clock} alt="Clock Icon" /> 15 mins
                  <img src={fullstop} /> 0.6 km
                </p>
                <img className="promo" src={promo} style={{ padding: 0 }} />
                Ưu đãi đến 34k
              </div>
            </Link>
          </div>

          <div className="card" style={{ width: "280px", border: 0 }}>
            <Link className="link" to="/detail">
              <img src={food3} className="card-img-top" alt="..." />
              <div className="card-body" style={{ padding: 0 }}>
                <h5 className="card-title" style={{ paddingTop: "10px" }}>
                  McDonald's - Bến Thành
                </h5>
                <p
                  className="card-text"
                  style={{ color: "#707070", margin: 0 }}
                >
                  Fast Food, Rice, International Food
                </p>
                <p className="info">
                  <img src={star} alt="Star Icon" /> 4.4
                  <img src={clock} alt="Clock Icon" /> 35 mins
                  <img src={fullstop} /> 7.6 km
                </p>
                <img className="promo" src={promo} style={{ padding: 0 }} />
                🔥50K off, Combo Trưa Chỉ 40K
              </div>
            </Link>
          </div>

          <div className="card" style={{ width: "280px", border: 0 }}>
            <Link className="link" to="/detail">
              <img src={food4} className="card-img-top" alt="..." />
              <div className="card-body" style={{ padding: 0 }}>
                <h5 className="card-title" style={{ paddingTop: "10px" }}>
                  Cơm Tấm Phúc Lộc Thọ - Huỳnh Thiện Lộc
                </h5>
                <p
                  className="card-text"
                  style={{ color: "#707070", margin: 0 }}
                >
                  Rice
                </p>
                <p className="info">
                  <img src={star} alt="Star Icon" /> 4.1
                  <img src={clock} alt="Clock Icon" /> 15 mins
                  <img src={fullstop} /> 1 km
                </p>
                <img className="promo" src={promo} style={{ padding: 0 }} />
                Ưu đãi đến 15k
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
