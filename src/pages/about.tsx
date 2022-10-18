import React from "react";
import Layout from "../components/layout";
import email from "../images/email.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";

const About = () => {
  return (
    <Layout>
      <article>
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
          full-time Software Engineering Intensive, and finally pivot towards a
          career in engineering
        </p>

        <div>
          <a
            href="https://github.com/kiittsunne"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github" />
          </a>
          <a
            href="mailto:chowkitying@outlook.com?subject=Hey%20Kit,%20Saw%20Your%20Website"
            target="_blank"
          >
            <img src={email} alt="email" />
          </a>
          <a
            href="https://www.linkedin.com/in/chowkitying/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
        </div>
      </article>
    </Layout>
  );
};

export default About;
