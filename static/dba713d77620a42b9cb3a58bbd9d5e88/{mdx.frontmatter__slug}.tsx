import React from "react";
import { graphql } from "gatsby";

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        slug
        demo
        description
        github
        title
      }
    }
  }
`;

const Post = ({ data, children }: { data: any; children: any }) => {
  return <div>{children}</div>;
};

export default Post;
