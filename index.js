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
  const type = typeMap[options.type]
  if (!options) throw new Error('options are required')
  if (!type) throw new Error('type ' + options.type + ' not found')
  const {target} = options

  // hacky way to ensure pages
  if (options.type === 'react' && (target.indexOf('/page-') > -1) || target.indexOf('/connected-') > -1)  {
    type = typeMap.page
  }

  const nameParts = options.target.split(path.sep)
  , name = nameParts[nameParts.length - 1]
  , opts = {
    origin: path.join(__dirname, type)
    , target: path.join(process.cwd(), target)
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
