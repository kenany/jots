var jots = require('../');
var test = require('tape');
var isFunction = require('lodash.isfunction');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(jots));
});

test('works', function(t) {
  var TEST_ARRAY = [
    ['bread', 5],
    ['ardeb', 5],
    ['barde', 5],
    ['bared', 5],
    ['beard', 5],
    ['debar', 5],
    ['boils', 1],
    ['biros', 2],
    ['parts', 2],
    ['align', 1],
    ['tying', 0]
  ];

  t.plan(TEST_ARRAY.length * 2);

  TEST_ARRAY.forEach(function(value) {
    t.doesNotThrow(function() {
      jots('bread', value[0]);
    });
    t.equal(jots('bread', value[0]), value[1]);
  });
});