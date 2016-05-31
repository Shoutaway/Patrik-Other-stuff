/**
 *	@name JSON File Utility
 *
 *	@description
 *	Utility functions for reading, writing and integrity checking
 *	for JSON files stored in a file system.
 *
 *	@version ALFA 0.2
 *	@author Patrik Forsberg <mail@patrikforsberg.co>
 *	@web patrikforsberg.co
 *	@date 2016-03-30
 */

/// <reference path="../typings/main.d.ts" />

"use strict";

var fs = require('fs')

/*
class JsonFileUtility {
	constructor() {
	}
	
	public readFile(file, options, callback) {
		if (callback == null) {
			callback = options
			options = {};
		}

		fs.readFile(file, options, function(error, data) {
			if (error) {
				return callback(error)
			}

			var obj;

			try {
				obj = JSON.parse(data, options ? options.reviver : null);
			} catch (exception) {
				exception.message = file + ': ' + exception.message
				return callback(exception)
			}

			callback(null, obj)
		});
	}

	public readFileSync (file, options) {
  options = options || {}
  if (typeof options === 'string') {
    options = {encoding: options}
  }

  var shouldThrow = 'throws' in options ? options.throws : true
  var content = fs.readFileSync(file, options)

  try {
    return JSON.parse(content, options.reviver)
  } catch (err) {
    if (shouldThrow) {
      err.message = file + ': ' + err.message
      throw err
    } else {
      return null
    }
  }
}

public writeFile (file, obj, options, callback) {
  if (callback == null) {
    callback = options
    options = {}
  }

  var spaces = typeof options === 'object' && options !== null
    ? 'spaces' in options
    ? options.spaces : this.spaces
    : this.spaces

  var str = ''
  try {
    str = JSON.stringify(obj, options ? options.replacer : null, spaces) + '\n'
  } catch (err) {
    if (callback) return callback(err, null)
  }

  fs.writeFile(file, str, options, callback)
}

function writeFileSync (file, obj, options) {
  options = options || {}

  var spaces = typeof options === 'object' && options !== null
    ? 'spaces' in options
    ? options.spaces : this.spaces
    : this.spaces

  var str = JSON.stringify(obj, options.replacer, spaces) + '\n'
  // not sure if fs.writeFileSync returns anything, but just in case
  return fs.writeFileSync(file, str, options)
}

var jsonfile = {
  spaces: null,
  readFile: readFile,
  readFileSync: readFileSync,
  writeFile: writeFile,
  writeFileSync: writeFileSync
}
}

export { JsonFileUtility }
*/