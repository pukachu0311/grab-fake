import React, { useState } from "react";
import "./Design.css";

const Info = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="container" style={{ textAlign: "left" }}>
      <h1 style={{ marginTop: "20px", marginLeft: "20px", fontWeight: "bold" }}>
        Why GrabFood?
      </h1>
      <section>
        <p>
          <img id="tick" src="src/assets/tick.svg"></img>
          <strong>Quickest</strong>- GrabFood provides the fastest food delivery
          in the market.
        </p>
        <p>
          <img id="tick" src="src/assets/tick.svg"></img>
          <strong>Easiest</strong> - Now grabbing your food is just a few clicks
          or taps away. Order online or download our Grab super app for a faster
          and more rewarding experience.
        </p>
        <p>
          <img id="tick" src="src/assets/tick.svg"></img>
          <strong>Food for all cravings</strong>- From local fare to restaurant
          favourites, our wide selection of food will definitely satisfy all
          your cravings
        </p>
        <p>
          <img id="tick" src="src/assets/tick.svg"></img>
          <strong>Pay with ease</strong>- It’s easy to get your meals delivered
          to you. It’s even easier to pay for it with GrabPay.
        </p>
        <p>
          <img id="tick" src="src/assets/tick.svg"></img>
          <strong>More Rewarding</strong>- earn GrabRewards points for every
          order you make and use them to redeem more goodies.
        </p>
      </section>
      <h1 style={{ marginTop: "40px", marginLeft: "20px", fontWeight: "bold" }}>
        Frequently Asked Questions
      </h1>
      <h3 style={{ marginTop: "20px", marginLeft: "20px", fontWeight: "bold" }}>
        What is GrabFood?
      </h3>
      <section>
        GrabFood is the fastest Food Delivery service in Vietnam. We have
        curated all your favorite dishes, restaurants, and cuisines to help you
        grab your food in the easiest & quickest way possible. Find and order
        your favorite cuisines across Vietnam - order food online in just a few
        taps, from Lifted Coffee & Brunch - Hàng Gà for Breakfast, Maazi Indian
        - Nhà Hàng Ấn Độ for Lunch, Bún Cá Chấm Gốc Đa - Vũ Thạnh for Dinner! We
        are here to satisfy your hunger with a wide selection of merchant
        partners in Vietnam.
      </section>

      <div className={showMore ? "" : "hidden"}>
        <hr style={{ margin: "20px" }}></hr>
        <h3
          style={{ marginTop: "20px", marginLeft: "20px", fontWeight: "bold" }}
        >
          How to order Grabfood online?
        </h3>
        <section>
          Here is the easiest way to order food from GrabFood in Singapore:
        </section>
        <div style={{ margin: "10px 40px" }}>
          <p>
            1.
            <strong> Search your favorite restaurant or the dish</strong>- Enter
            your address on the home page. Look at the GrabFood Listed
            Restaurants and Food spots near you. Pick your favorite restaurant
            and browse through the menu and select the dish you want to order.
          </p>
          <p>
            2.
            <strong> Checkout & Payment</strong>- Once sure that you are
            ordering enough, click on the "ORDER NOW" tab and enter your final
            food delivery address. Choose the payment method that best suits
            you, and checkout.
          </p>
          <p>
            3.
            <strong> Delivery </strong>- GrabFood has designed a seamless
            customer journey for you, so you can enjoy your food hassle-free. We
            will send you an instant email and SMS confirming your order and
            expected delivery time. Your food is then on its way.
          </p>
        </div>
        <hr style={{ margin: "20px" }}></hr>
        <h3
          style={{ marginTop: "20px", marginLeft: "20px", fontWeight: "bold" }}
        >
          Does GrabFood provide food delivery 24x7?
        </h3>
        <section>
          We understand only one language - food, so yes, we do.. Please note,
          though we are here as your 24x7 food partners, few of our listed
          restaurants may have late-night food delivery restrictions or may be
          unavailable for orders. But we have listed the ones that love your
          late-night binging in our Late Night Delivery Section.
        </section>
        <hr style={{ margin: "20px" }}></hr>
        <h3
          style={{ marginTop: "20px", marginLeft: "20px", fontWeight: "bold" }}
        >
          Does GrabFood accept Cash?
        </h3>
        <section>
          We understand only one language - food, so yes, we do.. Please note,
          though we are here as your 24x7 food partners, few of our listed
          restaurants may have late-night food delivery restrictions or may be
          unavailable for orders. But we have listed the ones that love your
          late-night binging in our Late Night Delivery Section.
        </section>
        <hr style={{ margin: "20px" }}></hr>
        <h3
          style={{ marginTop: "20px", marginLeft: "20px", fontWeight: "bold" }}
        >
          Can I pay online on GrabFood for my food orders?
        </h3>
        <section>
          GrabFood accepts multiple forms of payments for online food orders,
          including online payments in Vietnam using a credit or debit card,
          PayPal or cash on delivery. We recommend using
          <a style={{ textDecoration: "none" }} href="#">
            {" "}
            Moca{" "}
          </a>
          so you can earn more
          <a style={{ textDecoration: "none" }} href="#">
            {" "}
            rewards points
          </a>
          , which you can use for discounts on your next order and on other Grab
          services.
        </section>
        <hr style={{ margin: "20px" }}></hr>
        <h3
          style={{ marginTop: "20px", marginLeft: "20px", fontWeight: "bold" }}
        >
          Can I order GrabFood for someone else?
        </h3>
        <section>page_home.seo.vn.faq.order_for_others.content</section>
        <hr style={{ margin: "20px" }}></hr>
        <h3
          style={{ marginTop: "20px", marginLeft: "20px", fontWeight: "bold" }}
        >
          How much does GrabFood charge for delivery?
        </h3>
        <section>
          Our delivery fee depends on a lot of operational factors like distance
          from your location to the restaurant. You can check the exact amount
          you are paying as delivery charges before checking out on the Grab
          app. There is also a “Free Delivery” section that lists restaurants
          near you that don’t charge for delivery.
        </section>
        <hr style={{ margin: "20px" }}></hr>
        <h3
          style={{ marginTop: "20px", marginLeft: "20px", fontWeight: "bold" }}
        >
          Which restaurants are listed in GrabFood?
        </h3>
        <section>
          What don’t we have on GrabFood? We boast the widest variety of
          restaurants and cuisines of any food delivery app in Vietnam. You can
          choose from thousands of restaurants on GrabFood Vietnam. You can
          order food online from all your favorite food spots from Burger King,
          Jollibee, KFC, McDonalds, Long John Silver, Pastamania, Dominos Pizza,
          Pizza Hut, Subway, and many many more!
          <br /> GrabFood also runs exclusive limited time promotions, deals and
          discounts for our listed restaurants. You can enjoy huge savings and
          tons of other offers on your food orders. Time to order now!
        </section>
        <hr style={{ margin: "20px" }}></hr>
        <h3
          style={{ marginTop: "20px", marginLeft: "20px", fontWeight: "bold" }}
        >
          Does GrabFood have a minimum order?
        </h3>
        <section>
          Yes! But you can pay the difference if your order is less than the
          minimum order amount.
        </section>
      </div>
      {!showMore && (
        <div className="d-grid gap-2" style={{ margin: "20px 20px" }}>
          <button
            onClick={toggleShowMore}
            id="see-all"
            type="button"
            className="btn btn-primary"
          >
            Read More{" "}
          </button>
        </div>
      )}
    </div>
  );
};
export default Info;
