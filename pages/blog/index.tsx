import React from "react";
import { NextPage } from "next";
import PostLink from "../../components/PostLink";
import Layout from "../../components/Layout";

import posts from "./posts";

const BlogIndex: NextPage = () => {
  return (
    <Layout>
      <h2>Posts</h2>
      {Object.entries(posts).map(([slug, post]) => (
        <li key="slug">
          <PostLink slug={slug}>{post.title}</PostLink>
        </li>
      ))}
    </Layout>
  );
};

export default BlogIndex;
