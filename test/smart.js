var smart = require('smart')
var test = require('tape')

test('smart', function (t) {
  t.plan(2)

  var choosen = [0, 10, 11, 1, 5, 6]
  t.equal(smart(choosen), 2, 'tryes to win')

  t.ok((smart([0, 1, 2, 3]) > 3), 'otherwise moves randomly')
})

