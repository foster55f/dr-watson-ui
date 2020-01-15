export const messages = (state=[], action) => {
    switch (action.type) {
      case 'ADD_MESSAGE':
            return [...state, action.messages]
      case 'CLEAR_MESSAGE':
            return [action.messages]
      default:
        return state;
    }
  }