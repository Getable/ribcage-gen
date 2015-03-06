var test = require('tape')
  , {{PascalName}} = require('./index.js')
  , sinon = require('sinon')
  , createView = function createView(options){
    return new {{PascalName}}(options)
  }

test('{{PascalName}}: constructor', function(t){
  var view = createView()

  t.equal(
    typeof view
    , 'object'
    , 'creates an object'
  )

  t.end()
})

test('{{PascalName}}#bindEvents', function (t){
  var view = createView()
    , fn = view.bindEvents
    , stopListening

  function setup(){
    stopListening = sinon.spy(view, 'stopListening')
  }

  function cleanup(){
    stopListening.restore()
  }

  setup()

  // call bind events
  fn.call(view)
  t.ok(
    stopListening.calledOnce
    , 'calls stopListening so that events aren\'t bound multiple times'
  )
  t.ok(
    stopListening.calledWith(view.state)
    , 'calls stopListening with the state so that not all listeners are removed'
  )

  cleanup()
  t.end()
})

test('{{PascalName}}#beforeInit', function(t){
  var view = createView()
    , fn = view.beforeInit
    , options = {}

  fn.call(view, options)
  t.ok(
    view.state instanceof view.State
    , 'creates a state model'
  )

  t.end()
})

test('{{PascalName}}#context', function(t){
  var view = createView()
    , fn = view.context

  t.deepEqual(
    fn.call(view)
    , view.state.toJSON()
    , 'uses the state to pass variables to the template'
  )

  t.end()
})
