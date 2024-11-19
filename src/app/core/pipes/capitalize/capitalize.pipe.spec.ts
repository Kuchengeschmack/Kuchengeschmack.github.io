import { CapitalizePipe } from './capitalize.pipe';

describe('capitalizePipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalizePipe();
    expect(pipe).toBeTruthy();
  });
});
