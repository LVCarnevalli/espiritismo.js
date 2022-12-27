import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Reader from "../../components/olivrodosespiritos/reader";
import { useQueryParamString } from "react-use-query-param-string";
import SEO from "../../components/seo";

const SharePage: React.FC<PageProps> = () => {
  const [idParam, setIdParam, initialized] = useQueryParamString("id", "");

  return (initialized && <Reader id={idParam} view />) || null;
};

export default SharePage;

export const Head: HeadFC = () => (
  <SEO title="O Livro dos Espíritos" pathname="/olivrodosespiritos/share/" />
);
