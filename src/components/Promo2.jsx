import React from "react";
import { Link } from "react-router-dom";
import "./Design.css";

const ListData = [
  {
    title: "Trạm Cơm Gà - 24H Station",
    category: "Rice",
    stars: 4.8,
    time: 25,
    distance: 2.2,
    promo: "Ưu đãi đến 46k",
    image: "src/assets/card1.webp",
  },
  {
    title: "Trà Sữa MayCha - Trịnh Đình Trọng",
    category: "Milk Tea",
    stars: 4.4,
    time: 15,
    distance: 0.6,
    promo: "Ưu đãi đến 34k",
    image: "src/assets/cardMaycha.webp",
  },
  {
    title: "McDonald's - Âu Cơ",
    category: "Fast Food, Rice, International Food",
    stars: 4.4,
    time: 15,
    distance: 2,
    promo: "🔥50K off, Combo Trưa Chỉ 40K",
    image: "src/assets/CardMac.webp",
  },
  {
    title: "Cơm Tấm Phúc Lộc Thọ - Huỳnh Thiện Lộc",
    category: "Rice",
    stars: 4.1,
    time: 15,
    distance: 1,
    promo: "Ưu đãi đến 15k",
    image: "src/assets/cardPLT.webp",
  },
];
const TypeData = [
  {
    title: "Iced Drinks",
    image:
      "https://food-cms.grab.com/compressed_webp/collections/38/icons/upload-photo-icon_11130fe9f9154c09b507516072864902_1548777275151458249.webp",
  },
  {
    title: "Bánh Mì",
    image:
      "https://food-cms.grab.com/compressed_webp/cuisine/16/icons/upload-photo-icon_3408dc71ae96497c82a6f5fb35763840_1549033935837593141.webp",
  },
  {
    title: "Meat",
    image:
      "https://food-cms.grab.com/compressed_webp/cuisine/209/icons/upload-photo-icon_65f41b40038b4b3ea672402e609d0e96_1548908793958778523.webp",
  },
  {
    title: "Hiso Party",
    image:
      "https://food-cms.grab.com/compressed_webp/collections/36/icons/upload-photo-icon_e816de4ec50a4e7a95fc6cc52e3072cd_1548575711684762474.webp",
  },
  {
    title: "Salad",
    image:
      "https://food-cms.grab.com/compressed_webp/cuisine/147/icons/Salad_1641af887e2b4092a81f8e27ccdac0dc_1547819244890107512.webp",
  },
  {
    title: "Pasta",
    image:
      "https://food-cms.grab.com/compressed_webp/cuisine/130/icons/upload-photo-icon_5175b157c8114e51898b264e1173fafb_1548303610212783174.webp",
  },
  {
    title: "Rice noodles",
    image:
      "https://food-cms.grab.com/compressed_webp/cuisine/83/icons/cedda467431a49bd88fb1fdf40a4c4a0_1562559607379193479.webp",
  },
  {
    title: "Snack",
    image:
      "https://food-cms.grab.com/compressed_webp/cuisine/157/icons/eb8ea703d1f84b218b79b0f860e99425_1562559054203677203.webp",
  },
  {
    title: "Rice",
    image:
      "https://food-cms.grab.com/compressed_webp/cuisine/144/icons/Rice_e191965ccd6848a3862e6a695d05983f_1547819238893335910.webp",
  },
  {
    title: "Pizza",
    image:
      "https://food-cms.grab.com/compressed_webp/cuisine/135/icons/Pizza_32aed38d4c1d4dbcb2fe711f0aeb6e15_1547819221409327403.webp",
  },
  {
    title: "Bubble Tea",
    image:
      "https://food-cms.grab.com/compressed_webp/cuisine/29/icons/a928e8df0b8b4dfc856ac176c2cf6ecb_1662695866769706068.webp",
  },
  {
    title: "Chicken",
    image:
      "https://food-cms.grab.com/compressed_webp/cuisine/43/icons/Chicken_d4725da9243a46e79740d2e70fd28314_1547819095170793371.webp",
  },
  {
    title: "Fast Food",
    image:
      "https://food-cms.grab.com/compressed_webp/cuisine/62/icons/FastFood_4710e425c3d24db2aa4280aa207a22d3_1547819143037208832.webp",
  },
  {
    title: "Congee",
    image:
      "https://food-cms.grab.com/compressed_webp/cuisine/40/icons/upload-photo-icon_f71f7805786348b694d2a9a886b85cee_1549034196325788582.webp",
  },
  {
    title: "Broken rice",
    image:
      "https://food-cms.grab.com/compressed_webp/cuisine/50/icons/fcaf978fac204ecaab2c5fa0f7e6e4ce_1562559545238776223.webp",
  },
  {
    title: "Fried Chicken",
    image:
      "https://food-cms.grab.com/compressed_webp/cuisine/69/icons/FriedChicken_4251b520449049528751b74b4d05ffa1_1547819155005255038.webp",
  },
  {
    title: "Weekend Treats",
    image:
      "https://food-cms.grab.com/compressed_webp/collections/68/icons/upload-photo-icon_3d16a293ac324b7e9aed94d783a57864_1548575050539497623.webp",
  },
];

const Promo = () => {
  return (
    <div className="container">
      <h1 style={{ marginTop: "75px", marginLeft: "40px", fontWeight: "bold" }}>
        GrabFood Promo in <a style={{ color: "#00b14f" }}>Location</a>
      </h1>
      <div className="containerCard">
        {ListData.map((item, index) => (
          <div
            key={index}
            className="card"
            style={{ width: "280px", border: 0 }}
          >
            <Link className="link" to="/detail">
              <img src={item.image} className="card-img-top" alt="..." />
              <div className="card-body" style={{ padding: 0 }}>
                <h5
                  className="card-title"
                  style={{ paddingTop: "10px", textAlign: "left" }}
                >
                  {item.title}
                </h5>
                <p
                  className="card-text"
                  style={{ color: "#707070", margin: 0 }}
                >
                  {item.category}
                </p>
                <p className="info">
                  <img src="src/assets/icon-star.svg" alt="Star Icon" />{" "}
                  {item.stars}
                  <img src="src/assets/icon-clock.svg" alt="Clock Icon" />{" "}
                  {item.time} mins
                  <img src="src/assets/full-stop.png" /> {item.distance} km
                </p>
                <img
                  className="promo"
                  src="src/assets/icon-promo-tag.svg"
                  style={{ padding: 0 }}
                />
                {item.promo}
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="d-grid gap-2" style={{ margin: "0 40px" }}>
        <Link to="/restaurant" className="btn btn-primary" id="see-all">
          See all promotions
        </Link>
      </div>
      <h1 style={{ marginTop: "50px", marginLeft: "40px", fontWeight: "bold" }}>
        There's something for everyone!
      </h1>
      <div className="container">
        <div className="containerCard2">
          {TypeData.map((item, index) => (
            <div
              key={index}
              className="card"
              style={{ width: "280px", border: 0 }}
            >
              <a className="link" href="#">
                <img src={item.image} className="card-img-top" alt="..." />
                <div className="card-body" style={{ padding: 0 }}>
                  <h5 className="card-title" style={{ paddingTop: "10px" }}>
                    {item.title}
                  </h5>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Promo;
