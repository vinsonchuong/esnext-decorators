# esnext-decorators
[![Build Status](https://travis-ci.org/vinsonchuong/esnext-decorators.svg?branch=master)](https://travis-ci.org/vinsonchuong/esnext-decorators)

A collection of ES.next decorators.

## Installing
`esnext-decorators` is available as an
[npm package](https://www.npmjs.com/package/esnext-decorators).

## Usage
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
