import React, { useEffect, useState } from "react";
import "./Nav.css";
import profileImg  from "../../assets/profileIcon.png"
import { Link } from "react-router-dom";

export default function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <Link to="/">
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158"
        alt="netflixLogo"
      />
      </Link>
      <Link to="/profile">
      <img className="profile_img" src={profileImg} alt="profileImg"/>
      </Link>
    </div>
  );
}
