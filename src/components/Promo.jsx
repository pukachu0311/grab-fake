import React from "react";
import { Link } from "react-router-dom";
import "./Design.css";

const Promo = () => {
  return (
    <div className="container">
      <h1 style={{ marginTop: "75px", marginLeft: "40px", fontWeight: "bold" }}>
        GrabFood Promo in <a style={{ color: "#00b14f" }}>Location</a>
      </h1>
      <div className="containerCard">
        <div className="card" style={{ width: "280px", border: 0 }}>
          <Link className="link" to="/detail">
            <img
              src="src/assets/card1.webp"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body" style={{ padding: 0 }}>
              <h5 className="card-title" style={{ paddingTop: "10px" }}>
                Trạm Cơm Gà - 24H Station
              </h5>
              <p className="card-text" style={{ color: "#707070", margin: 0 }}>
                Rice
              </p>
              <p className="info">
                <img src="src/assets/icon-star.svg" alt="Star Icon" /> 4.8
                <img src="src/assets/icon-clock.svg" alt="Clock Icon" /> 25 mins
                <img src="src/assets/full-stop.png" /> 2.2 km
              </p>
              <img
                className="promo"
                src="src/assets/icon-promo-tag.svg"
                style={{ padding: 0 }}
              />
              Ưu đãi đến 46k
            </div>
          </Link>
        </div>

        <div className="card" style={{ width: "280px", border: 0 }}>
          <a className="link" href="#">
            <img
              src="src/assets/cardMaycha.webp"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body" style={{ padding: 0 }}>
              <h5 className="card-title" style={{ paddingTop: "10px" }}>
                Trà Sữa MayCha - Trịnh Đình Trọng
              </h5>
              <p className="card-text" style={{ color: "#707070", margin: 0 }}>
                Milk Tea
              </p>
              <p className="info">
                <img src="src/assets/icon-star.svg" alt="Star Icon" /> 4.4
                <img src="src/assets/icon-clock.svg" alt="Clock Icon" /> 15 mins
                <img src="src/assets/full-stop.png" /> 0.6 km
              </p>
              <img
                className="promo"
                src="src/assets/icon-promo-tag.svg"
                style={{ padding: 0 }}
              />
              Ưu đãi đến 34k
            </div>
          </a>
        </div>

        <div className="card" style={{ width: "280px", border: 0 }}>
          <a className="link" href="#">
            <img
              src="src/assets/cardMac.webp"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body" style={{ padding: 0 }}>
              <h5 className="card-title" style={{ paddingTop: "10px" }}>
                McDonald's - Bến Thành
              </h5>
              <p className="card-text" style={{ color: "#707070", margin: 0 }}>
                Fast Food, Rice, International Food
              </p>
              <p className="info">
                <img src="src/assets/icon-star.svg" alt="Star Icon" /> 4.4
                <img src="src/assets/icon-clock.svg" alt="Clock Icon" /> 35 mins
                <img src="src/assets/full-stop.png" /> 7.6 km
              </p>
              <img
                className="promo"
                src="src/assets/icon-promo-tag.svg"
                style={{ padding: 0 }}
              />
              🔥50K off, Combo Trưa Chỉ 40K
            </div>
          </a>
        </div>

        <div className="card" style={{ width: "280px", border: 0 }}>
          <a className="link" href="#">
            <img
              src="src/assets/cardPLT.webp"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body" style={{ padding: 0 }}>
              <h5 className="card-title" style={{ paddingTop: "10px" }}>
                Cơm Tấm Phúc Lộc Thọ - Huỳnh Thiện Lộc
              </h5>
              <p className="card-text" style={{ color: "#707070", margin: 0 }}>
                Rice
              </p>
              <p className="info">
                <img src="src/assets/icon-star.svg" alt="Star Icon" /> 4.1
                <img src="src/assets/icon-clock.svg" alt="Clock Icon" /> 15 mins
                <img src="src/assets/full-stop.png" /> 1 km
              </p>
              <img
                className="promo"
                src="src/assets/icon-promo-tag.svg"
                style={{ padding: 0 }}
              />
              Ưu đãi đến 15k
            </div>
          </a>
        </div>
      </div>
      <div className="d-grid gap-2" style={{ margin: "0 20px" }}>
        <Link to="/restaurant" className="btn btn-primary" id="see-all">
          See all promotions
        </Link>
      </div>
      <h1 style={{ marginTop: "50px", marginLeft: "40px", fontWeight: "bold" }}>
        There's something for everyone!
      </h1>
      <div className="container">
        <div className="containerCard2">
          <div className="card" style={{ width: "280px", border: 0 }}>
            <a className="link" href="#">
              <img
                src="https://food-cms.grab.com/compressed_webp/cuisine/29/icons/a928e8df0b8b4dfc856ac176c2cf6ecb_1662695866769706068.webp"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body" style={{ padding: 0 }}>
                <h5 className="card-title" style={{ paddingTop: "10px" }}>
                  Bubble Tea
                </h5>
              </div>
            </a>
          </div>
          <div className="card" style={{ width: "280px", border: 0 }}>
            <a className="link" href="#">
              <img
                src="https://food-cms.grab.com/compressed_webp/collections/68/icons/upload-photo-icon_3d16a293ac324b7e9aed94d783a57864_1548575050539497623.webp"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body" style={{ padding: 0 }}>
                <h5 className="card-title" style={{ paddingTop: "10px" }}>
                  Weekend Treats
                </h5>
              </div>
            </a>
          </div>
          <div className="card" style={{ width: "280px", border: 0 }}>
            <a className="link" href="#">
              <img
                src="https://food-cms.grab.com/compressed_webp/cuisine/83/icons/cedda467431a49bd88fb1fdf40a4c4a0_1562559607379193479.webp"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body" style={{ padding: 0 }}>
                <h5 className="card-title" style={{ paddingTop: "10px" }}>
                  Rice noodles
                </h5>
              </div>
            </a>
          </div>
          <div className="card" style={{ width: "280px", border: 0 }}>
            <a className="link" href="#">
              <img
                src="https://food-cms.grab.com/compressed_webp/cuisine/16/icons/upload-photo-icon_3408dc71ae96497c82a6f5fb35763840_1549033935837593141.webp"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body" style={{ padding: 0 }}>
                <h5 className="card-title" style={{ paddingTop: "10px" }}>
                  Bánh Mì
                </h5>
              </div>
            </a>
          </div>
          <div className="card" style={{ width: "280px", border: 0 }}>
            <a className="link" href="#">
              <img
                src="https://food-cms.grab.com/compressed_webp/cuisine/157/icons/eb8ea703d1f84b218b79b0f860e99425_1562559054203677203.webp"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body" style={{ padding: 0 }}>
                <h5 className="card-title" style={{ paddingTop: "10px" }}>
                  Snack
                </h5>
              </div>
            </a>
          </div>
          <div className="card" style={{ width: "280px", border: 0 }}>
            <a className="link" href="#">
              <img
                src="https://food-cms.grab.com/compressed_webp/cuisine/130/icons/upload-photo-icon_5175b157c8114e51898b264e1173fafb_1548303610212783174.webp"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body" style={{ padding: 0 }}>
                <h5 className="card-title" style={{ paddingTop: "10px" }}>
                  Pasta
                </h5>
              </div>
            </a>
          </div>
          <div className="card" style={{ width: "280px", border: 0 }}>
            <a className="link" href="#">
              <img
                src="https://food-cms.grab.com/compressed_webp/cuisine/69/icons/FriedChicken_4251b520449049528751b74b4d05ffa1_1547819155005255038.webp"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body" style={{ padding: 0 }}>
                <h5 className="card-title" style={{ paddingTop: "10px" }}>
                  Fried Chicken
                </h5>
              </div>
            </a>
          </div>
          <div className="card" style={{ width: "280px", border: 0 }}>
            <a className="link" href="#">
              <img
                src="https://food-cms.grab.com/compressed_webp/cuisine/135/icons/Pizza_32aed38d4c1d4dbcb2fe711f0aeb6e15_1547819221409327403.webp"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body" style={{ padding: 0 }}>
                <h5 className="card-title" style={{ paddingTop: "10px" }}>
                  Pizza
                </h5>
              </div>
            </a>
          </div>
          <div className="card" style={{ width: "280px", border: 0 }}>
            <a className="link" href="#">
              <img
                src="https://food-cms.grab.com/compressed_webp/collections/36/icons/upload-photo-icon_e816de4ec50a4e7a95fc6cc52e3072cd_1548575711684762474.webp"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body" style={{ padding: 0 }}>
                <h5 className="card-title" style={{ paddingTop: "10px" }}>
                  Hiso Party
                </h5>
              </div>
            </a>
          </div>
          <div className="card" style={{ width: "280px", border: 0 }}>
            <a className="link" href="#">
              <img
                src="https://food-cms.grab.com/compressed_webp/cuisine/147/icons/Salad_1641af887e2b4092a81f8e27ccdac0dc_1547819244890107512.webp"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body" style={{ padding: 0 }}>
                <h5 className="card-title" style={{ paddingTop: "10px" }}>
                  Salad
                </h5>
              </div>
            </a>
          </div>
          <div className="card" style={{ width: "280px", border: 0 }}>
            <a className="link" href="#">
              <img
                src="https://food-cms.grab.com/compressed_webp/collections/38/icons/upload-photo-icon_11130fe9f9154c09b507516072864902_1548777275151458249.webp"
                className="card-img-top"
                alt="Iced Drinks"
              />
              <div className="card-body" style={{ padding: 0 }}>
                <h5 className="card-title" style={{ paddingTop: "10px" }}>
                  Iced Drinks
                </h5>
              </div>
            </a>
          </div>
          <div className="card" style={{ width: "280px", border: 0 }}>
            <a className="link" href="#">
              <img
                src="https://food-cms.grab.com/compressed_webp/cuisine/144/icons/Rice_e191965ccd6848a3862e6a695d05983f_1547819238893335910.webp"
                className="card-img-top"
                alt="Rice"
              />
              <div className="card-body" style={{ padding: 0 }}>
                <h5 className="card-title" style={{ paddingTop: "10px" }}>
                  Rice
                </h5>
              </div>
            </a>
          </div>
          <div className="card" style={{ width: "280px", border: 0 }}>
            <a className="link" href="#">
              <img
                src="https://food-cms.grab.com/compressed_webp/cuisine/209/icons/upload-photo-icon_65f41b40038b4b3ea672402e609d0e96_1548908793958778523.webp"
                className="card-img-top"
                alt="Meat"
              />
              <div className="card-body" style={{ padding: 0 }}>
                <h5 className="card-title" style={{ paddingTop: "10px" }}>
                  Meat
                </h5>
              </div>
            </a>
          </div>
          <div className="card" style={{ width: "280px", border: 0 }}>
            <a className="link" href="#">
              <img
                src="https://food-cms.grab.com/compressed_webp/cuisine/40/icons/upload-photo-icon_f71f7805786348b694d2a9a886b85cee_1549034196325788582.webp"
                className="card-img-top"
                alt="Congee"
              />
              <div className="card-body" style={{ padding: 0 }}>
                <h5 className="card-title" style={{ paddingTop: "10px" }}>
                  Congee
                </h5>
              </div>
            </a>
          </div>
          <div className="card" style={{ width: "280px", border: 0 }}>
            <a className="link" href="#">
              <img
                src="https://food-cms.grab.com/compressed_webp/cuisine/62/icons/FastFood_4710e425c3d24db2aa4280aa207a22d3_1547819143037208832.webp"
                className="card-img-top"
                alt="Fast Food"
              />
              <div className="card-body" style={{ padding: 0 }}>
                <h5 className="card-title" style={{ paddingTop: "10px" }}>
                  Fast Food
                </h5>
              </div>
            </a>
          </div>
          <div className="card" style={{ width: "280px", border: 0 }}>
            <a className="link" href="#">
              <img
                src="https://food-cms.grab.com/compressed_webp/cuisine/43/icons/Chicken_d4725da9243a46e79740d2e70fd28314_1547819095170793371.webp"
                className="card-img-top"
                alt="Chicken"
              />
              <div className="card-body" style={{ padding: 0 }}>
                <h5 className="card-title" style={{ paddingTop: "10px" }}>
                  Chicken
                </h5>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
