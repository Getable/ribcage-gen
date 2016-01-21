import React from 'react'
import createStore from '../../../stores/index-dev.js'
import createDevTools from '../../../static/create-devtools.js'
import runDev from '../../../static/run-dev.js'
import run from '../../../static/run.js'

import {{PascalName}} from '../index.jsx'
import data from './data.js'

// expose React for debugging
window.React = React

const DevTools = createDevTools()
const store = createStore({DevTools})
const children = <{{PascalName}} {...data} />

runDev({store, DevTools})
run({store, children})
