import React from "react";
import DocumentTitle from "react-document-title";

import HomeCopy from "../home-copy";
import Horizon from "../horizon";
import Landscape from "../landscape";
import Moon from "../moon";
import Page from "../page";

import "./page-home.scss";

function PageHome(props) {
  return (
    <Page className="page-home" title="home.title">
      <HomeCopy language="en">
        <Landscape>
          <div className="stag" />
        </Landscape>
      </HomeCopy>

      <Horizon>
        <Moon />
      </Horizon>

      <HomeCopy language="fr">
        <Landscape>
          <div className="fox" />
        </Landscape>
      </HomeCopy>
    </Page>
  );
}

export default PageHome;
