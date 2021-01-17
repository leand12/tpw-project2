import { IsGamePipe } from './is-game.pipe';

describe('IsGamePipe', () => {
  it('create an instance', () => {
    const pipe = new IsGamePipe();
    expect(pipe).toBeTruthy();
  });
});
