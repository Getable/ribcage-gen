import React from 'react'
import Perf from 'react-addons-perf'
import ReactDOM from 'react-dom'
import a11y from 'react-a11y'

import {{PascalName}} from '../index.jsx'
import data from './data.js'

// expose React for debugging
window.React = React
a11y(ReactDOM)

Perf.start()
ReactDOM.render(
  <{{PascalName}} {...data} />
  , document.getElementById('app')
  , () => {
    // prints the amount of time wasted doing extra work. This should print an
    // empty array. If you see a table, something's wrong. Make sure that
    // pureRender is working and that data is immuatble.
    console.info('Perf.printWasted()')
    Perf.printWasted()
    Perf.stop()
  }
)
