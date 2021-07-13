import React, { useState } from "react";
import axios from "axios";
import "./movies.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import DispalyTrendingMovies from "../trending Movies/trendingMovies";

const Movies = () => {
  const [trendingMovies, setTrendingMovies] = useState();
  const apiKey = "7c519f5b71a8cf06004cc91cd32f141f";
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}
    `
      )
      .then(function (response) {
        setTrendingMovies(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  if (!trendingMovies) {
    return <div>loading ...</div>;
  }

  return (
    <div>
      <div className="header">
        <h1 className="heading">FLIX</h1>
        <input type="search" className="search" placeholder="search ..." />
      </div>
      <div className="popular-movies">
        <h2 className="popular">Trending in this week</h2>
      </div>
      <Carousel responsive={responsive}>
        {trendingMovies.map((movie) => (
          <DispalyTrendingMovies key={movie.id} movie={movie} />
        ))}
      </Carousel>
      ;
    </div>
  );
};

export default Movies;
