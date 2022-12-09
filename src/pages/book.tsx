import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Question from "../components/question";
import Layout from "../components/layout";

const BookPage: React.FC<PageProps> = () => {
  const slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  return (
    <Layout>
      <Question slides={slides} />
    </Layout>
  );
};

export default BookPage;

export const BookHead: HeadFC = () => <title>Book</title>;
