import React from "react";

export default function FavouriteMovies(props) {
  return (
    <div className="favourite-movies">
        <p><span className="red underlined">See all liked movies</span> {props.movieList.length}</p>
        {props.movieList.map(movie => <p
            key={movie.id}
            onClick={props.handleClick}
            >{movie.title}</p>
        )}
    </div>
  );
};
