import React from "react";
import { NextPage } from "next";
import PostLink from "../components/PostLink";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <PostLink slug="hello-world">Hello World</PostLink>
    </Layout>
  );
};

export default Home;
