import React from 'react'

function Link({ to, children, ...props }) {
  let path = `/#${to}`

  if (process.env.NODE_ENV === 'production') {
    path = to === '/' ? 'index.html' : `${to.slice(1)}.html`
  }

  return (
    <a href={path} {...props}>
      {children}
    </a>
  )
}

export default Link
