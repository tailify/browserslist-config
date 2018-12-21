'use strict';

const browserslist = require('browserslist');
const config = require('../lib/index.js');

it('should not contain invalid queries', () => {
  const result = browserslist(config);
  expect(result).toBeTruthy();
});
