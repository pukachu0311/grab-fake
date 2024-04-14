import React from "react";

import "./Design.css";

const Footer = () => {
  return (
    <div>
      <div style={{ background: "#f7f7f7", padding: "72px 0" }}>
        <div className="container">
          <div class="container text-center">
            <div class="row">
              <div class="col">
                <article>
                  <img src="src/assets/bottom-food-options.svg" />
                  <h5>
                    <strong>Curated restaurants</strong>{" "}
                  </h5>
                  <section style={{ color: "#676767" }}>
                    From small bites to big meals, we won't limit your appetite.
                    Go ahead and order all you want.
                  </section>
                </article>
              </div>
              <div class="col">
                <article>
                  <img
                    style={{ width: "150px", height: "150px" }}
                    src="src/assets/ilus-cool-features-app.svg"
                  />
                  <h5>
                    <strong>More cool features available on the app</strong>{" "}
                  </h5>
                  <section style={{ color: "#676767" }}>
                    Download Grab app to use other payment methods and enjoy
                    seamless communication with your driver.
                  </section>
                </article>
                <div
                  style={{
                    margin: "20px 130px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <img src="src/assets/logo-appstore.svg" />
                  <img src="src/assets/logo-playstore.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: "#00b14f", padding: "30px 0" }}>
        <div className="container">
          <img
            style={{ width: "173px", height: "auto" }}
            src="src/assets/logo-grabfood-white.svg"
          />
          <hr style={{ margin: "20px", color: "white" }}></hr>
          <div class="container text-center">
            <div
              class="row row-cols-4"
              style={{ textAlign: "left", color: "white" }}
            >
              <div class="col">
                <a className="link" href="#">
                  About GrabFood
                </a>
              </div>
              <div class="col">
                <a className="link" href="#">
                  Be a GrabFood Merchant
                </a>
              </div>
              <div class="col">
                <a className="link" href="#">
                  Help
                </a>
              </div>
              <div class="col" style={{ padding: "0 10px" }}>
                <img
                  src="src/assets/facebook.png"
                  style={{ marginRight: "20px" }}
                />
                <img
                  src="src/assets/instagram.png"
                  style={{ marginRight: "20px" }}
                />
                <img src="src/assets/twitter.png" />
              </div>
            </div>
            <div
              class="row row-cols-4"
              style={{ textAlign: "left", color: "white", marginTop: "20px" }}
            >
              <div class="col">
                <a className="link" href="#">
                  About Grab
                </a>
              </div>
              <div class="col">
                <a className="link" href="#">
                  Drive With Grab
                </a>
              </div>
              <div class="col">
                <a className="link" href="#">
                  FAQs
                </a>
              </div>
            </div>
          </div>
          <div
            class="row row-cols-4"
            style={{ textAlign: "left", color: "white", margin: "20px 0" }}
          >
            <div class="col">
              <a className="link" href="#">
                Blog
              </a>
            </div>
          </div>

          <hr style={{ margin: "20px", color: "white", border: "1px solid" }} />
          <div class="container">
            <div class="row">
              <div class="col">
                <div
                  style={{
                    marginTop: "10px",
                    textAlign: "left",
                    display: "flex",
                  }}
                >
                  <img src="src/assets/logo-appstore.svg" />
                  <img
                    style={{ marginLeft: "20px" }}
                    src="src/assets/logo-playstore.svg"
                  />
                </div>
              </div>
              <div class="col">
                <div
                  style={{
                    fontSize: "12px",
                    textAlign: "right",
                    color: "white",
                    marginTop: "30px",
                  }}
                >
                  <p style={{ display: "inline-block", marginRight: "10px" }}>
                    © 2024
                  </p>
                  <p style={{ display: "inline-block" }}>
                    Grab Terms of Service • Privacy Policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
