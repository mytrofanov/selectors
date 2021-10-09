import {usersAPI} from "../api/api";

const SET_MESSAGES = 'SET_MESSAGES';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_MESSAGE_COUNT = 'SET_TOTAL_MESSAGE_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    messages: [],
    pageSize: 10,
    totalMessageCount: 0,
    currentPage: 1,
    isFetching: false,
};

const MessageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MESSAGES: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_MESSAGE_COUNT: {
            return {...state, totalMessageCountCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
}


export const SetMessagesActionCreator = (messages) => ({type: SET_MESSAGES, messages})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalMessageCount = (TotalMessageCount) =>
    ({type: SET_TOTAL_MESSAGE_COUNT, count: TotalMessageCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const requestUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page))

        let data = await usersAPI.getUsers(page, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch((SetMessagesActionCreator)(data.items));
        dispatch(setTotalMessageCount(data.totalCount));
        dispatch(setCurrentPage(page));
    }
}


export default MessageReducer;