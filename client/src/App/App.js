import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import List from './pages/List';
import News from './pages/News';
import About from './pages/About';
import db from './pages/db';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/list' component={List}/>
          <Route path='/News' component={News}/>
          <Route path='/About' component={About}/>
          <Route path='/db' component={db}/>
        </Switch>
      </div>
    )
    return (
      //App is a component too with the above properties and this is what is returned
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;