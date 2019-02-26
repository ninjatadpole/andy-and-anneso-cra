import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import DocumentTitle from "react-document-title";
import classnames from "classnames";

import { ContextProvider } from "../../utils/context";

import LanguageSwitcher from "../language-switcher";
import Navigation from "../navigation";
import PageHome from "../page-home";
import PageLocation from "../page-location";
import PageQuestions from "../page-info";
import PageTimeline from "../page-programme";

import { translate } from "../../data/translations";
import { getStorageValue, setStorageValue } from "../../data/local-storage";

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

  getTranslation = (key, language = this.state.language) => {
    if (language) {
      return translate(key, language);
    }
    return "";
  };

  render() {
    return (
      <ContextProvider
        value={{
          currentLanguage: this.state.language,
          languages: LANG,
          swapLanguage: this.swapLanguage,
          translate: this.getTranslation
        }}
      >
        <DocumentTitle title={this.getTranslation("global.title")}>
          <div className={classnames("app", this.state.language)}>
            <header>
              <div className="contents">
                <Navigation />
                <LanguageSwitcher />
              </div>
            </header>

            <Switch>
              <Route exact path="/" component={PageHome} />
              <Route path="/locations" component={PageLocation} />
              <Route path="/programme" component={PageTimeline} />
              <Route path="/info" component={PageQuestions} />
              <Route component={PageHome} />
            </Switch>
          </div>
        </DocumentTitle>
      </ContextProvider>
    );
  }
}

export default App;
