import { GameFilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new GameFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
