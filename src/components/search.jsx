import React, { useState, useEffect } from "react";
import MovieDetails from "./moviedetails.jsx";
import FavouriteMovies from "./favouritemovies.jsx";

const API_KEY = "4cb1eeab94f45affe2536f2c684a5c9e";
const API_URL = "https://api.themoviedb.org/3/search/movie";

export default function Search() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null); 
  const [likedMoviesList, setLikedMovieList] = useState([]);

  useEffect(() => {
    if (query.length !== 0) {
      setLoading(true);
      setError(null);
      const timeout = setTimeout(() => {
        async function getMovies() {
          try {
            const response = await fetch(
              `${API_URL}?api_key=${API_KEY}&query=${query}`
            );
            const json = await response.json();
            setMovies(json.results);
            // TODO - check each movie's id in the json.results array - and see id it matches any of the likedMoviesList
            // if so add a liked property to that movie
            setLoading(false);            
          } catch (error) {
            setError("Something went wrong");
            setLoading(false);
          }
        }
        getMovies();
      }, 250);
      return () => clearTimeout(timeout);
    } else {
      setMovies([]);
    }
    if (localStorage.getItem("liked") !== null) {
      const likedMovies = JSON.parse(localStorage.getItem('liked'))
      setLikedMovieList(likedMovies);
    }
  }, [query]);

  function handleLike(movie) {
    movie.liked = !movie.liked;
    setSelectedMovie(movie);
    if (movie.liked) {
      const array = ([...likedMoviesList, movie])
      setLikedMovieList(array);
      localStorage.setItem('liked', JSON.stringify(array));
    } else {
      const array = [...likedMoviesList];
      const index = array.indexOf(movie)
      array.splice(index, 1);
      setLikedMovieList(array)
      localStorage.setItem('liked', JSON.stringify(array));
    }
  };

  return (
    <div className="search">
      <input
        className="search-field"
        placeholder="Search for a movie"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <div className="underline"></div>
      <div className="results movie-listing">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : query.length !== 0 && movies.length === 0 ? (
        <p>No movies found</p>
      ) : (
        movies.map(movie => <p
          key={movie.id}
          onClick={() => setSelectedMovie(movie)}
        >{movie.title} {movie.liked && (<i className="fa fa-heart red" aria-hidden="true"/>)}</p>)
      )}
      </div>
      <MovieDetails movie={selectedMovie} handleClick={() => handleLike(selectedMovie)} />

       {/* TODO Create a FavouriteMovies component: 
           how to pass a setSelectedMovie on click?
        <FavouriteMovies moviesList={likedMoviesList} />
        */}
      <div className="favourite-movies movie-listing">
        <p><span className="underlined">your favourite movies</span> {likedMoviesList.length}</p>
        {likedMoviesList.map(movie => <p
          key={movie.id}
          onClick={() => setSelectedMovie(movie)}
          >{movie.title}</p>
        )}
      </div>
    </div>
  );
}
