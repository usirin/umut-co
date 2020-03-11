import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

import posts from "./posts";

const Post = () => {
  const router = useRouter();
  console.log({ router });

  const data = posts[router.query.slug as string];

  if (!data) {
    return null;
  }

  const { Component } = data;

  return (
    <Layout>
      <Component />
    </Layout>
  );
};

export default Post;
