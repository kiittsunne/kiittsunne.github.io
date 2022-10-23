import React from "react";
import { graphql, HeadFC, Link } from "gatsby";
import * as homepage from "../styles/homepage/index.module.scss";
import Layout from "../components/layout";
import Hyuji from "../components/hyuji";
import Skillbox from "../components/skillbox";

export const query = graphql`
  {
    allDataJson {
      nodes {
        id
        skills {
          title
          elaboration
          cubeDown
          cubeUp
          decorTop
          decorBottom
        }
      }
    }
    allFile(filter: { extension: { eq: "png" }, name: { glob: "skill*" } }) {
      nodes {
        name
        publicURL
      }
    }
  }
`;

const Home = ({ data }: any) => {
  const skillBoxContents = data.allDataJson.nodes[0].skills;
  const skillBoxImgs = data.allFile.nodes;

  const skillBoxData = skillBoxContents.map((node: any) => {
    let obj = node;
    for (let img of skillBoxImgs) {
      img.name === node.cubeUp && (obj.cubeUp = img.publicURL);
      img.name === node.cubeDown && (obj.cubeDown = img.publicURL);
    }
    return obj;
  });

  return (
    <Layout>
      <>
        <div className={homepage.titleblock}>
          <h1>
            Software Engineer <span>Frontend Developer</span>
          </h1>
          <Hyuji />
        </div>

        <section id="skills" className={homepage.container}>
          <h2 className={homepage.sectionHeader}>
            <span className={homepage.hashtag}>#</span>
            <span className={homepage.title}> skills</span>
          </h2>
          <div className={homepage.skillblock}>
            {skillBoxData.map((box: any) => (
              <Skillbox {...box} />
            ))}
          </div>
        </section>

        <section id="about" className={homepage.container}>
          <h2 id="about" className={homepage.sectionHeader}>
            <span className={homepage.hashtag}>#</span>
            <span className={homepage.title}> about me</span>
          </h2>
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

          <div className={homepage.aboutBtns}>
            <Link to="/projects">
              <button>Peep my Projects</button>
            </Link>
            <button>Download my CV</button>
          </div>
        </section>
      </>
    </Layout>
  );
};

export default Home;

export const Head: HeadFC = () => <title>Kit's Portfolio</title>;
