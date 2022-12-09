import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Reader from "../../components/olivrodosespiritos/reader";

const CommonPage: React.FC<PageProps> = () => {
  return <Reader />;
};

export default CommonPage;

export const CommonHead: HeadFC = () => <title>O Livro dos Espíritos</title>;
