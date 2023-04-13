import React from 'react'

import MovieCard from '../MovieCard/MovieCard'

import classes from './CardsContainer.module.css'

const CardsContainer = (props) => {
  const handleClick = (movie) => {
    console.log(movie)
    props.setSelectedMovie(movie)
    props.setShowMovieInfo(true)
  }

  if (props.movieList.length === 0) {
    return <h1 className="centered">No Movies Found.</h1>
  }

  return (
    <div className={classes['card-container']}>
      {props.movieList.map((movie) => (
        <MovieCard key={movie.id} onClick={handleClick} movie={movie} />
      ))}
    </div>
  )
}

export default CardsContainer
