import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import withTracker from "utils/withTracker";

import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import About from "screens/About";
import Projects from "screens/Projects";
import CodeSnippets from "screens/CodeSnippets";
import PuzzleHelper from "screens/PuzzleHelper";
import "styles/App.scss";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route
              exact
              path={process.env.PUBLIC_URL + "/"}
              component={withTracker(About)}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + "/projects"}
              component={withTracker(Projects)}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + "/snippets"}
              component={withTracker(CodeSnippets)}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + "/puzzle"}
              component={withTracker(PuzzleHelper)}
            />
            <Redirect
              from={process.env.PUBLIC_URL + "/*"}
              to={process.env.PUBLIC_URL + "/"}
            />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
