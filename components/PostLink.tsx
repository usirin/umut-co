import React from "react";
import Link from "./Link";

interface PostLinkProps {
  slug: string;
  children: React.ReactNode;
}

const PostLink: React.FC<PostLinkProps> = ({ slug, children = slug }) => {
  return (
    <Link href={`/blog/[slug]`} as={`/blog/${slug}`}>
      {children}
    </Link>
  );
};

export default PostLink;
