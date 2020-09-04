import React, { Component } from "react";
import Detail from './news_detail'

class tweet_list extends Component {
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
    fetch("/tweet")
      .then(res => res.json())
      //   .then(json => console.log(json));
      // .then(data => data.json())
      //   console.log();
      // .then((News) => this.setState({ News }));
      .then(News => {
        console.log( News)
        this.setState({
          News:  News.result
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

        <h1 style={mystyle}> sentiment:
         {item.sentiment}
        </h1>

       <h3 >
         Tweets: {item.tweet}
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

export default tweet_list;
/* this is a comment*/