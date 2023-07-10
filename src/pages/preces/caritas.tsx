import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../../components/layout";
import SEO from "../../components/seo";

const CaritasPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="grid grid-cols-6 h-full">
        <div className="col-start-1 col-span-7 sm:col-start-2 sm:col-span-4 text-center">
          <span className="headline hl1">CÁRITAS</span>
          <p className="font-normal text-lg sm:text-base pt-8">
            Deus nosso Pai, que Sois todo poder e bondade, dai força àqueles que
            passam pela provação, dai luz àqueles que procuram a verdade, e
            ponde no coração do homem a compaixão e a caridade.
            <br />
            Deus, dai ao viajante a estrela Guia, ao aflito a consolação, ao
            doente o repouso.
            <br />
            Pai, dai ao culpado o arrependimento, ao espírito, a verdade, à
            criança o guia, ao órfão, o pai.
            <br />
            Que a vossa bondade se estenda sobre tudo que criaste.
            <br />
            Piedade, Senhor, para aqueles que não Vos conhecem, e esperança para
            aqueles que sofrem.
            <br />
            Que a Vossa bondade permita aos espíritos consoladores, derramarem
            por toda à parte a paz, a esperança e a fé.
            <br />
            Deus, um raio, uma faísca do Vosso divino amor pode abrasar a Terra,
            deixai-nos beber na fonte dessa bondade fecunda e infinita, e todas
            as lágrimas secarão, todas as dores acalmar-se-ão.
            <br />
            Um só coração, um só pensamento subirá até Vós, como um grito de
            reconhecimento e de amor.
            <br />
            Como Moisés sobre a montanha, nós Vos esperamos com os braços
            abertos.
            <br />
            Oh! bondade, Oh! Poder, Oh! beleza, Oh! perfeição, e queremos de
            alguma forma alcançar a Vossa misericórdia.
            <br />
            Deus,
            <br />
            Dai-nos a força no progresso de subir até Vós, dai-nos a caridade
            pura, dai-nos a fé e a razão, dai-nos a simplicidade que fará de
            nossas almas o espelho onde se refletirá a vossa imagem.
          </p>
          <br />
          <div className="font-light text-base sm:text-sm">
            Mme. W. Krill ditado por Cáritas.
          </div>
          <br />
        </div>
      </div>
    </Layout>
  );
};

export default CaritasPage;

export const Head: HeadFC = () => <SEO title="Pai Nosso" />;
