import {encapsulated, internal} from 'esnext-decorators';

describe('esnext-decorators', () => {
  describe('@encapsulated and @internal', () => {
    it('allows declaring methods private', () => {
      @encapsulated
      class Klass {
        publicMethod() {
          return this.privateMethod() + 1;
        }

        @internal
        privateMethod() {
          return 43;
        }
      }
      const instance = new Klass();

      expect(instance.publicMethod()).toBe(44);
      expect(instance.privateMethod).toBeUndefined();
    });

    it('makes instance variables private by default', () => {
      @encapsulated
      class Klass {
        constructor() {
          this.variable = 42;
        }

        method() {
          return this.variable;
        }
      }
      const instance = new Klass();

      expect(instance.method()).toBe(42);
      expect(instance.variable).toBeUndefined();
    });

    it('can still expose instance variables', () => {
      @encapsulated
      class Klass {
        constructor() {
          this.variable = 42;
        }

        get readable() {
          return this.variable;
        }

        get writable() {
          return this.variable;
        }
        set writable(value) {
          this.variable = value;
        }
      }
      const instance = new Klass();

      expect(instance.readable).toBe(42);
      expect(() => {
        instance.readable = 3;
      }).toThrowError(TypeError);

      expect(instance.writable).toBe(42);
      instance.writable = 3;
      expect(instance.writable).toBe(3);
    });
  });
});
