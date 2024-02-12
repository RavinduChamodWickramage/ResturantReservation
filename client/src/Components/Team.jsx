import React from "react";
// import data from "../restApi.json";
import { team } from "../data";

const Team = () => {
  // // Ensure data is not undefined and has at least one element before accessing it
  // const teamData = data && data.length > 0 ? data[0].team : [];

  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
            At Foodies, our team is the heartbeat of our operation, comprising
            passionate individuals dedicated to delivering culinary excellence
            and exceptional service. From our seasoned chefs crafting delectable
            dishes to our attentive servers ensuring a seamless dining
            experience, each member brings a unique blend of talent, creativity,
            and professionalism to the table. United by a shared love for
            gastronomy and a commitment to exceeding expectations, our diverse
            team embodies the spirit of collaboration and innovation. Together,
            we strive to create memorable moments for our guests, turning every
            meal into a culinary journey to remember.
          </p>
        </div>
        <div className="team_container">
          {team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
