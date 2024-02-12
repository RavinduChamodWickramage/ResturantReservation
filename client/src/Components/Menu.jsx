import React from "react";
// import restApiData from "../restApi.json";
import { dishes } from "../data";

const Menu = () => {
  // // Ensure data is not undefined and has at least one element before accessing it
  // const dishes = restApiData && restApiData.dishes ? restApiData.dishes : [];

  return (
    <>
      <section className="menu" id="menu">
        <div className="container">
          <div className="heading_section">
            <h1 className="heading">POPULAR DISHES</h1>
            <p>
              Delve into a world of culinary delights with our selection of
              popular dishes, meticulously crafted to tantalize your taste buds
              and ignite your senses. From succulent roasted lamb rump to
              delicately citrus-cured salmon, each dish is a masterpiece of
              flavor and presentation. Indulge in the symphony of tastes and
              textures as you explore our menu, carefully curated to cater to
              every palate. Whether you're craving a hearty dinner or a light
              breakfast, our array of dishes promises a gastronomic journey like
              no other. Join us and savor the essence of culinary excellence
              with every bite.
            </p>
          </div>
          <div className="dishes_container">
            {dishes.map((element) => (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
                <button>{element.category}</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
