import * as React from "react";
import Layout from "../../components/layout";
import _ from "lodash";
import type { HeadFC, PageProps } from "gatsby";
import SEO from "../../components/seo";
import ComponentQuestion from "../../components/olivrodosespiritos/question";

const View: React.FC<PageProps> = ({ pageContext }: any) => {
  return (
    <Layout>
      <ComponentQuestion
        view
        question={pageContext.question}
        id={pageContext.id}
        category={pageContext.category}
        answer={pageContext.answer}
      />
    </Layout>
  );
};

export default View;

export const Head: HeadFC = ({ pageContext }: any) => (
  <SEO
    title={pageContext.question}
    description={pageContext.answer.replaceAll(/(<([^>]+)>)/gi, "")}
    pathname={Path(pageContext.id)}
  />
);

export const Path = (id: string): string => `/olivrodosespiritos/${id}/`;
