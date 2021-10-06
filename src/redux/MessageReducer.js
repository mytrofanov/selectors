import {GetUserData} from "../api/api";

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

export const RequestMessages = () => {
    return async (dispatch) => {
        let data = await GetUserData();
        dispatch(SetMessagesActionCreator(data))
    }

}

export const SetMessagesActionCreator = (messages) => ({type: SET_MESSAGES, messages})

export default MessageReducer;