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
  LoadOLivroDosEspiritos,
  StoreOLivroDosEspiritosDynamic,
  GetOLivroDosEspiritosDynamic,
  StoreOLivroDosEspiritosCommon,
  GetOLivroDosEspiritosCommon,
} from "../../services/cache";
import _ from "lodash";

interface Props {
  dynamic?: boolean;
  id?: string;
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
      resumed: Question[] = [],
      notReaded: Question[] = [];

    if (dynamicData) {
      readed = dynamicData.readed.flatMap((id: string) =>
        questions.filter((q: Question) => q.id == id)
      );

      resumed = questions.filter(
        (q: Question) =>
          parseInt(q.id) == parseInt(dynamicData.readed[readed.length - 1]) &&
          readed.filter((r: Question) => r.id == q.id).length == 0
      );
    }

    notReaded = _.shuffle(
      questions
        .filter(
          (q: Question) =>
            !isNaN(q.id as any) &&
            readed.filter((r: Question) => r.id == q.id).length == 0 &&
            resumed.filter((r: Question) => r.id == q.id).length == 0
        )
        .map((q: Question) => q.id)
    ).flatMap((id: string) =>
      questions.filter((q: Question) => parseInt(q.id) == parseInt(id))
    );

    if (dynamicData) {
      return {
        questions: [...readed, ...resumed, ...notReaded],
        index: dynamicData.index,
      };
    }

    return { questions: notReaded, index: 0 };
  } else {
    const commonData: CommonQuestion | null = GetOLivroDosEspiritosCommon();

    return { questions, index: commonData ? commonData.index : 0 };
  }
}

const Reader: React.FC<Props> = (props: Props) => {
  const [loadedData, setLoadedData] = React.useState<LoadedData | null>();

  React.useEffect(() => {
    if (loadedData) {
      return;
    }

    LoadOLivroDosEspiritos().then((data: OLivroDosEspiritos) => {
      if (!data || props.id) {
        return;
      }

      setLoadedData(processLoadedData(data.questions, props.dynamic));
    });
  });

  const storeIndex = (newIndex: number) => {
    if (!loadedData || props.id) {
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

  const renderLoading = () => <div>...</div>;

  const renderQuestion = (question: Question) => (
    <div>
      <div dangerouslySetInnerHTML={{ __html: question.id }} />
      <div dangerouslySetInnerHTML={{ __html: question.category }} />
      <div dangerouslySetInnerHTML={{ __html: question.question }} />
      <div dangerouslySetInnerHTML={{ __html: question.answer }} />
    </div>
  );

  const renderSwiper = (loadedData: LoadedData) => {
    return (
      <Swiper
        initialSlide={loadedData.index}
        indexChange={storeIndex}
        slides={loadedData.questions.map(renderQuestion)}
      />
    );
  };

  const renderView = (loadedData: LoadedData) => {
    const question = loadedData.questions.filter(
      (q: Question) => q.id == props.id
    );

    if (question.length == 0) {
      return <div>invalid id</div>;
    }

    return renderQuestion(question[0]);
  };

  return (
    <Layout>
      {!loadedData
        ? renderLoading()
        : props.id
        ? renderView(loadedData)
        : renderSwiper(loadedData)}
    </Layout>
  );
};

export default Reader;
