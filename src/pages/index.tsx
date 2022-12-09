import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";

const IndexPage: React.FC<PageProps> = () => {
  return <Layout>{}</Layout>;
};

export default IndexPage;

export const IndexHead: HeadFC = () => <title>Index</title>;
