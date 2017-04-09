import {SET_USER_INFO, CLEAR_USER_INFO} from "../actions/type";

export default function users(state = {}, action) {
    switch (action.type) {
        case SET_USER_INFO:
            return {
                ...state,
                ...action.payload
            };
        case CLEAR_USER_INFO:
            return {};
        default:
            return state
    }
}
