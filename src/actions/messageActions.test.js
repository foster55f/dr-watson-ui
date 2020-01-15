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

    it('should have a type of CLEAR_MESSAGE', () => {
        // Setup
        const messages = [];
        const expectedAction = {
          type: 'CLEAR_MESSAGE',
          messages: []
        };
    
        // Execution
        const result = actions.clearMessages(messages);
    
        // Expectation
        expect(result).toEqual(expectedAction);
      });
  });