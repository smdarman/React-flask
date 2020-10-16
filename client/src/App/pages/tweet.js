import React, { Component } from "react";

import {Bar} from 'react-chartjs-2';
import {Pie} from 'react-chartjs-2';



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

    let empSal = [];
  for (const dataObj of this.state.News) {
            empSal.push(parseInt(dataObj.negative));
            empSal.push(parseInt(dataObj.neutral));
            empSal.push(parseInt(dataObj.positive));
          };
    
  

    
    const data4 = {
      labels: [
        'Negative',
        'Neutral',
        'Positive'
      ],
      datasets: [{
        data: empSal,
        label: "Sentiment analysis",
        
        backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ],
        hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
        ]
      }]
    };

 

    
    return (
      <div className="App2">
        <h1>Tweet Analysis</h1>

        {/* <ul>{items} </ul> */}
               <h2>Pie Example</h2>
        <Pie data={data4} 
       />
        <Bar
          data={data4}
          width={20}
          height={20}
          options={{
            maintainAspectRatio: false
          }}
        />
         
        

      </div>
    );
  }
}

export default tweet_list;
/* this is a comment*/