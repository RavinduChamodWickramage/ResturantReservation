import React from "react";
// import data from "../restApi.json";
import { who_we_are } from "../data";

const WhoAreWe = () => {
  // // Ensure data is not undefined and has at least one element before accessing it
  // const whoWeAreData = data && data.length > 0 ? data[0].who_we_are : [];

  return (
    <>
      <section className="who_are_we" id="who_are_we">
        <div className="container">
          <div className="text_banner">
            {who_we_are.slice(0, 2).map((element) => (
              <div className="card" key={element.id}>
                <h1 className="heading" style={{ fontWeight: "300" }}>
                  {element.number}
                </h1>
                <p>{element.title}</p>
              </div>
            ))}
          </div>
          <div className="image_banner">
            <img
              className="gradient_bg"
              src="../Images/center.svg"
              alt="gradientBg"
            />
            <img src="../Images/whoweare.png" alt="food" />
          </div>
          <div className="text_banner">
            {who_we_are.slice(2).map((element) => (
              <div className="card" key={element.id}>
                <h1 className="heading" style={{ fontWeight: "300" }}>
                  {element.number}
                </h1>
                <p>{element.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoAreWe;
