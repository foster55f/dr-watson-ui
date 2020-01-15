import { messages } from './messages';

describe('messages', () => {
  it('should return the initial state', () => {
    // Setup
    const expected = [];

    // Execution
    const result =  messages(undefined, {});

    // Expectation
    expect(result).toEqual(expected);
  });
});