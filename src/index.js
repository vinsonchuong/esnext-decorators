export function protectPrivates(Klass) {
  const publicMethodNames = [
    ...Object.getOwnPropertyNames(Klass.prototype),
    ...Object.getOwnPropertySymbols(Klass.prototype)
  ].filter(method => !Klass.prototype[method].private);

  const instances = new WeakMap();
  class Wrapper {
    constructor(...args) {
      instances.set(this, new Klass(...args));
    }
  }

  for (const name of publicMethodNames) {
    Wrapper.prototype[name] = function(...args) {
      const instance = instances.get(this);
      return instance[name].call(instance, ...args);
    };
  }

  return Wrapper;
}

export function markPrivate(prototype, method) {
  prototype[method].private = true;
}
