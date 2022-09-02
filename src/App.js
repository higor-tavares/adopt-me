import React from 'react'
import { render } from 'react-dom'
import Pet from './Pet'
const App = () => {
  return React.createElement('div', null, [
    React.createElement('h1', { id: 'brand' }, 'Adopt Me!'),
    React.createElement(Pet, { name: 'Kilindo', animal: 'Cat', breed: 'SRD' }),
    React.createElement(Pet, { name: 'Nicole', animal: 'Cat', breed: 'SRD' }),
    React.createElement(Pet, {
      name: 'Pandora',
      animal: 'Dog',
      breed: 'German Shepherd'
    })
  ])
}
render(React.createElement(App), document.getElementById('root'))
