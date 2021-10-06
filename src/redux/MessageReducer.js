const SET_MESSAGES = 'SET_MESSAGES';

let initialState = {
    messages: []
};

const MessageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MESSAGES: {
            return {...state, messages: [...state.messages, ...action.messages]}
        }
        default:
            return state;
    }
}


export const SetMessagesActionCreator = (messages) => ({type: SET_MESSAGES, messages})

export default MessageReducer;