import React from 'react'
import { render } from 'react-dom'
import Form from './Form'

const App = (props) => (
  <div>
    <h1>{props.children}</h1>
    <Form />
  </div>
)

render(
  <App>hello world</App>, 
  document.getElementById('root')
)
