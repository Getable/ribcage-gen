'use strict'

var hbsDir = require('hbs-dir')
  , fs = require('fs')
  , change = require('change-case')
  , path = require('path')
  , typeMap = {
    backbone: 'backbone-component-template'
    , react: 'react-component-template'
    , pane: 'backbone-pane-template'
    , page: 'react-page-template'
  }

// aliases for the type map
typeMap.jsx = typeMap.react

module.exports = function ribcageGen (options, cb) {
  var type = typeMap[options.type]
  if (!options) throw new Error('options are required')
  if (!type) throw new Error('type ' + options.type + ' not found')

  // hacky way to ensure pages
  if (options.type === 'react' && options.target.indexOf('/page-') > -1) {
    type = typeMap.page
  }

  var target = path.join(process.cwd(), options.target)

  var nameParts = options.target.split(path.sep)
  , name = nameParts[nameParts.length - 1]
  , opts = {
    origin: path.join(__dirname, type)
    , target: target
    , context: {
        PascalName: change.pascalCase(name)
        , camelName: change.camelCase(name)
        , titleName: change.titleCase(name)
        , name: name
      }
  }
  , successCallback = function successCallback () {
    cb(opts.context)
  }
  hbsDir(opts, successCallback)
}
