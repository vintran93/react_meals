import React from 'react'


const Category = (props) => {
  return (
    <div>
        <button onClick={props.handleClick} id={props.category}>{props.category}</button>
    </div>
  )
}

export default Category