export const messages = (state = [], action) => {
      console.log(action.messages)
    switch (action.type) {
          case 'ADD_MESSAGE':
            //     return [...messages, { action}]
            return [...state, action.messages]
      case 'CLEAR_MESSAGE':
            return [action.messages]
      default:
        return state;
    }
  }