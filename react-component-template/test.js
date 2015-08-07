import test from 'tape'
import {{PascalName}} from './index.jsx'
import React from 'react'
import {addons} from 'react/addons'
import testTree from 'react-test-tree'
import defaultProps from './example/data.js'
const {TestUtils} = addons
const {isElement} = TestUtils

test('{{PascalName}}: constructor', (t) => {
  const {{camelName}} = React.createElement({{PascalName}}, defaultProps)

  t.ok(
    isElement({{camelName}})
    , 'is a valid react component'
  )

  // NOTE: if you're using redux, you'll need to change this test to
  // `<PageComponent.DecoratedComponent />`
  // NOTE: this test can be annoying but it triggers off many other automatic
  // tests that are important to have pass. Have your component return `null`
  // rather than throwing
  // NOTE: For real, don't remove this test, _especially_ if this is page
  const _warn = console.warn
  console.warn = noop
  t.doesNotThrow(
    testTree.bind(React, <{{PascalName}} />)
    , 'does not throw when there are no props, to ensure a loading state is possible'
  )
  console.warn = _warn

  t.end()
})

// I'm a sample test, you probably want to delete me
test('{{PascalName}}: render', (t) => {
  const name = 'john doe'
  const tree = testTree(<{{PascalName}} {...defaultProps} />)

  t.equal(
    tree.title.innerText
    , name
    , 'puts the name prop in the title'
  )

  tree.dispose()
  t.end()
})

