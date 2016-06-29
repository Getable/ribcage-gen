import React from 'react'
import Perf from 'react-addons-perf'
import createStore from '../../../stores/index-dev.js'
import createDevTools from '../../../static/create-devtools.js'
import runDev from '../../../static/run-dev.js'
import run from '../../../static/run.js'
import createRouter from '../../../static/create-router'
import {Route} from 'react-router'

import {{PascalName}} from '../index.js'

// expose React for debugging
window.React = React

const component = {{PascalName}}
const routes = <Route path="/" component={component} />
const DevTools = createDevTools()
const store = createStore({DevTools})
runDev({store, DevTools})

Perf.start()
const children = createRouter({routes})
run({store, children}, () => {
  // prints the amount of time wasted doing extra work. This should print an
  // empty array. If you see a table, something's wrong. Make sure that
  // pureRender is working and that data is immuatble.
  console.info('Perf.printWasted()')
  Perf.printWasted()
  Perf.stop()
})
