import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAI";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const selectLanguage = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  //search movie in tmdb
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    //make an api call to get movie resuts

    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query :" +
      searchText.current.value +
      "only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay , Don , Yeh Jawaani Hai Deewani , Golmaal";

    const getGptResuts = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!getGptResuts) {
      //handle error messages
    }

    console.log(getGptResuts.choices?.[0]?.message?.content);
    const gptMovieList = getGptResuts.choices?.[0]?.message?.content.split(",");

    //For each movie , search TMDB API
    const promiseArray = gptMovieList.map((movie) => searchMovieTMDB(movie)); //result will be array of promises);

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(
      addGptMovieResults({
        movieNames: gptMovieList,
        movieResults: tmdbResults,
      })
    );
  };

  return (
    <div className="pt-[8%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="p-4 m-4 rounded-lg col-span-9"
          placeholder={lang[selectLanguage].gptSearchPlaceholder}
        />
        <button
          className="py-2 m-4 px-4 bg-red-700 text-white col-span-3 rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[selectLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
