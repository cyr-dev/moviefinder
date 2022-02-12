import React from 'react'

export default function Movie(props) {
  return (
    <div className='movie'>
      <img 
        className='movie-img'
        src= {`https://image.tmdb.org/t/p/w185/${props.path}`}
        alt={props.title} 
      />
      <div className='movie-body'>
        <h2 className='movie-title'>{props.title}</h2>
        <h4 className='overview-title'>Overview</h4>
        <p className='overview-text'>{props.overview? props.overview : 'Not available'}</p>
        <p className='movie-stars'>
          <span>Rating:</span>
          <span> {props.stars}/10</span> 
        </p>
        <p className='release-date'>
          <span>RELEASE DATE:</span>
          <span> {props.releaseDate}</span>
        </p>
      </div>
    </div>
  )
}

