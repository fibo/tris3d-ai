var bastard = require('bastard')
var test = require('tape')

test('bastard', function (t) {
  t.plan(2)

  t.equal(bastard([0, 7, 11, 1]), 2, 'tryes to block previous player')

  t.equal(bastard([10, 0, 7, 4, 1, 8]), 2, 'tryes to block next player')
})

