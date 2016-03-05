# tris3d-ai

> [tris3d][tris3d] surrogate player

**Table Of Contents:**

* [Installation](#installation)
* [Api](#api)
  - [bastard](#bastard)
  - [smart](#smart)
  - [stupid](#stupid)
* [License](#license)

[![NPM version](https://badge.fury.io/js/tris3d-ai.svg)](http://badge.fury.io/js/tris3d-ai) [![Dependency Status](https://gemnasium.com/fibo/tris3d-ai.svg)](https://gemnasium.com/fibo/tris3d-ai) [![Change log](https://img.shields.io/badge/change-log-blue.svg)](https://github.com/fibo/tris3d-ai/blob/master/CHANGELOG.md)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Installation

With [npm](https://npmjs.org/) do

```bash
$ npm install tris3d-ai
```

## API

Every function exported represents a personality of a bot playing [tris3d][tris3d].

### stupid

> random choices

```
var stupid = require('tris3d-ai').stupid
```

### smart

> undestands its win moves

```
var smart = require('tris3d-ai').smart
```

### bastard

> tries to block other players moves

```
var bastard = require('tris3d-ai').bastard
```

## License

[MIT](http://g14n.info/mit-license)

[tris3d]: http://g14n.info/tris3d

