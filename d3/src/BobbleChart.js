import React, { Component } from 'react'
import '../node_modules/react-vis/dist/style.css'
import { XYPlot, LineMarkSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis } from 'react-vis'

export default class ChartViz extends Component {
  constructor (props) {
    super(props)
    this.state = { data: [] }
  }

  render () {
    const data = new Array(19).fill(0).reduce((prev, curr) => [...prev, {
      x: prev.slice(-2)[0].x + 4,
      y: prev.slice(-6)[0].y * (0.9 + Math.random() * 0.2)
    }], [{ x: 0, y: 4 }])

    return (
      <div>
        <XYPlot height={300} width={400}>
          <LineMarkSeries data={data} />
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
        </XYPlot>
      </div>
    )
  }
}
