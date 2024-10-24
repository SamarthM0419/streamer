import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  //fetch trailer - needs API (requirements Id)
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +movieId+"/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    // console.log(filterData)
    const trailer = filterData.length ? filterData[2] : json.results[0];
    // console.log(trailer);
    // setTrailerId(trailer.key)
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};
export default useMovieTrailer;
