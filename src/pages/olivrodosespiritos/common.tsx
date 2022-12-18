import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Reader from "../../components/olivrodosespiritos/reader";
import SEO from "../../components/seo";

const CommonPage: React.FC<PageProps> = () => {
  return <Reader />;
};

export default CommonPage;

export const Head: HeadFC = () => (
  <SEO title="O Livro dos Espíritos" pathname="/olivrodosespiritos/common/" />
);
