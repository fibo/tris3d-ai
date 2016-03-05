var stupid = require('..').stupid
var test = require('tape')

test('stupid', function (t) {
  t.plan(1)

  var moves = []
  var choice = stupid(moves)
  t.equal(moves.indexOf(choice), -1, 'returns a choice that is not in previous moves')
})
