import React from "react";
import Like from "./like.jsx";
import Stars from "./stars.jsx";

export default function MovieDetails(props) {
  return (
    <div className="film-details">
      {props.movie ? (
        <div>
          <h2>
            <span>{props.movie.title}</span> 
            {props.movie.title !== props.movie.original_title ? (
              <span className="red"> {props.movie.original_title}</span>
            ) : (null)}
          </h2>
          <Like 
            liked={props.movie.liked}
            onClick={props.handleClick}
          />
          <Stars 
            popularity={props.movie.popularity/10} 
          />
          <span> {props.movie.vote_count} votes</span>
          <p>{props.movie.overview}</p>
          <p>
            <b>release date</b> {props.movie.release_date}<br></br>
            <b>original language</b> {props.movie.original_language}
          </p>
        </div> 
      ) : (
        <p></p>
      )}
    </div>
  )
}