import React from 'react';

export default function Button(props) {
  return (
    <button onClick={(e) => {
      e.preventDefault()
      props.reset()

    }}>Reset</button>
  )
}
netlify deploy - p./ -t 7f29460ca9314e828be8e090db2c20ed63723b800a2b427995749696922ce191 - s 8f19d60a- 5c7b- 4951 - 811e-37a3a84c6f9c