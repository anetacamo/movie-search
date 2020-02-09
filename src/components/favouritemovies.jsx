import React from "react";

export default function FavouriteMovies(props) {
  return (
    <div className="favourite-movies movie-listing">
      <p><span className="red underlined">Your favourite movies</span> {props.moviesList.length}</p>
      {props.moviesList.map(movie => <p
          key={movie.id}
          onClick={() => props.handleClick(movie)}
          >{movie.title}</p>
      )}
    </div>
  );
};
