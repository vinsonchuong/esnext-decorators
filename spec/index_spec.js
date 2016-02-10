import {privates} from 'esnext-decorators';

describe('esnext-decorators', () => {
  describe('@privates', () => {
    it('returns Hello World!', () => {
      expect(privates()).toBe('Hello World!');
    });
  });
});
