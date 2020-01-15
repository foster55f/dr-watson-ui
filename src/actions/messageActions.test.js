import * as actions from '../actions';

describe('actions', () => {
    it('should have a type of ADD_MESSAGE', () => {
      // Setup
      const messages = ['hello', 'goodbye'];
      const expectedAction = {
        type: 'ADD_MESSAGE',
        messages: ['hello', 'goodbye']
      };
  
      // Execution
      const result = actions.addMessage(messages);
  
      // Expectation
      expect(result).toEqual(expectedAction);
    });
  });