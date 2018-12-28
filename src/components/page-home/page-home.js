import React from "react";
import DocumentTitle from "react-document-title";
import classnames from "classnames";

import HomeCopy from "../home-copy";
import Horizon from "../horizon";
import Landscape from "../landscape";
import Moon from "../moon";

import "./page-home.scss";

class PageHome extends React.Component {
  state = {
    language: 0
  };

  languages = ["en", "fr"];

  swap = () => {
    this.setState({ language: (this.state.language + 1) % 2 });
  };

  render() {
    return (
      <DocumentTitle title="Andy & Anne-So - August 24th 2019">
        <section
          className={classnames(
            "page home",
            this.languages[this.state.language]
          )}
        >
          <button onClick={this.swap}>Swap</button>
          <article>
            <HomeCopy
              language="en"
              line1="Come and join"
              line2="Andy & Anne-So"
              line3="to celebrate their wedding"
              line4="Noon on the 24th August 2019"
            >
              <Landscape>
                <div className="stag" />
              </Landscape>
            </HomeCopy>

            <Horizon>
              <Moon />
            </Horizon>
            <HomeCopy
              language="fr"
              line1="Venez rejoindre"
              line2="Anne-So & Andy"
              line3="pour leur mariage"
              line4="le 24 Août 2019 à midi"
            >
              <Landscape>
                <div className="fox mirror" />
              </Landscape>
            </HomeCopy>
          </article>
        </section>
      </DocumentTitle>
    );
  }
}

export default PageHome;
