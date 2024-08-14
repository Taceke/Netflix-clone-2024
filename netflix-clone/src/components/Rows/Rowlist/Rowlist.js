import React from "react";
import Row from "../Row/Row";
import requests from "../../../utils/requests";
function Rowlist() {
  return (
    <>
      <Row
        titl="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row tittl="Trendung Now" fetchUrl={requests.fetchTrending} />

      <Row tittl="Top Retaed" fetchUrl={requests.fetchTopRatedMovies} />

      <Row tittl="Action movies" fetchUrl={requests.fetchActionMovies} />
      <Row tittl=" Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row tittl=" Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row tittl=" Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row tittl=" Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row tittl="Tv Show" fetchUrl={requests.fetchTvShow} />
    </>
  );
}

export default Rowlist;
