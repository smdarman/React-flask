import React, { Component } from "react";
import Detail from './news_detail'

class News extends Component {
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
    fetch("/api/getNews")
      .then(res => res.json())
      //   .then(json => console.log(json));
      // .then(data => data.json())
      //   console.log();
      // .then((News) => this.setState({ News }));
      .then(News => {
        console.log( News)
        this.setState({
          News:  News.data.articles
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
        
        <h1 style={mystyle}>
         {item.title}
        </h1>
        <a href={item.url}>{item.source.name}</a>
       <h3 >
         {item.description}
      </h3> 
      
      <img src={item.urlToImage} alt="" height="250" width="350" />
   
        </div>

    });
    // var descs = this.state.News.map(function (desc, id) {
    //   return <h4 key={id}> {desc.description} </h4>;
    // });
    return (
      <div className="App2">
        <h1>List of News</h1>

        {/* <ul>{items} </ul> */}
        <Detail list={items} />

      </div>
    );
  }
}

export default News;