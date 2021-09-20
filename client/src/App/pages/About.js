import React, { useState, useEffect } from "react";

export default function App() {
  const [value, setValue] = useState("");
  const [News, setNews] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const data = { value: value };
    console.log("submit");
    console.log(value);
    fetch("api/getNews", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
        .then((News) => {
        console.log(News);
        setNews(News.data.articles);
      })
      .then((res) => console.log(res));
  }

  function handleValue(e) {
    setValue(e.target.value);
  }

  function getNews() {
    fetch("/api/getNews")
      .then((res) => res.json())
      //   .then(json => console.log(json));
      // .then(data => data.json())
      //   console.log();
      // .then((News) => this.setState({ News }));
      .then((News) => {
        console.log(News);
        setNews(News.data.articles);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getNews();
  }, []);

  return (
    <section id="app">
       
       <h1 style={{color: "red"}}><strong></strong> Topic is: <strong>{value}</strong> </h1>

      <form
        action="http://localhost:5000/api/getNews"
        method="post"
        onSubmit={handleSubmit}
      >
        <input type="text" onChange={handleValue} />
        <button> submit </button>
      </form>

      {/* {JSON.stringify(News)} */}
     
      {News.map((item, i) => {
        return (
          <div key={i}>
            <h1>{item.title}</h1>
            <a href={item.url}>{item.source.name}</a>
            <h3>{item.description}</h3>

            <img src={item.urlToImage} alt="" height="250" width="350" />
          </div>
        );
      })}
      {/* <ul>{items}</ul> */}
    </section>
  );
}
