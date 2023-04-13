import React from 'react'

import classes from './Info.module.css'
const Info = (props) => {
  return (
    <div className={classes.info}>
      <h5>{props.title}</h5>
      <p>{props.info}</p>
    </div>
  )
}

export default Info
