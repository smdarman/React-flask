import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./App.css";
import Home from "./pages/Home";
import List from "./pages/List";
import News from "./pages/News";
import About from "./pages/About";
import db from "./pages/db";
import covid from "./pages/covid";
import tweet from "./pages/tweet";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>React flask app</h1>

          <Link to="/">
            {" "}
            <Button variant="contained" color="primary">
              Home
            </Button>
          </Link>

          <Link to="./News">
            {" "}
            <Button variant="contained" color="secondary">
              News
            </Button>
          </Link>
          <Link to="/covid">
            {" "}
            <Button variant="contained" color="secondary">
              Covid
            </Button>
          </Link>

          <Link to="./About">
            {" "}
            <Button variant="contained" color="primary">
              About
            </Button>
          </Link>

          <Link to="./db">
            {" "}
            <Button variant="contained" color="secondary">
              Db
            </Button>
          </Link>

          <Link to="./tweet">
            {" "}
            <Button variant="contained" color="secondary">
              Tweets
            </Button>
          </Link>

          <Switch>
            {/* this is route creation section */}
            <Route exact path="/" component={Home} />

            <Route path="/list" component={List} />
            <Route path="/News" component={News} />
            <Route path="/About" component={About} />
            <Route path="/db" component={db} />
            <Route path="/covid" component={covid} />
            <Route path="/tweet" component={tweet} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
