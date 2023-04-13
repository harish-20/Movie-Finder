import React from 'react'

import classes from './Header.module.css'
const Header = (props) => {
  return (
    <header className={classes.header}>
      <h1>React Movie App</h1>
      <input
        type="text"
        value={props.searchMovie}
        onChange={(event) => props.setSearchMovie(event.target.value)}
        placeholder="Search movies here..."
      />
    </header>
  )
}

export default Header
