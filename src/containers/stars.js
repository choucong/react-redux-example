import React from 'react';
export default class Stars extends React.Component {

  render(){
    return (
        <span className="rating-stars" data-rating="3.9">
          <span className="rating-star rating-star-small-full"></span>
          <span className="rating-star rating-star-small-full"></span>
          <span className="rating-star rating-star-small-full"></span>
          <span className="rating-star rating-star-small-gray"></span>
          <span className="rating-star rating-star-small-gray"></span>
        </span>
    )
  }
}
