'use strict';

var fs = require('fs');
var path = require('path');

exports.get = function(event, context, callback) {
  var result = {
    statusCode: 200,
    body: "hello world",
    headers: {'content-type': 'text/html'}
  };

  callback(null, result);
};
