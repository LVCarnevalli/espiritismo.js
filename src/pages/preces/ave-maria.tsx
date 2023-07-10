import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../../components/layout";
import SEO from "../../components/seo";

const AveMariaPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="grid grid-cols-6 h-full">
        <div className="col-start-1 col-span-7 sm:col-start-2 sm:col-span-4 text-center">
          <span className="headline hl1">AVE MARIA</span>
          <p className="font-normal text-lg sm:text-base pt-8">
            Ave Maria,
            <br />
            Cheia de graça,
            <br />
            Senhor convosco,
            <br />
            Bendita sois vós,
            <br />
            Entre as mulheres,
            <br />
            E bendito o fruto,
            <br />
            Do vosso ventre, Jesus.
            <br />
            Maria, mãe de Jesus,
            <br />
            Rogai por nós,
            <br />
            Espíritos em evolução,
            <br />
            Agora e na hora de nossa passagem para a dimensão espiritual.
          </p>
          <br />
          <div className="font-light text-base sm:text-sm">
            Prece Ave Maria adaptada para as realidades espirituais ensinadas
            pela Doutrina Espírita.
          </div>
          <br />
        </div>
      </div>
    </Layout>
  );
};

export default AveMariaPage;

export const Head: HeadFC = () => <SEO title="Ave Maria" />;
