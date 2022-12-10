import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Reader from "../../components/olivrodosespiritos/reader";

const DynamicPage: React.FC<PageProps> = () => {
  return <Reader dynamic />;
};

export default DynamicPage;

export const DynamicHead: HeadFC = () => <title>O Livro dos Espíritos</title>;
