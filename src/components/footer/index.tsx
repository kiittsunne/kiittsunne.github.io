import React, { useState } from "react";
import cubeUp from "../../images/cubeUp.png";
import cubeDown from "../../images/cubeDown.png";
import * as footer from "./index.module.scss";
import footerItems from "./footerdata.json";
import { Link } from "gatsby";

type FooterProps = {
  name: string;
  link: string;
  image: string;
};

const NavButton = (props: FooterProps) => (
  <a href={props.link}>
    <img src={props.image} alt={props.name} />
  </a>
);

const Footer = () => {
  const [isHover, setIsHover] = useState(cubeUp);

  return (
    <nav className={footer.wrapper}>
      <section className={footer.icons}>
        {footerItems.map((item: FooterProps) => (
          <NavButton {...item} />
        ))}
      </section>
      <footer
        className={footer.title}
        onMouseEnter={() => {
          setIsHover(cubeDown);
        }}
        onMouseLeave={() => {
          setIsHover(cubeUp);
        }}
      >
        <Link to="/">
          <p>Kit Chow {new Date().getFullYear()}</p>
          <img src={isHover} alt="Logo" />
        </Link>
      </footer>
    </nav>
  );
};

export default Footer;
