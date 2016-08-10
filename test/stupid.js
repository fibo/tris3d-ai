var stupid = require('stupid')
var test = require('tape')

test('stupid', function (t) {
  var tries = 120
  var choosen = [5, 11, 3]
  var choice

  t.plan(tries)

  for (var i = 0; i < tries; i++) {
    choice = stupid(choosen)

    t.equal(
      choosen.indexOf(choice),
      -1,
      'returns a choice that is not in previous moves'
    )
  }
})
