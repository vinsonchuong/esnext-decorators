import {childProcess} from 'node-promise-es6';

describe('esnext-decorators', () => {
  it('outputs "3...2...1...Hello World!"', async () => {
    const {stdout} = await childProcess.exec('esnext-decorators');
    expect(stdout.trim()).toBe('3...2...1...Hello World!');
  });
});
