import * as React from "react";
import { OLivroDosEspiritosType } from "../../share/types";
import Swiper from "../swiper";
import Layout from "../layout";
import {
  GetOLivroDosEspiritos,
  LoadOLivroDosEspiritos,
} from "../../services/cache";

interface Props {
  dynamic?: boolean;
}

const Reader: React.FC<Props> = (props: Props) => {
  const [loadedData, setLoadedData] =
    React.useState<OLivroDosEspiritosType | null>(GetOLivroDosEspiritos());

  if (!loadedData) {
    LoadOLivroDosEspiritos().then(setLoadedData);
  }

  return (
    <Layout>
      {(!loadedData && <div>carregando</div>) || (
        <Swiper
          slides={(loadedData as OLivroDosEspiritosType).questions.map(
            (question) => (
              <div>
                <div dangerouslySetInnerHTML={{ __html: question.id }} />
                <div dangerouslySetInnerHTML={{ __html: question.category }} />
                <div dangerouslySetInnerHTML={{ __html: question.question }} />
                <div dangerouslySetInnerHTML={{ __html: question.answer }} />
              </div>
            )
          )}
        />
      )}
    </Layout>
  );
};

export default Reader;
