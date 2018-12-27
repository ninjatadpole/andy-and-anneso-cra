import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import DocumentTitle from "react-document-title";

import Nav from "./components/nav";
import PageHome from "./components/page-home";
import PageMap from "./components/page-map";
import PageTimeline from "./components/page-timeline";

import "./app.scss";

class App extends Component {
  render() {
    return (
      <DocumentTitle title="Andy & Anne-So - August 24th 2019">
        <div className="app">
          <Nav />
          <Switch>
            <Route exact path="/" component={PageHome} />
            <Route path="/:lang(\w\w)?/map" component={PageMap} />
            <Route path="/:lang(\w\w)?/timeline" component={PageTimeline} />
            <Route component={PageHome} />
          </Switch>
        </div>
      </DocumentTitle>
    );
  }
}

export default App;
