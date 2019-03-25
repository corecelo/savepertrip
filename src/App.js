import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Component Import
import AppB2E from "./components/B2B/AppB2E";
import AppB2C from "./components/B2C/AppB2C";
import spinner1 from "./components/test/spinner";

const spinner = document.getElementById("spinner");

if (spinner && !spinner.hasAttribute("hidden")) {
  spinner.setAttribute("hidden", "true");
}

class App extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.setState({
      loading: false
    })
  }
  render() {
    const { loading } = this.state;
    return loading ? (
      <p>Loading</p>
    ) : (
      <Router>
        <div>
          <Switch>
            <Route path="/corporate" component={AppB2E} />
            <Route exact path="/test" component={spinner1} />
            <Route exact path="/" component={AppB2C} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
