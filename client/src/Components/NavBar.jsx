import React, { useState } from "react";
// import restApiData from "../restApi.json";
import { navbarLinks } from "../data";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  // // Log the data object to inspect its contents
  // console.log(restApiData);

  // const [show, setShow] = useState(false);

  // // Check if data exists and has navbarLinks property before accessing it
  // const navbarLinks =
  //   restApiData && restApiData.navbarLinks ? restApiData.navbarLinks : [];
  const [show, setShow] = useState(false);

  const handleMenuButtonClick = () => {
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav>
        <div className="logo">Foodies</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
            ))}
          </div>
          <button
            className="menuBtn"
            onClick={() => {
              setShow(false);
              handleMenuButtonClick();
            }}
          >
            OUR MENU
          </button>
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
