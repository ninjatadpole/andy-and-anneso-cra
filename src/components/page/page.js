import React from "react";
import DocumentTitle from "react-document-title";
import classnames from "classnames";

import { WithCtx } from "../../utils/context";

import Footer from "../footer";

import "./page.scss";

function Page(props) {
  const {
    children,
    className,
    ctx: { translate },
    title
  } = props;

  return (
    <DocumentTitle title={translate(title)}>
      <section className={classnames("page", className)}>
        <article>{children}</article>
        <Footer />
      </section>
    </DocumentTitle>
  );
}

export default WithCtx(Page);
