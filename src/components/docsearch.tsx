import * as React from "react";
import { DocSearch as DocSearchReact } from "@docsearch/react";

import "@docsearch/css";

const ReactHelmet = require("react-helmet");

const DocSearch: React.FC = () => {
  return (
    <>
      <ReactHelmet.Helmet>
        <link
          rel="preconnect"
          href="https://8UY2U3J899-dsn.algolia.net"
          crossOrigin=""
        />
      </ReactHelmet.Helmet>
      <DocSearchReact
        appId="8UY2U3J899"
        indexName="espiritismo"
        apiKey="eb74ffb34fe41cf8cc3251496bace036"
      />
    </>
  );
};

export default DocSearch;
