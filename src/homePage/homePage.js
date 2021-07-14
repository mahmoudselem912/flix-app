import React, { useState } from "react";
import axios from "axios";
import "./homePage.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TrendingMovies from "../trendingMovies/trendingMovies";
import PopularShows from "../popular TV shows/TVShows";
import DisplaySearch from "../displaySearch/displaySearch";

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState();
  const [popularShows, setPopularShows] = useState();
  const [searchResult, setSearchResult] = useState();
  const [displaySearch, setDispalySearch] = useState();
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
      items: 1,
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

  React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`
      )
      .then(function (response) {
        setPopularShows(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${displaySearch}`
      )
      .then(function (result) {
        setSearchResult(result.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [displaySearch]);
  function handleChange(event) {
    setDispalySearch(event.target.value);
  }

  if (!trendingMovies || !popularShows || !searchResult) {
    return <div>loading ...</div>;
  }

  return (
    <div>
      <div className="header">
        <h1 className="heading">FLIX</h1>
        <input
          type="search"
          className="search"
          placeholder="search ..."
          onChange={handleChange}
        />
      </div>

      <div className="searching-result">
        <Carousel responsive={responsive}>
          {displaySearch ? (
            searchResult.map((result) => (
              <DisplaySearch key={result.id} result={result} />
            ))
          ) : (
            <div></div>
          )}
        </Carousel>
      </div>
      <div className="trending-movies">
        <h2 className="trending">Trending in this week</h2>
      </div>
      <Carousel responsive={responsive}>
        {trendingMovies.map((movie) => (
          <TrendingMovies key={movie.id} movie={movie} />
        ))}
      </Carousel>

      <div className="popular-shows">
        <h2 className="popular"> TV popular shows</h2>
      </div>
      <Carousel responsive={responsive}>
        {popularShows.map((show) => (
          <PopularShows key={show.id} show={show} />
        ))}
      </Carousel>
    </div>
  );
};

export default HomePage;
