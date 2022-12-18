import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Reader from "../../components/olivrodosespiritos/reader";
import SEO from "../../components/seo";

const DynamicPage: React.FC<PageProps> = () => {
  return <Reader dynamic />;
};

export default DynamicPage;

export const Head: HeadFC = () => (
  <SEO title="O Livro dos Espíritos" pathname="/olivrodosespiritos/dynamic/" />
);
