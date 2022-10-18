//@ts-ignore
import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          title
          slug
          github
          description
          demo
        }
        id
      }
    }
  }
`;

const Projects = ({ data }: { data: any }) => {
  return (
    <Layout>
      <>
        <div>
          {data.allMdx.nodes.map(
            (node: {
              frontmatter: {
                title: string;
                description?: string;
                slug: string;
                github: string;
                demo?: string;
              };
              id: string;
            }) => (
              <article key={node.id}>
                <h1>
                  <Link to={`/projects/${node.frontmatter.slug}`}>
                    {node.frontmatter.title}
                  </Link>
                </h1>
              </article>
            )
          )}
        </div>
      </>
    </Layout>
  );
};

export default Projects;
