/// <reference types="next" />
/// <reference types="next/types/global" />
declare module "tailwind.macro";
declare module "*.mdx" {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}
