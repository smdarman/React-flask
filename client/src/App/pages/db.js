
import React, { Component } from "react";

class db extends Component {
  // Initialize the state
  constructor(props) {
    super(props);
    this.state = {
      Star: [],
    };
  }

  // Fetch the News on first mount
  componentDidMount() {
    this.getNews();
  }

  // Retrieves the News of items from the flask app
  getNews = () => {
    fetch("/star")
      .then(res => res.json())
      //   .then(json => console.log(json));
      // .then(data => data.json())
      //   console.log();
      // .then((News) => this.setState({ News }));
      .then(Star => {
        console.log( Star)
        this.setState({
          Star:  Star.result
        })
      })
      .catch(err => console.log(err))
   
  
  };

  render() {
 
      
          
    var subject = this.state.Star.map(function (item, i) {
      return <div key={i} >
        <h3 >
         {item.title}
        </h3>
       <h2 style={{color: 'green'}} >
         {item.name >= 0.1  ? item.name : ''}
      </h2>
      <h2 style={{color: 'red'}} >
         {item.name <= -0.1 ? item.name : ''}
      </h2>
      
        </div>
    });
 
    return (
      <div className="App2">
        <h1>List of subjects from database:</h1>

        <ul>{subject} </ul>
        {/* {descs} */}
      </div>
    );
  }
}

export default db;