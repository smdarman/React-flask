import React, { useState, useEffect } from "react";

export default function Home() {
//  const [value, setValue] = useState("");
  const [News, setNews] = useState([]);
  const [val, setTerm] = useState('business');



  function getNews() {
 const term = { value: val };

    fetch('api/getNews', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(term),
  })

      .then((res) => res.json())
      //   .then(json => console.log(json));
      // .then(data => data.json())
      //   console.log();
      // .then((News) => this.setState({ News }));
      .then((News) => {
        // console.log(News);
        setNews(News.data.articles);
      })
      .catch((err) => console.log(err));
      setTerm('');
  }

  useEffect(() => {
    getNews( );

  },[] );

  return (
    <section id="app">





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
