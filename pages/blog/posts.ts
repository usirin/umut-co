import React from "react";
import HelloWorld from "./hello-world.mdx";

export interface Post {
  slug: string;
  title: string;
  Component: any;
}

export interface Posts {
  [key: string]: Post;
}

const posts: Posts = {
  "hello-world": {
    slug: "hello-world",
    title: "Hello World",
    Component: HelloWorld
  }
};

export default posts;
