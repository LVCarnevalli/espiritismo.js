import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Reader from "../../components/olivrodosespiritos/reader";
import { useQueryParamString } from "react-use-query-param-string";

const SharePage: React.FC<PageProps> = () => {
  const [idParam, setIdParam, initialized] = useQueryParamString("id", "");

  return <Reader id={idParam} />;
};

export default SharePage;

export const ShareHead: HeadFC = () => <title>O Livro dos Espíritos</title>;
