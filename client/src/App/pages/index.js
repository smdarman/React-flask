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

export default  function Index() {
//   const classes = useStyles();
//   const [value, setValue] = useState(0);
  
  const [News, setNews] = useState([]);




  function getNews() {




    fetch('news' )

      .then((res) => res.json())
      //   .then(json => console.log(json));
      // .then(data => data.json())
      //   console.log();
      // .then((News) => this.setState({ News }));
      .then((News) => {
        // console.log(News);
        setNews(News.result);
      })
      .catch((err) => console.log(err));

  }

  useEffect(() => {
    getNews( );

  },[] );

  return (
    <>


    <section id="app">





      {/* {JSON.stringify(News)} */}

      {News.map((item, i) => {
        return (
          <div key={i}>
            <h1 style={mystyle}>{item.title }</h1>

            <h3>{item.detail}</h3>

            <img src={item.img} alt="" height="250" width="350" />

          </div>
        );
      })}
      {/* <ul>{items}</ul> */}
    </section>
         {/* <BottomNavigation
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
    </BottomNavigation> */}
    </>
  );
}

