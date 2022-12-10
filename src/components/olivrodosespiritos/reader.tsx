import * as React from "react";
import {
  OLivroDosEspiritos,
  Question,
  DynamicQuestion,
  CommonQuestion,
} from "../../share/cache-types";
import Swiper from "../swiper";
import Layout from "../layout";
import {
  GetOLivroDosEspiritos,
  LoadOLivroDosEspiritos,
  StoreOLivroDosEspiritosDynamic,
  GetOLivroDosEspiritosDynamic,
  StoreOLivroDosEspiritosCommon,
  GetOLivroDosEspiritosCommon,
} from "../../services/cache";
import _ from "lodash";

interface Props {
  dynamic?: boolean;
}

interface LoadedData {
  questions: Question[];
  index: number;
}

function processLoadedData(
  questions: Question[],
  dynamic?: boolean
): LoadedData {
  if (dynamic) {
    const dynamicData: DynamicQuestion | null = GetOLivroDosEspiritosDynamic();

    let readed: Question[] = [],
      notReaded: Question[] = [];

    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      if (
        dynamicData &&
        (dynamicData.readed.includes(q.id) ||
          parseInt(dynamicData.readed[dynamicData.readed.length]) ==
            parseInt(q.id))
      ) {
        readed = [...readed, q];
      } else {
        notReaded = [...notReaded, q];
      }
    }

    const notReadedRandom = _.shuffle(
      notReaded.reduce((result: string[], current: Question) => {
        if (isNaN(current.id as any)) {
          return result;
        }

        return [...result, current.id];
      }, [])
    ).flatMap((id: string) =>
      notReaded.filter(
        (question: Question) => parseInt(question.id) == parseInt(id)
      )
    );

    if (dynamicData) {
      return {
        questions: [...readed, ...notReadedRandom],
        index: dynamicData.index,
      };
    }

    return { questions: notReadedRandom, index: 0 };
  } else {
    const commonData: CommonQuestion | null = GetOLivroDosEspiritosCommon();

    return { questions, index: commonData ? commonData.index : 0 };
  }
}

const Reader: React.FC<Props> = (props: Props) => {
  const getLoadedData = (): LoadedData | null => {
    const data = GetOLivroDosEspiritos();
    if (data) {
      return processLoadedData(data.questions, props.dynamic);
    }

    return null;
  };

  const [loadedData, setLoadedData] = React.useState<LoadedData | null>(
    getLoadedData()
  );

  if (!loadedData) {
    LoadOLivroDosEspiritos().then((data: OLivroDosEspiritos) => {
      setLoadedData(processLoadedData(data.questions, props.dynamic));
    });
  }

  const storeIndex = (newIndex: number) => {
    if (!loadedData) {
      return;
    }

    if (props.dynamic) {
      StoreOLivroDosEspiritosDynamic({
        index: newIndex,
        readed: loadedData.questions
          .slice(0, newIndex + 1)
          .map((question) => question.id),
      });
    } else {
      StoreOLivroDosEspiritosCommon({
        index: newIndex,
      });
    }
  };

  return (
    <Layout>
      {(!loadedData && <div>...</div>) || (
        <Swiper
          initialSlide={(loadedData as LoadedData).index}
          indexChange={storeIndex}
          slides={(loadedData as LoadedData).questions.map(
            (question: Question) => (
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
