import React from "react";

const Stars = props => {
  let stars = [];
  for (var i = 0; i < props.popularity; i++) {
    stars.push(<i className="fa fa-star" aria-hidden="true" key={i}/>);
  }
  return stars;
};

export default Stars;
