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
  GetOLivroDosEspiritos,
  StoreOLivroDosEspiritosDynamic,
  GetOLivroDosEspiritosDynamic,
  StoreOLivroDosEspiritosCommon,
  GetOLivroDosEspiritosCommon,
} from "../../services/cache";
import _ from "lodash";
import "../../styles/reader.css";
import SwipeLeftIcon from "@mui/icons-material/SwipeLeft";

interface Props {
  dynamic?: boolean;
  view?: boolean;
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
  const oLivroDosEspiritos: OLivroDosEspiritos | null = GetOLivroDosEspiritos();
  let getLoadedData: LoadedData | null = null;
  if (oLivroDosEspiritos) {
    getLoadedData = processLoadedData(
      oLivroDosEspiritos.questions,
      props.dynamic
    );
  }
  const [loadedData, setLoadedData] = React.useState<LoadedData | null>(
    getLoadedData
  );

  React.useEffect(() => {
    if (loadedData) {
      return;
    }

    LoadOLivroDosEspiritos().then((data: OLivroDosEspiritos) => {
      if (!data) {
        return;
      }

      setLoadedData(processLoadedData(data.questions, props.dynamic));
    });
  });

  const storeIndex = (newIndex: number, loadedData: LoadedData) => {
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

  const renderLoading = () => (
    <div className="p-8 leading-5 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
          </div>
          <div className="h-2 bg-slate-200 rounded"></div>
        </div>
      </div>
    </div>
  );

  const renderQuestion = (question: Question) => (
    <div className="leading-5">
      <div
        dangerouslySetInnerHTML={{ __html: question.question }}
        className="font-semibold text-lg sm:text-base uppercase"
      />
      <div
        dangerouslySetInnerHTML={{ __html: question.category }}
        className="font-light text-base sm:text-sm"
      />
      <div className="font-light text-base sm:text-sm">
        QUESTÃO&nbsp;
        <span dangerouslySetInnerHTML={{ __html: question.id }} />
      </div>
      {(!loadedData || loadedData.index == 0) && (
        <SwipeLeftIcon className="mt-2 ml-auto" sx={{ display: "block" }} />
      )}
      <div
        dangerouslySetInnerHTML={{ __html: question.answer }}
        className="font-normal text-lg sm:text-base text-justify pt-8"
      />
    </div>
  );

  const renderSwiper = (loadedData: LoadedData) => {
    return (
      <>
        <Swiper
          initialSlide={loadedData.index}
          indexChange={(i) => storeIndex(i, loadedData)}
          slides={loadedData.questions.map(renderQuestion)}
        />
      </>
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
        : props.view
        ? renderView(loadedData)
        : renderSwiper(loadedData)}
    </Layout>
  );
};

export default Reader;
