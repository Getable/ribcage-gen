#!/usr/bin/env node
'use strict'

var gen = require('../index')
  , argv = require('minimist')(process.argv.slice(2))
  , fs = require('fs')
  , type = argv.t || argv.type || 'react'
  , target = argv._[0]

fs.stat(target, function (err, stat) {
  // on error, assume the directory doesn't exist, and we can proceed
  if (err) {
    gen({target: target, type: type}, function (context) {
      var msg = ''
      if (context.exists) {
        msg = 'Directory for "' + context.name + '" already exists! Starting demo instead :)'
      }else {
        msg = 'Created the ' + context.PascalName + ' component'
      }
      console.info(msg)
    })
  }
  // else, assume the directory exists and we don't want to overwrite
  else {
    console.error('Whoops! That directory already exists, not overwriting.')
  }
})
