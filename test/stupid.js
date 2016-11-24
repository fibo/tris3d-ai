const stupid = require('tris3d-ai').stupid
const test = require('tape')

test('stupid', function (t) {
  const tries = 120
  const choosen = [5, 11, 3]
  var choice

  t.plan(tries + 1)

  for (var i = 0; i < tries; i++) {
    choice = stupid(choosen)

    t.equal(
      choosen.indexOf(choice),
      -1,
      'returns a choice that is not in previous moves'
    )
  }

  t.throws(() => {
    stupid([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26])
  }, 'complains if there are no moves left')
})
