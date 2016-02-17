export function encapsulated(Klass) {
  const publicMemberNames = Reflect.ownKeys(Klass.prototype)
  .filter((name) => {
    const implementation = Klass.prototype[name];
    return !implementation || !implementation.private;
  });
  const publicMethodNames = publicMemberNames.filter((name) => {
    const implementation = Klass.prototype[name];
    return implementation && !implementation.private;
  });
  const publicVariableNames = publicMemberNames.filter((name) =>
    !Klass.prototype[name]
  );

  const instances = new WeakMap();
  class Wrapper {
    constructor(...args) {
      instances.set(this, new Klass(...args));
    }
  }

  for (const name of publicMethodNames) {
    Wrapper.prototype[name] = function wrapperMethod(...args) {
      const instance = instances.get(this);
      return instance[name](...args);
    };
  }

  for (const name of publicVariableNames) {
    Reflect.defineProperty(Wrapper.prototype, name, {
      get() {
        const instance = instances.get(this);
        return instance[name];
      },
      set(value) {
        const instance = instances.get(this);
        instance[name] = value;
      }
    });
  }

  return Wrapper;
}

export function internal(prototype, method) {
  prototype[method].private = true;
}
