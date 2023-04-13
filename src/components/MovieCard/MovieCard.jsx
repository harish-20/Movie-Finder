import React from 'react'

import classes from './MovieCard.module.css'
import Info from '../Info/Info'

const MovieCard = (props) => {
  return (
    <div
      className={classes['movie-card']}
      onClick={() => props.onClick(props.movie)}
    >
      <Info title={props.movie.title} />
      {props.movie.backdrop_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${props.movie.backdrop_path}`}
          alt="movie"
        />
      ) : (
        <div className={classes.noimg}>
          <p>No image</p>
        </div>
      )}
      <Info title="Release Date" info={props.movie.release_date} />
      <Info title="Vote Average" info={props.movie.vote_average} />
      <Info title="Popularity" info={props.movie.popularity} />
    </div>
  )
}

export default MovieCard
