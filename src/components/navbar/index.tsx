import React, { useState } from "react";
import { isMobile } from "react-device-detect";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import navitems from "./navdata.json";
import cubeUp from "../../images/cubeUp.png";
import cubeDown from "../../images/cubeDown.png";
import * as navbar from "./index.module.scss";

type NavButtonProps = {
  id: string;
  title: string;
  link: string;
};

const NavButton = (props: NavButtonProps) => (
  <AnchorLink to={props.link}>
    <div>
      <p>{props.id}</p>
      <h4>{props.title}</h4>
    </div>
  </AnchorLink>
);

const Navbar = () => {
  const [isHover, setIsHover] = useState(cubeUp);
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className={navbar.wrapper}>
      <header
        className={navbar.title}
        onMouseEnter={() => {
          setIsHover(cubeDown);
        }}
        onMouseLeave={() => {
          setIsHover(cubeUp);
        }}
      >
        <Link to="/">
          <img src={isHover} alt="Logo" />
          <h1>Kit Chow</h1>
        </Link>
      </header>
      <section className={navbar.icons}>
        {isMobile && (
          <>
            <div
              className={navbar.mobileMenuButton}
              onClick={() => {
                setOpenMenu((prev) => !prev);
              }}
            >
              {openMenu ? "×" : "Ξ"}
            </div>
            {openMenu && (
              <div className={navbar.mobileMenuWrapper}>
                {navitems.map((item: NavButtonProps) => (
                  <NavButton {...item} />
                ))}
              </div>
            )}
          </>
        )}
        {!isMobile &&
          navitems.map((item: NavButtonProps) => <NavButton {...item} />)}
      </section>
    </nav>
  );
};

export default Navbar;
