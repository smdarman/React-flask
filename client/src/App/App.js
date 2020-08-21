import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import List from "./pages/List";
import News from "./pages/News";
import About from "./pages/About";
import db from "./pages/db";

// class App extends Component {
//   render() {
//     const App = () => (
//       <div>
//         <Switch>
//           <Route exact path='/' component={Home}/>
//           <Route path='/list' component={List}/>
//           <Route path='/News' component={News}/>
//           <Route path='/About' component={About}/>
//           <Route path='/db' component={db}/>
//         </Switch>
//       </div>
//     )
//     return (
//       //App is a component too with the above properties and this is what is returned
//       <Switch>
//         <App/>

//       </Switch>
//     );
//   }
// }

// export default App;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Project Home</h1>
          <li>
            <Link to="./">Home</Link>
          </li>
          <li>
            <Link to="./News">News</Link>
          </li>
          <li>
            <Link to="./About">About</Link>
          </li>
          <li>
            <Link to="./db">db</Link>
          </li>

          <Link to={"./list"}>
            <button variant="raised">My List</button>
          </Link>
          <Link to={"./News"}>
            <button variant="raised">My News</button>
          </Link>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/" component={Home} />
            <Route path="/list" component={List} />
            <Route path="/News" component={News} />
            <Route path="/About" component={About} />
            <Route path="/db" component={db} />
            
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
