import * as React from "react";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import SwipeLeftIcon from "@mui/icons-material/SwipeLeft";
import { Path } from "../../templates/olivrodosespiritos/view";

interface Props {
  view?: boolean;
  first?: boolean;
  question: string;
  id: string;
  category: string;
  answer: string;
}

const Question: React.FC<Props> = (props: Props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div className="leading-5">
        <h1>
          <div
            dangerouslySetInnerHTML={{ __html: props.question }}
            className="inline font-semibold text-lg sm:text-base uppercase"
          />
          &nbsp;
          <IconButton
            size="small"
            aria-label="copy"
            color="inherit"
            onClick={() => {
              if (!open) {
                setOpen(true);
                setTimeout(() => {
                  setOpen(false);
                }, 1000);
              }
              navigator.clipboard.writeText(
                `${location.origin}${Path(props.id)}`
              );
            }}
          >
            <ContentCopyIcon
              fontSize="inherit"
              className="dark:text-white"
              sx={{ zIndex: -1 }}
            />
          </IconButton>
          {open && (
            <div className="inline font-light text-base sm:text-sm dark:text-white">
              &nbsp;LINK COPIADO
            </div>
          )}
        </h1>
        <h3>
          <div
            dangerouslySetInnerHTML={{ __html: props.category }}
            className="font-light text-base sm:text-sm"
            id="question-category"
          />
        </h3>
        <h3>
          <div className="font-light text-base sm:text-sm">
            QUESTÃO&nbsp;
            <span dangerouslySetInnerHTML={{ __html: props.id }} />
          </div>
        </h3>
        {props.first && !props.view && (
          <SwipeLeftIcon
            className="mt-2 ml-auto dark:text-white"
            sx={{ display: "block" }}
          />
        )}
        <h2>
          <div
            dangerouslySetInnerHTML={{ __html: props.answer }}
            className="font-normal text-lg sm:text-base text-justify pt-8"
          />
        </h2>
      </div>
    </>
  );
};

export default Question;
