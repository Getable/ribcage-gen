import React from 'react'
import Perf from 'react-addons-perf'
// NOTE: you might need to change this to the index for your app
import createStore from '../../../stores/index.js'
import run from '../../../static/run.js'
import createRouter from '../../../static/create-router'
import {Route} from 'react-router'

import {{PascalName}} from '../index.js'

// expose React for debugging
window.React = React

const component = {{PascalName}}
const routes = <Route path="/" component={component} />
const store = createStore()

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
