import {SET_USER_VOTE} from '../actions/type';

export default function vote(state={},action){
    switch (action.type){
        case SET_USER_VOTE:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}