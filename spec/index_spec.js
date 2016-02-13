import {protectPrivates, markPrivate} from 'esnext-decorators';

describe('esnext-decorators', () => {
  describe('@protectPrivates', () => {
    it('allows declaring methods private', () => {
      @protectPrivates
      class Klass {
        publicMethod() {
          return this.privateMethod() + 1;
        }

        @markPrivate
        privateMethod() {
          return 43;
        }
      }
      const instance = new Klass();

      expect(instance.publicMethod()).toBe(44);
      expect(instance.privateMethod).not.toEqual(jasmine.any(Function));
    });
  });
});
