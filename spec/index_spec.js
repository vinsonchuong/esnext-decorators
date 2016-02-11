import {privates} from 'esnext-decorators';

describe('esnext-decorators', () => {
  describe('@privates', () => {
    it('allows declaring methods private', () => {
      class Klass {
        publicMethod() {
          return this.privateMethod() + 1;
        }

        @privates
        privateMethod() {
          return 42;
        }
      }
      const instance = new Klass();

      expect(instance.publicMethod()).toBe(43);
      expect(instance.privateMethod).not.toEqual(jasmine.any(Function));
    });
  });
});
