import React from "react";
import type { HeadFC } from "gatsby";
import * as homepage from "../styles/homepage/index.module.scss";
import Layout from "../components/layout";
import Hyuji from "../components/hyuji";

const Home = () => {
  return (
    <Layout>
      <>
        <div className={homepage.titleblock}>
          <h1>Hi! I'm a</h1>
          <h2>JavaScript / TypeScript Software Engineer</h2>
          <p>Ex-Shopee Product Ops | Ex-🇸🇬 Public Service</p>
          <Hyuji />
        </div>

        <article id="about">
          <p>
            I graduated from the National University of Singapore (Political
            Science major, Public Health minor) in 2020 – directly into my
            country's COVID-19 lockdown.
          </p>
          <p>
            Having always had a deep love for tech and things to tinker with, I
            embarked on a whirlwind non-linear 2-year journey.
          </p>
          <p>
            I got to observe the boardrooms of the policy world as a public
            servant (MCI), and braved the 24/7 battleground of tech/business
            operations (Shopee).
          </p>
          <p>
            In each of these roles, I relished the challenge of learning to read
            and navigate complex systems - both technical and organisational.{" "}
          </p>
          <p>
            {" "}
            Working shoulder to shoulder with developers every day at Shopee
            allowed me a window into the world of software engineering. Their
            encouragement gave me confidence to enrol in General Assembly's
            full-time Software Engineering Intensive, and finally pivot towards
            a career in engineering
          </p>
        </article>

          <div className={homepage.aboutBtns}>
            <Link to="/projects">
              <button>Peep my Projects</button>
            </Link>
            <a href={file} download>
              <button>Download my CV</button>
            </a>
          </div>
        </section>
      </>
    </Layout>
  );
};

export default Home;

export const Head: HeadFC = () => <title>Kit's Portfolio</title>;
