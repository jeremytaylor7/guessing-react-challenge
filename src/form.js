import React from 'react'

export default function Form(props) {
  return (
    <form onSubmit={e => { e.preventDefault() }}>
      <input className='input-form' placeholder="Enter an Integer"
        onChange={text => { props.changeInput(text.target.value) }} />
      <button className='btn' onClick={() => { props.submitGuess() }}>
        Guess
    </button>
    </form>
  )
}