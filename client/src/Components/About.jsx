import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              At Foodies, we are dedicated to providing unparalleled dining
              experiences to our esteemed guests. With a relentless focus on
              culinary mastery and guest satisfaction, we endeavor to curate
              unforgettable moments through our delectable offerings and
              impeccable service. Our team of seasoned chefs and attentive staff
              labor tirelessly to source the freshest ingredients and present
              each dish with finesse and precision. Whether you're joining us
              for a casual gathering or a special occasion, we extend a warm
              invitation to savor our innovative cuisine and inviting ambiance.
              Welcome to Foodies, where every meal promises an exquisite journey
              of flavor and indulgence.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="../Images/about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
