import React from 'react'
import ReactDOM from 'react-dom'

import classes from './Modal.module.css'
import Info from '../Info/Info'

const ModalDetails = (props) => {
  if (!props.movie) {
    return (
      <div className={classes.modal}>
        <h2>Loading...</h2>
      </div>
    )
  }
  return (
    <>
      <div className={classes.modal}>
        <h3>{props.movie.title}</h3>
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
        <Info title="Original Title" info={props.movie.original_title} />
        <Info title="Overview" info={props.movie.overview} />
        <Info title="Release Date" info={props.movie.release_date} />
        <Info title="Vote Average" info={props.movie.vote_average} />
      </div>
      <div className={classes.backdrop} onClick={props.onCancel}></div>
    </>
  )
}

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalDetails movie={props.movie} onCancel={props.onCancel} />,
        document.getElementById('modal'),
      )}
    </>
  )
}

export default Modal
