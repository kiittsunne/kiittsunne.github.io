import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/layout";
import * as project from "../../styles/projects/index.module.scss";

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        demo
        github
        title
        byline
        technologies
      }
    }
  }
`;

const Post = ({ data, children }: { data: any; children: any }) => {
  const { frontmatter } = data.mdx;
  return (
    <Layout>
      <div className={project.wrapper}>
        <div className={project.frontmatter}>
          <h1 className={project.title}>
            <Link to="/projects">projects /</Link>
            <span>
              {frontmatter.title} | {frontmatter.byline}
            </span>
          </h1>
          <div className={project.referBtns}>
            <a href={frontmatter.github}>
              <button>/github</button>
            </a>
            {frontmatter.demo && (
              <a href={frontmatter.demo}>
                <button>/demo</button>
              </a>
            )}
          </div>
        </div>
        <div className={project.body}>{children}</div>
      </div>
    </Layout>
  );
};

export default Post;
