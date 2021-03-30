 import React, { Component } from "react";
import Detail from './news_detail'


class covid_news extends Component {
  // Initialize the state
  constructor(props) {
    super(props);
    this.state = {
      News: [],
    };
  }

  // Fetch the News on first mount
  componentDidMount() {
    this.getNews();
  }

  // Retrieves the News of items from the flask app
  getNews = () => {
    fetch("/api/covid")
      .then(res => res.json())
      //   .then(json => console.log(json));
      // .then(data => data.json())
      //   console.log();
      // .then((News) => this.setState({ News }));
      .then(News => {
        console.log( News)
        this.setState({
          News:  News.data.Countries
        })
      })
      .catch(err => console.log(err))
   
  
  };

  render() {
 
    const mystyle = {
      color: "red",
      backgroundColor: "lightblue",
      fontFamily: "Arial"
    };
          
    var items = this.state.News.map(function (item, i) {
      return <div key={i} >
        
        <h1 style={mystyle}> Country:
     {item.Country}
    </h1>
    <h1 > New cases:
     {item.NewConfirmed}
    </h1>
    <h3 >
     New Deaths: {item.NewDeaths}
  </h3>

   <h3 >
    New Recoverd: {item.NewRecovered}
  </h3>
  <h3 >
    Date: {item.Date}
  </h3>
      
   
        </div>

    });
   
    return (
      <div className="App2">
        <h1>List of News</h1>

        {/* <ul>{items} </ul> */}
        <Detail list={items} />

      </div>
    );
  }
}

export default covid_news;
/* this is a comment*/