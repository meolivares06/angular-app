import { MyTPipe } from './my-t.pipe';

describe('MyTPipe', () => {
  it('create an instance', () => {
    const pipe = new MyTPipe();
    expect(pipe).toBeTruthy();
  });
});
