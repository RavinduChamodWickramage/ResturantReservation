import React from "react";
// import restApiData from "../restApi.json";
import { ourQualities } from "../data";

const Qualities = () => {
  // // Ensure data is not undefined and has at least one element before accessing it
  // const ourQualities =
  //   restApiData && restApiData.ourQualities ? restApiData.ourQualities : [];

  return (
    <>
      <section className="qualities" id="qualities">
        <div className="container">
          {ourQualities.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <p className="title">{element.title}</p>
                <p className="description">{element.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Qualities;
