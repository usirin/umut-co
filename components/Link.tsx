import React from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";

export type LinkProps = NextLinkProps;

const Link: React.FC<LinkProps> = ({ children, ...props }) => {
  return (
    <NextLink {...props}>
      <a>{children}</a>
    </NextLink>
  );
};

export default Link;
