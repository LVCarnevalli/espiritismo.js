import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../../components/layout";
import SEO from "../../components/seo";

const PaiNossoPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="grid grid-cols-6 h-full">
        <div className="col-start-1 col-span-7 sm:col-start-2 sm:col-span-4 text-center">
          <span className="headline hl1">PAI NOSSO</span>
          <p className="font-normal text-lg sm:text-base pt-8">
            Pai Nosso, que estais no céu, santificado seja o vosso nome;
            <br />
            Venha a nós o vosso Reino;
            <br />
            Seja feita a vossa vontade, assim na terra como no céu.
            <br />
            O pão nosso de cada dia nos dai hoje;
            <br />
            Perdoai as nossas ofensas, assim como nós perdoamos aos que nos
            ofenderam;
            <br />E não nos deixeis cair em tentação, mas livrai-nos do mal.
          </p>
          <br />
          <div className="font-light text-base sm:text-sm">
            Prece ditada por nosso Divino Mestre Jesus.
          </div>
          <br />
        </div>
      </div>
    </Layout>
  );
};

export default PaiNossoPage;

export const Head: HeadFC = () => <SEO title="Pai Nosso" />;
