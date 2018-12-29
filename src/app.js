import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import DocumentTitle from "react-document-title";
import classnames from "classnames";

import { ContextProvider } from "./context";

import Nav from "./components/nav";
import PageHome from "./components/page-home";
import PageMap from "./components/page-map";
import PageTimeline from "./components/page-timeline";

import translate from "./data/translate";
import { getStorageValue, setStorageValue } from "./data/local-storage";

import "./app.scss";

const LANG = ["en", "fr"];

class App extends Component {
  state = {
    language: null
  };

  componentDidMount() {
    this.setState({ language: this.getChosenLanguage() });
  }

  getChosenLanguage = () => {
    // first try getting the localstorage preference
    try {
      const chosenLanguage = getStorageValue("language");
      if (LANG.includes(chosenLanguage)) {
        return chosenLanguage;
      }
    } catch {}

    // second try getting the browser preference
    for (let i = 0; i < LANG.length; i++) {
      if (window.navigator.language.indexOf(LANG[i]) !== -1) {
        return LANG[i];
      }
    }

    // default to the first language
    return LANG[0];
  };

  swapLanguage = language => {
    const currentIndex = LANG.indexOf(this.state.language) || 0;
    const newIndex = (currentIndex + 1) % 2;

    this.setState({ language: LANG[newIndex] });
    setStorageValue("language", LANG[newIndex]);
  };

  translate = (key, language) => {
    return translate(language || this.state.language, key);
  };

  render() {
    return (
      <ContextProvider
        value={{
          language: this.state.language,
          swapLanguage: this.swapLanguage,
          translate: this.translate
        }}
      >
        <DocumentTitle title={this.translate("siteTitle")}>
          <div className={classnames("app", this.state.language)}>
            <Nav />
            <Switch>
              <Route exact path="/" component={PageHome} />
              <Route path="/map" component={PageMap} />
              <Route path="/timeline" component={PageTimeline} />
              <Route component={PageHome} />
            </Switch>
          </div>
        </DocumentTitle>
      </ContextProvider>
    );
  }
}

export default App;
