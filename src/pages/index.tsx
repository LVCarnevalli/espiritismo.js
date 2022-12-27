import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { OutboundLink } from "gatsby-plugin-google-gtag";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="grid grid-cols-6 h-full">
        <div className="col-start-1 col-span-7 sm:col-start-2 sm:col-span-4 text-justify text-lg sm:text-base">
          O aplicativo{" "}
          <span className="title dark:text-white">ESPIRITISMO</span> se baseia
          nas obras de Allan Kardec com a tradução e notas do J. Herculano Pires
          sem fins lucrativos. A utilização e leitura através do aplicativo não
          dispensa a leitura das obras de Allan Kardec.
          <div className="pt-8">
            No momento só é possível ler as questões do Livro dos Espíritos, as
            observações e resumos feitos pelo Kardec não estão inclusos, apenas
            as questões. Novas melhorias também foram feitas nessa versão, agora
            é possível você acessar de qualquer dispositivo, utilizar a tradução
            do navegador, PWA, tema escuro e muito mais em breve.
          </div>
        </div>
        <div className="col-start-1 col-end-7 flex flex-col justify-end p-4 text-sm text-center">
          <OutboundLink
            href="https://github.com/LVCarnevalli/espiritismo.js"
            target="blank"
          >
            GitHub
          </OutboundLink>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO title="Espiritismo" />;
