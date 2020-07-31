import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const base_url = `https://image.tmdb.org/t/p/original/`;

function Rows({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  // useEffect runs only when page loads and then
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2> {title} </h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Rows;
