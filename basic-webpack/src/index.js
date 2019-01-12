import React from 'react'
import { render } from 'react-dom'
import './reset.css'
import './style.css'
import './index.css'
import Users from './Users'

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Index</h1>
        <Users />
      </div>
    )
  }
}

const root = document.getElementById('app')
render(<App />, root)
