import React from "react";
import axios from "axios";
import "./movies.css";
import "antd/dist/antd.css";
import { Input } from "antd";

const Movies = () => {
  const { Search } = Input;
  const apiKey = "7c519f5b71a8cf06004cc91cd32f141f";

  React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}
    `
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="header">
        <h1 className="heading">FLIX</h1>
        <input type="search" className="search" placeholder="search ..." />
      </div>

      <div>
        <h2>Popular movies</h2>
      </div>
    </div>
  );
};

export default Movies;
