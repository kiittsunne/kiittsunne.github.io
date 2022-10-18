import React, { Dispatch, SetStateAction } from "react";
import { Link, navigate } from "gatsby";
import cv from "../../images/license.png";
import me from "../../images/hello.png";
import projects from "../../images/portfolio.png";
import * as navbar from "./index.module.scss";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/dist/backdrop.css";
import "tippy.js/animations/shift-away.css";

const Navbar = () => {
  return (
    <nav className={navbar.wrapper}>
      <header className={navbar.title}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>Kit Chow</h1>
        </Link>
      </header>
      <section className={navbar.icons}>
        <Tippy content="Download my CV">
          <div id="downloadCv">
            <img src={cv} alt="download my cv" />
          </div>
        </Tippy>
        <div className={navbar.divider}></div>
        <Tippy content="About/Contact Me">
          <div>
            <Link to="/about">
              <img src={me} alt="about me" id="about" />
            </Link>
          </div>
        </Tippy>

        <Tippy content="My Projects">
          <div id="projects">
            <Link to="/projects">
              <img src={projects} alt="my projects" />
            </Link>
          </div>
        </Tippy>
      </section>
    </nav>
  );
};

export default Navbar;
