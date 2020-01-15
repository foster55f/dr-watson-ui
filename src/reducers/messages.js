export const messages = (state = [], action) => {
      switch (action.type) {
            case 'ADD_MESSAGE':
                        console.log(state, action.messages)
            return [...state, action.messages]
      case 'CLEAR_MESSAGE':
            return [action.messages]
      default:
        return state;
    }
}
  
