import React from "react";
import DocumentTitle from "react-document-title";

import Map from "../map";
import Translation from "../translation";
import { WithCtx } from "../../utils/context";

import "./page-map.scss";

function PageMap(props) {
  const {
    ctx: { translate }
  } = props;

  return (
    <DocumentTitle title={translate("map.metaTitle")}>
      <section className="page page-map max-width">
        <article>
          <Translation tag="h1" id="map.title" />
          <Map />
        </article>
      </section>
    </DocumentTitle>
  );
}

export default WithCtx(PageMap);
