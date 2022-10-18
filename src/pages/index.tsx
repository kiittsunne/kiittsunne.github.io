import React from "react";
import type { HeadFC } from "gatsby";
import Layout from "../components/layout";
import Hyuji from "../components/hyuji";

const IndexPage = () => {
  return (
    <Layout>
      <>
        <summary>
          <h1>Hi! I'm a</h1>
          <h2>JavaScript / TypeScript Software Engineer</h2>
          <p>Ex-Shopee Product Ops | Ex-🇸🇬 Public Service</p>
        </summary>
        <Hyuji />
      </>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
