import React, { Component } from "react";
import Detail from './news_detail'



class News extends Component {
  // Initialize the state
  constructor(props) {
    super(props);
    this.state = {
      News: [],
      value: '',
      topic: ''
    };
    
    this.handleValue = this.handleValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   
  }

  handleValue = (e) => {
    this.setState({value: e.target.value});
  }


handleSubmit = () => {
  
  const term = { value: this.state.value };
  console.log('submit');
  console.log(this.state.value);
  fetch('api/getNews', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(term),
  })
     .then(res => res.json())
     .then(News => {
       console.log( News)
       this.setState({
         News:  News.data.articles
       })
     })
     .catch(err => console.log(err))


};
  // Fetch the News on first mount
  componentDidMount() {
    this.handleSubmit();
  }
  

//   componentDidMount() {
//    this.getNews();
// }


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
{/* 
        <form action="" onSubmit={this.getNews}>
        <input type="text" onChange={this.handleSubmit} />
        <button> submit </button>
      </form> */}
        
      {/* <form  onSubmit={this.handleSubmit} >
        <label>
          Topic:
          <input type="text" name="term" onChange={this.handleValue} />
          <button type="submit"  value={this.state.value} >Submit</button>
        </label>
      </form>
        <h1> Topic is: {this.state.value} </h1> */}
        
      <Detail list={items} />
      </div>
    );
  }
}

export default News;