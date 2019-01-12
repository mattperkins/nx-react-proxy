import React, { Component } from 'react'
import { render } from 'react-dom'
import ChartViz from './ChartViz'
import BobbleChart from './BobbleChart'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount () {

  }

  render () {
    return (
      <div style={{ display: 'flex' }}>
        <ChartViz />
        <BobbleChart />
      </div>
    )
  }
}

const root = document.getElementById('app')
render(<App />, root)
