import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    width: 500,
    marginLeft: 400
  },
});

const mystyle = {
      color: "red",
      backgroundColor: "lightblue",
      fontFamily: "Arial"
    };

export default function Home() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
//  const [value, setValue] = useState("");
  const [News, setNews] = useState([]);
  const [val, setTerm] = useState('health');

  

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
    <>


    <section className="App2" id="app">
       


  

      {/* {JSON.stringify(News)} */}
     
      {News.map((item, i) => {
        return (
          <div key={i}>
            <h1 style={mystyle}>{item.title }</h1>
            <a href={item.url}>{item.source.name}</a>
            <h3>{item.description}</h3>


            <img src={item.urlToImage} alt="" height="250" width="350" />
          </div>
        );
      })}
      {/* <ul>{items}</ul> */}
    </section>
         <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
    </>
  );
}
