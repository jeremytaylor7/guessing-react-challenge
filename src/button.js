import React from 'react';

export default function Button(props) {
  return (
    <button onClick={(e) => {
      e.preventDefault()
      props.reset()
    }}>Reset</button>
  )
}