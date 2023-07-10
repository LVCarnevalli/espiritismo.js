import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import LaunchIcon from "@mui/icons-material/Launch";
import JesusGIF from "../images/Jesus.gif";
import "../styles/newspaper.css";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="grid grid-cols-6 h-full">
        <div className="col-start-1 col-span-7 content">
          <div className="collumns">
            <div className="collumn w-1/4">
              <div className="head">
                <span className="headline hl1">Perguntas e respostas</span>
                <p>
                  <span className="headline">O livro dos espíritos</span>
                </p>
              </div>
              <p className="text-justify">
                As perguntas e respostas foram retiradas da obra do Kardec "O
                Livro dos Espíritos", é possível fazer a leitura por três modos:
              </p>
              <Link to="/olivrodosespiritos/common">
                <p>
                  <div className="head">
                    <span className="headline hl3">
                      <LaunchIcon color="inherit" /> Questões comuns
                    </span>
                  </div>
                </p>
                <p className="text-justify">
                  Modo que exibe as questões sequencialmente.
                </p>
              </Link>
              <Link to="/olivrodosespiritos/dynamic">
                <p>
                  <div className="head">
                    <span className="headline hl3">
                      <LaunchIcon color="inherit" /> Questões dinâmicas
                    </span>
                  </div>
                </p>
                <p className="text-justify">
                  Leia sem compromisso, modo que exibe as questões
                  aleatoriamente.
                </p>
              </Link>
              <Link to="">
                <p>
                  <div className="head">
                    <span className="headline hl3">
                      <LaunchIcon color="inherit" /> Categorias
                    </span>
                  </div>
                </p>
                <p className="text-justify">
                  <span className="font-bold">EM BREVE:</span> Busque por
                  categoria, leia as questões da categoria escolhida.
                </p>
              </Link>
            </div>
            <Link to="">
              <div className="collumn w-1/4">
                <div className="head">
                  <span className="headline hl5">O Evangelho</span>
                  <p>
                    <span className="headline">
                      O evangelho segundo o espiritismo
                    </span>
                  </p>
                </div>
                <p className="text-justify">
                  <LaunchIcon color="inherit" />{" "}
                  <span className="font-bold">EM BREVE:</span> Passagens de
                  Jesus com explicações dos espíritos retirados da obra do
                  Kardec "O Evangelho Segundo o Espiritismo".
                </p>
                <figure className="figure">
                  <img
                    className="media dark:mix-blend-exclusion"
                    src={JesusGIF}
                    alt="Jesus"
                  />
                  <figcaption className="figcaption">Jesus</figcaption>
                </figure>
              </div>
            </Link>
            <Link to="/kardec">
              <div className="collumn w-1/4">
                <div className="head">
                  <span className="headline hl1">Kardec</span>
                  <p>
                    <span className="headline hl2">O codificador</span>
                  </p>
                </div>
                <p className="text-justify">
                  <LaunchIcon color="inherit" /> Hippolyte Léon Denizard Rivail
                  era um professor cético, autor de livros pedagógicos na França
                  do século XIX, até ver mesas girarem no ar e ditarem, ao som
                  de pancadas, mensagens atribuídas ao além.{" "}
                  <span className="font-bold">Conheça quem foi Kardec...</span>
                </p>
                <span className="citation">
                  "Todo efeito tem uma causa. Todo efeito inteligente tem uma
                  causa inteligente. O poder da causa inteligente está na razão
                  da grandeza do efeito."
                </span>
              </div>
            </Link>
            <div className="collumn w-1/4">
              <div className="head">
                <span className="headline hl3">Preces</span>
              </div>
              <p className="headline hl11">
                <Link to="/preces/pai-nosso">Pai Nosso</Link>
                <br />
                <Link to="/preces/ave-maria">Ave Maria</Link>
                <br />
                <Link to="/preces/caritas">Cáritas</Link>
              </p>
              <p />
              <div className="head">
                <span className="headline hl2">Quem somos</span>
              </div>
              <p />
              <p className="text-justify">
                O aplicativo{" "}
                <span className="title dark:text-white">ESPIRITISMO</span> se
                baseia nas obras de Allan Kardec com a tradução e notas do J.
                Herculano Pires sem fins lucrativos. A utilização e leitura
                através do aplicativo não dispensa a leitura das obras de Allan
                Kardec.
              </p>
            </div>
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
