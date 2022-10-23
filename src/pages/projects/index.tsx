//@ts-ignore
import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import ProjectCard from "../../components/projectcard";
import * as projecthome from "../../styles/projectindex/index.module.scss";

export const query = graphql`
  query {
    allMdx(
      filter: { frontmatter: { published: { eq: true } } }
      sort: { fields: frontmatter___id, order: ASC }
    ) {
      nodes {
        frontmatter {
          byline
          demo
          description
          github
          technologies
          title
          slug
        }
        id
      }
    }
  }
`;

type nodeProp = {
  frontmatter: {
    title: string;
    description?: string;
    slug: string;
    github: string;
    demo?: string;
  };
  id: string;
};

const Projects = ({ data }: { data: any }) => {
  return (
    <Layout>
      <div className={projecthome.container}>
        <h1>Projects</h1>
        <div className={projecthome.wrapper}>
          {data.allMdx.nodes.map((node: nodeProp) => (
            <ProjectCard key={node.id} {...node.frontmatter} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
