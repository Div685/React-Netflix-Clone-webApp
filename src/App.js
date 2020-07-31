import React from "react";
import "./App.css";
import Rows from "./Rows";
import requests from "./requests";

import Banner from "./banner/Banner";

function App() {
  return (
    <div className="App">
      <Banner />

      <Rows
        title="Netflix Orginals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Rows title="Trending Now" fetchUrl={requests.fetchTrending} />

      <Rows title="Top Rated" fetchUrl={requests.fetchTopRated} />

      <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies} />

      <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />

      <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />

      <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />

      <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
