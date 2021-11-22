import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';

import "./App.css";
import Home from "./pages/Home";
import List from "./pages/List";
import News from "./pages/News";
import About from "./pages/About";
import db from "./pages/db";
import covid from "./pages/covid";
import tweet from "./pages/tweet";
import topic from "./pages/topic";
import index from "./pages/index"
import { Footer } from "./Component/footer";

class App extends Component {
  render() {
    return (
<>
      <Router>
         <div className="App">
        <AppBar position="static" color='secondary'>
        <Tabs aria-label="simple tabs example"   indicatorColor="secondary"
    textColor="secondary" centered>
   
       

          <Link to="/">
            {" "}
            <Button variant="contained" color="primary">
              Home
            </Button>
          </Link>

          <Link to="./News">
            {" "}
            <Button variant="contained" color="secondary">
              Finance
            </Button>
          </Link>
          <Link to="/covid">
            {" "}
            <Button variant="contained" color="primary">
              Covid
            </Button>
          </Link>

          <Link to="./About">
            {" "}
            <Button variant="contained" color="secondary">
              Catagory
            </Button>
          </Link>

          <Link to="./db">
            {" "}
            <Button variant="contained" color="primary">
              Tweets
            </Button>
          </Link>

          <Link to="./tweet">
            {" "}
            <Button variant="contained" color="secondary">
              Chart
            </Button>
          </Link>
          <Link to="./topic">
            {" "}
            <Button variant="contained" color="primary">
              Headlines
            </Button>
            {/* <Tab label="Item One"  /> */}
          </Link>
          
          </Tabs>
      </AppBar>
      
</div>


          <Switch>
            {/* this is route creation section */}
            <Route exact path="/" component={index} />
            <Route path="/home" component={Home} />

            <Route path="/list" component={List} />
            <Route path="/News" component={News} />
            <Route path="/About" component={About} />
            <Route path="/db" component={db} />
            <Route path="/covid" component={covid} />
            <Route path="/tweet" component={tweet} />
            <Route path="/topic" component={topic} />
          </Switch>
      
      
      </Router>
      <Footer />
      </>
    );
  }
}

export default App;
