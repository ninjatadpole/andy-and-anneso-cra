import React from "react";
import DocumentTitle from "react-document-title";

import styles from "./page-home.scss";

export default function PageHome(props) {
  return (
    <DocumentTitle title="Andy & Anne-So - August 24th 2019">
      <section className="page home">
        <h1>Home</h1>
      </section>
    </DocumentTitle>
  );
}
