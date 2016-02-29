# esnext-decorators
[![Build Status](https://travis-ci.org/vinsonchuong/esnext-decorators.svg?branch=master)](https://travis-ci.org/vinsonchuong/esnext-decorators)

A collection of ES.next decorators.

## Installing
`esnext-decorators` is available as an
[npm package](https://www.npmjs.com/package/esnext-decorators).

## Usage
`esnext-decorators` has been tested in a Babel 6 environment with the plugin
`babel-plugin-transform-decorators-legacy`. It should also work in a Babel 5
environment set to the correct stage but is untested.

### Private Instance Members
```js
import {encapsulated, internal} from 'esnext-decorators';

@encapsulated
class Foo {
  constructor() {
    this.privateVariable = 42;
    this.privateReadableVariable = 'foo';
    this.privateWritableVariable = 'bar';
  }

  get exposedReadableVariable() {
    return this.privateReadableVariable;
  }

  get exposedWritableVariable() {
    return this.privateWritableVariable;
  }
  set exposedWritableVariable(newValue) {
    this.privateWritableVariable = newValue;
  }

  publicMethod() {}

  @internal
  privateMethod() {}
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
