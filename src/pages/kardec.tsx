import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import KardecIMG from "../images/Kardec.jpeg";
import LivroAGeneseIMG from "../images/LivroAGenese.png";
import LivroObrasPostumasIMG from "../images/LivroObrasPostumas.png";
import LivroOCeuEOInfernoIMG from "../images/LivroOCeuEOInferno.png";
import LivroOEvangelhoSegundoEspiritismoIMG from "../images/LivroOEvangelhoSegundoEspiritismo.png";
import LivroOLivroDosEspiritosIMG from "../images/LivroOLivroDosEspiritos.png";
import LivroOLivroDosMediunsIMG from "../images/LivroOLivroDosMediuns.png";
import LivroOQueEEspiritismoIMG from "../images/LivroOQueEEspiritismo.png";
import RevistaEspiritaIMG from "../images/RevistaEspirita.png";
import "../styles/newspaper.css";

const KardecPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="grid grid-cols-6 h-full">
        <div className="col-start-1 col-span-7 content text-justify">
          <div className="collumns">
            <div className="collumn w-1/5">
              <div className="head">
                <span className="headline hl3">História</span>
              </div>
              <figure className="figure">
                <img
                  className="media mix-blend-multiply dark:mix-blend-exclusion w-full"
                  src={KardecIMG}
                  alt="Revista Espírita"
                />
                <figcaption className="figcaption">Kardec</figcaption>
              </figure>
              <p>
                <span className="font-bold">
                  Hippolyte Léon Denizard Rivail
                </span>{" "}
                era um professor cético, autor de livros pedagógicos na França
                do século XIX, até ver mesas girarem no ar e ditarem, ao som de
                pancadas, mensagens atribuídas ao além. Uma batida, letra A,
                duas batidas, letra B, e assim sucessivamente até se formar
                frases e textos inteiros, assinados por mortos ilustres ou
                anônimos.
              </p>
              <p>
                Fraude? Hipnose coletiva? Autossugestão? Energia manipulada
                pelos vivos... Ou pelos mortos? O que estaria por trás daqueles
                fenômenos testemunhados por multidões na Europa, e reverenciados
                por celebridades?
              </p>
              <p>Foi o que o professor decidiu descobrir.</p>
              <p>
                Aos 53 anos, depois de pôr à prova o invisível, Rivail mudou de
                vida e de nome para dar voz aos espíritos. Tornou-se Allan
                Kardec, uma figura cada vez mais conhecida, admirada... E
                perseguida.
              </p>
              <p>
                O que transformou um cético em um divulgador e codificador de
                uma doutrina? O que o convenceu a acreditar que os mortos
                estavam vivos e se comunicavam através de médiuns? O que o fez
                enfrentar adversários ferrenhos, da Igreja e da imprensa, para
                levar ao maior número de leitores sua fé na sobrevivência do
                espírito?
              </p>
              <p>
                Allan Kardec, nome adotado por ele, veio de um comunicação com
                seres incorpóreos que diziam ser esse o nome do professor
                Denizard, numa existência passada entre os povos celtas. Sendo
                assim, o professor decidiu adotar o nome Allan Kardec.
              </p>
              <p>
                Quando Kardec começou a participar das sessões de mesas
                girantes, mesas que recebiam pancadas, o ceticismo
                característico de sua personalidade estava alinhado ao rigor
                racional e científico. Assim sendo, num primeiro momento, ele
                rejeitou tais fenômenos. Mas, por insistências de conhecidos,
                participou e verificou que havia algo muito mais importante do
                que o fenômeno em si, ou seja, havia uma comunicação
                estabelecida, havia uma mente, uma inteligência por trás
                daqueles movimentos, daquelas batidas.
              </p>
              <p>
                Nesse momento, a participação de Kardec foi de tentar uma
                comunicação racional e perguntas foram feitas para que ele
                chegasse a conclusões, utilizando-se de um método, pois, apesar
                de, naquela época, existir fenômenos reais, existia um grande
                número de charlatões que aproveitavam-se para enganar e ter
                benefícios, tanto de prestígio quanto financeiro.
              </p>
              <p>
                Era uma época onde a ciência, a filosofia, a sociologia, a
                antropologia desenvolviam-se buscando entender o homem, a vida,
                o universo e o método e pensamento científicos tinham suas bases
                na lógica, razão e metodologia, que pudessem garantir
                consistências à quaisquer fenômenos apresentados.
              </p>
              <p>
                Kardec aplicou o método baseando-se nessas premissas
                científicas, buscando através de perguntas profundas e
                importantes, encontrar respostas racionais, através de várias
                pessoas, em vários lugares, que intermediaram esses fenômenos,
                posteriormente, chamados por ele de médiuns.
              </p>
              <p>
                A conclusão foi que seres incorpóreos registravam ideias e
                conceitos lógicos e ficou bem claro e cristalino o fato de serem
                "seres humanos" que "viviam" numa dimensão existencial próxima
                da nossa, a "Dimensão Corpórea". Esses seres foram denominados
                por ele, através da codificação da Doutrina Espírita, como
                Espíritos. Espíritos que viveram no nosso mundo corpóreo e que
                continuavam suas vidas nessa outra dimensão existencial, a
                "Dimensão Espiritual".
              </p>
              <p>
                Desse estudo crítico e pormenorizado, surgiu a Doutrina Espírita
                e tudo mais que se sucedeu na vida desse grande homem chamado
                Allan Kardec.
              </p>
              <span className="citation">
                "Todo efeito tem uma causa. Todo efeito inteligente tem uma
                causa inteligente. O poder da causa inteligente está na razão da
                grandeza do efeito."
              </span>
              <p className="font-light">
                Resumo escrito por nós do aplicativo Espiritismo com referências
                do livro "Kardec - A Biografia" autor "Maior, Marcel Souto".
                <br />
                Para maior entendimento você pode procurar o livro ou assistir o
                filme do Kardec que está disponível nas plataformas digitais
                como a Netflix.
              </p>
            </div>
            <div className="collumn w-1/5">
              <div>
                <div className="head">
                  <span className="headline hl5">
                    O Evangelho Segundo Espiritismo
                  </span>
                </div>
                "O Evangelho segundo o Espiritismo" é um dos cinco livros que
                constituem o corpo doutrinário do Espiritismo. "O Evangelho
                segundo o Espiritismo" é o ensino moral do Cristo Jesus para os
                cristãos de qualquer crença, desenvolvido pelos Espíritos de Luz
                em comunicações mediúnicas recolhidas, organizadas, comentadas e
                trazidas a público pelo Codificador Allan Kardec. Se o leitor é
                cristão, leia com aplicação o ensino moral do Mestre Jesus para
                a Humanidade sofredora e dê-se conta de conteúdos que talvez
                nunca antes tenha percebido, ou compreendido plenamente. Se não
                é cristão, mas um espírito indagador, leia com respeito a
                orientação desse Espírito divino, dada há dois mil anos e sempre
                atual, em seu caráter educativo, motivador e consolador.
                <p />
                <OutboundLink
                  href="https://www.febnet.org.br/wp-content/uploads/2012/07/WEB-O-Evangelho-segundo-o-Espiritismo-Guillon.pdf"
                  target="blank"
                >
                  <figure className="figure">
                    <img
                      className="media mix-blend-multiply dark:mix-blend-exclusion h-40 ml-auto mr-auto"
                      src={LivroOEvangelhoSegundoEspiritismoIMG}
                      alt="O Evangelho Segundo Espiritismo"
                    />
                    <figcaption className="figcaption">
                      Livro "O Evangelho Segundo Espiritismo"
                    </figcaption>
                  </figure>
                </OutboundLink>
              </div>
              <div>
                <div className="head">
                  <span className="headline hl5">O Livro Dos Espíritos</span>
                </div>
                Dos cinco livros fundamentais que compõem a Codificação do
                Espiritismo, este foi o primeiro, reunindo os ensinos dos
                Espíritos Superiores através de médiuns de várias partes do
                Mundo. Ele é o marco inicial de uma Doutrina que trouxe uma
                profunda repercussão no pensamento e na visão de vida de
                considerável parcela da Humanidade, desde 1857, data da primeira
                edição francesa. Estruturado em quatro partes e contendo 1.019
                perguntas formuladas pelo Codificador, aborda os ensinamentos
                espíritas, de uma forma lógica e racional, sob os aspectos
                científico, filosófico e religioso. Independentemente de crença
                ou convicção religiosa, a leitura de "O Livro dos Espíritos"
                será de imenso valor para todos, porque trata de Deus, da
                imortalidade da alma, da natureza dos Espíritos, de suas
                relações com os homens, das leis morais, da vida presente, da
                vida futura e do porvir da Humanidade, assuntos de interesse
                geral e de grande atualidade.
                <p />
                <OutboundLink
                  href="https://www.febnet.org.br/wp-content/uploads/2012/07/WEB-Livro-dos-Esp%C3%ADritos-Guillon.pdf"
                  target="blank"
                >
                  <figure className="figure">
                    <img
                      className="media mix-blend-multiply dark:mix-blend-exclusion h-40 ml-auto mr-auto"
                      src={LivroOLivroDosEspiritosIMG}
                      alt="O Livro Dos Espíritos"
                    />
                    <figcaption className="figcaption">
                      Livro "O Livro Dos Espíritos"
                    </figcaption>
                  </figure>
                </OutboundLink>
              </div>
            </div>
            <div className="collumn w-1/5">
              <div>
                <div className="head">
                  <span className="headline hl5">O Livro dos Médiuns</span>
                </div>
                "O Livro dos Médiuns" é uma das cinco obras que constituem a
                Codificação da Doutrina Espírita. Reúne "o ensino especial dos
                Espíritos sobre a teoria de todos os gêneros de manifestações,
                os meios de comunicação com o mundo invisível, o desenvolvimento
                da mediunidade, as dificuldades e os tropeços que se podem
                encontrar na prática do Espiritismo". Apresenta ainda, na parte
                final, precioso vocabulário básico espírita. De leitura e
                consulta indispensável para os espíritas, será sempre uma
                preciosa fonte de conhecimento também para qualquer pessoa
                indagadora e atenta ao fenômeno mediúnico, que se manifesta
                crescentemente no mundo inteiro, dentro ou fora das atividades
                espíritas. Sendo os homens parte integrante do intercâmbio entre
                os dois planos da vida o material e o espiritual, o melhor é que
                conheçamos, e bem, os mecanismos desse relacionamento. "O Livro
                dos Médiuns" é o manual mais seguro para todos os que se dedicam
                às atividades de comunicação com o Mundo Espiritual.
                <p />
                <OutboundLink
                  href="https://www.febnet.org.br/wp-content/uploads/2012/07/WEB-Livro-dos-Mediuns-Guillon.pdf"
                  target="blank"
                >
                  <figure className="figure">
                    <img
                      className="media mix-blend-multiply dark:mix-blend-exclusion h-40 ml-auto mr-auto"
                      src={LivroOLivroDosMediunsIMG}
                      alt="O Livro dos Médiuns"
                    />
                    <figcaption className="figcaption">
                      Livro "O Livro dos Médiuns"
                    </figcaption>
                  </figure>
                </OutboundLink>
              </div>
              <div>
                <div className="head">
                  <span className="headline hl5">O Céu E O Inferno</span>
                </div>
                Esta é uma das cinco obras básicas que compõem a Codificação do
                Espiritismo. Seu principal escopo é explicar a Justiça de Deus à
                luz da Doutrina Espírita. Objetiva demonstrar a imortalidade do
                Espírito e a condição que ele usufruirá no Mundo Espiritual,
                como conseqüência de seus próprios atos. Divide-se em duas
                partes: A primeira, estabelece um exame comparado das doutrinas
                religiosas sobre a vida após a morte. Mostra fatos como a morte
                de crianças, seres nascidos com deformações, acidentes coletivos
                e uma gama de problemas que só a imortalidade da alma e a
                reencarnação explicam satisfatoriamente. Kardec procura elucidar
                temas como: anjos, céu, demônios, inferno, penas eternas,
                purgatório, temor da morte, a proibição mosaica sobre a evocação
                dos mortos, etc. Apresenta, também, a explicação espírita
                contrária à doutrina das penas eternas. A segunda parte,
                resultante de um trabalho prático, reúne exemplos acerca da
                situação da alma durante e após a desencarnação. São depoimentos
                de criminosos arrependidos, de espíritos endurecidos, de
                espíritos felizes, medianos, sofredores, suicidas e em expiação
                terrestre.
                <p />
                <OutboundLink
                  href="https://www.febnet.org.br/wp-content/uploads/2012/07/WEB-O-Ceu-e-o-inferno-Guillon.pdf"
                  target="blank"
                >
                  <figure className="figure">
                    <img
                      className="media mix-blend-multiply dark:mix-blend-exclusion h-40 ml-auto mr-auto"
                      src={LivroOCeuEOInfernoIMG}
                      alt="O Céu E O Inferno"
                    />
                    <figcaption className="figcaption">
                      Livro "O Céu E O Inferno"
                    </figcaption>
                  </figure>
                </OutboundLink>
              </div>
            </div>
            <div className="collumn w-1/5">
              <div>
                <div className="head">
                  <span className="headline hl5">A Gênese</span>
                </div>
                É uma das cinco obras básicas da Codificação do Espiritismo. É
                um livro que, conhecido e estudado, proporciona uma oportunidade
                excepcional de imersão em grandes temas de interesse universal,
                abordados de forma lógica, racional e reveladora. Divide-se em
                três partes: Na primeira parte, analisa a origem do planeta
                Terra, de forma coerente, fugindo às interpretações misteriosas
                e mágicas sobre a criação do mundo; Em sua segunda parte, aborda
                a questão dos milagres, explicando a natureza dos fluidos e os
                fatos extraordinários contidos no Evangelho; Na terceira parte
                enfoca as predições do Evangelho, os sinais dos tempos e a
                geração nova, que marcará um novo tempo no Mundo com a prática
                da justiça, da paz e da fraternidade. Os assuntos apresentados
                nos dezoito capítulos desta obra têm como base a imutabilidade
                das grandiosas Leis Divinas.
                <p />
                <OutboundLink
                  href="https://www.febnet.org.br/wp-content/uploads/2012/07/WEB-A-Genese-Guillon.pdf"
                  target="blank"
                >
                  <figure className="figure">
                    <img
                      className="media mix-blend-multiply dark:mix-blend-exclusion h-40 ml-auto mr-auto"
                      src={LivroAGeneseIMG}
                      alt="A Gênese"
                    />
                    <figcaption className="figcaption">
                      Livro "A Gênese"
                    </figcaption>
                  </figure>
                </OutboundLink>
              </div>
              <div>
                <div className="head">
                  <span className="headline hl1">Obras Póstumas</span>
                </div>
                Obra publicada após a desencarnação de Allan Kardec, apresenta,
                no começo, bem escrita biografia do Codificador, seguida do
                discurso que Camille Flammarion pronunciou quando do seu
                sepultamento. Reunindo importantes registros deixados por Allan
                Kardec, acerca de pontos doutrinários e fundamentação do
                Espiritismo, divide-se este trabalho em duas grandes partes. A
                primeira aborda assuntos como: caráter e conseqüências
                religiosas das manifestações dos Espíritos; as cinco
                alternativas da Humanidade; questões e problemas; as expiações
                coletivas; liberdade, igualdade, fraternidade; música espírita;
                a morte espiritual; a vida futura. A segunda inclui apontamentos
                em torno da iniciação espírita e o roteiro missionário de
                Kardec, assim como uma "exposição de motivos", apresentada na
                "Constituição do Espiritismo", como precioso legado do mestre
                lionês às sociedades espíritas do futuro.
                <p />
                <OutboundLink
                  href="https://www.febnet.org.br/wp-content/uploads/2012/07/WEB-Obras-postumas-Guillon.pdf"
                  target="blank"
                >
                  <figure className="figure">
                    <img
                      className="media mix-blend-multiply dark:mix-blend-exclusion h-40 ml-auto mr-auto"
                      src={LivroObrasPostumasIMG}
                      alt="Obras Póstumas"
                    />
                    <figcaption className="figcaption">
                      Livro "Obras Póstumas"
                    </figcaption>
                  </figure>
                </OutboundLink>
              </div>
            </div>
            <div className="collumn w-1/5">
              <div>
                <div className="head">
                  <span className="headline hl1">O que é Espiritismo</span>
                </div>
                Obra sempre atual, útil aos adeptos da Doutrina Espírita, como
                também àqueles que desejam conhecer a natureza do Espiritismo e
                a definição de seus pontos fundamentais. A lógica e o bom senso
                de Allan Kardec aí se evidenciam, desconcertando os negativistas
                e clareando as indagações dos que acreditam e aspiram à vida
                superior. Divide-se em 3 capítulos: O primeiro, sob a forma de
                diálogos com um crítico, um céptico e um padre, traz respostas
                àqueles que desconhecem os princípios básicos da Doutrina, bem
                como apropriadas refutações aos seus contraditores. O segundo
                capítulo, expõe partes da ciência prática e experimental,
                caracterizando-se como um resumo de O Livro dos Médiuns. No
                terceiro capítulo, é publicado o resumo de O Livro dos
                Espíritos, com a solução, apontada pela Doutrina Espírita, de
                problemas de ordem psicológica, moral e filosófica. Contém
                também a biografia de Allan Kardec, por Henri Sausse.
                <p />
                <OutboundLink
                  href="https://www.febnet.org.br/wp-content/uploads/2012/07/WEB-O-que-e-o-Espiritismo-Reformador.pdf"
                  target="blank"
                >
                  <figure className="figure">
                    <img
                      className="media mix-blend-multiply dark:mix-blend-exclusion h-40 ml-auto mr-auto"
                      src={LivroOQueEEspiritismoIMG}
                      alt="O que é Espiritismo"
                    />
                    <figcaption className="figcaption">
                      Livro "O que é Espiritismo"
                    </figcaption>
                  </figure>
                </OutboundLink>
              </div>
              <div>
                <div className="head">
                  <span className="headline hl3">Revista Espírita</span>
                </div>
                Há 160 anos, em 1º de janeiro de 1858, Allan Kardec lançava a
                primeira edição da Revista Espírita da qual foi diretor até seu
                falecimento. Ao longo dos 135 números da Revista Espírita,
                somando 4.568 páginas, publicados entre os anos 1858 e 1869, é
                possível ao leitor conhecer um pouco do caminho desenvolvido
                pelo codificador e o debate de ideias consolidadas nos livros da
                Codificação Espírita.
                <p />
                <OutboundLink
                  href="https://www.febnet.org.br/portal/2021/09/02/downloads-material-completo/"
                  target="blank"
                >
                  <figure className="figure">
                    <img
                      className="media mix-blend-multiply dark:mix-blend-exclusion h-40 ml-auto mr-auto"
                      src={RevistaEspiritaIMG}
                      alt="Revista Espírita"
                    />
                    <figcaption className="figcaption">
                      Livro "Revista Espírita"
                    </figcaption>
                  </figure>
                  <p className="font-light">
                    Informações extraídas de blogs e fórums espíritas.
                  </p>
                </OutboundLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default KardecPage;

export const Head: HeadFC = () => <SEO title="Espiritismo" />;
