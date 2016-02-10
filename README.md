# esnext-decorators
[![Build Status](https://travis-ci.org/vinsonchuong/esnext-decorators.svg?branch=master)](https://travis-ci.org/vinsonchuong/esnext-decorators)

A collection of ES.next decorators.

## Installing
`esnext-decorators` is available as an
[npm package](https://www.npmjs.com/package/esnext-decorators).

## Usage
### Private Class Members
```js
import {privates} from 'esnext-decorators';

class Foo {
  method1() {}

  @private
  method2() {}
}
```

## Development
### Getting Started
The application requires the following external dependencies:
* Node.js

The rest of the dependencies are handled through:
```bash
npm install
```

Run tests with:
```bash
npm test
```
