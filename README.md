# tris3d-ai

> [tris3d] surrogate player

[Installation](#installation) |
[API](#api) |
[License](#license)

[![NPM version](https://badge.fury.io/js/tris3d-ai.svg)](http://badge.fury.io/js/tris3d-ai)
[![Dependency Status](https://gemnasium.com/fibo/tris3d-ai.svg)](https://gemnasium.com/fibo/tris3d-ai)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Installation

With [npm](https://npmjs.org/) do

```bash
npm install tris3d-ai --save
```

## API

Every function exported represents a personality of a bot playing [tris3d].

### stupid

> It choses randomly.

```javascript
var stupid = require('tris3d-ai').stupid

var choice = stupid(choosen)
```

### smart **TODO**

> Undestands when it can win.

```javascript
var smart = require('tris3d-ai').smart
```

### bastard **TODO**

> Tries to block other players.

```javascript
var bastard = require('tris3d-ai').bastard
```

## License

[MIT](http://g14n.info/mit-license)

[tris3d]: http://g14n.info/tris3d "tris3d"
