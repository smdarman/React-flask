import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
    <div className="App">
      <h1>Project Home</h1>
      <li>
            <Link to="./News">News</Link>
          </li>
          <li>
            <Link to="./About">About</Link>
          </li>
          <li>
            <Link to="./db">db</Link>
          </li>
      
      <Link to={'./list'}>
        <button variant="raised">
            My List
        </button>
      </Link>
      <Link to={'./News'}>
        <button variant="raised">
            My News
        </button>
      </Link>
    </div>
    );
  }
}
export default Home;