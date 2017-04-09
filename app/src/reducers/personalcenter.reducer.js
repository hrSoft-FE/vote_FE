import {SET_PERSONAL_CENTER,CLEAR_PERSONAL_CENTER} from '../actions/type';

export default function Personal(state={},action){
    switch (action.type){
        case SET_PERSONAL_CENTER:
            return {
                ...state,
                ...action.payload
            };
        case CLEAR_PERSONAL_CENTER:
            return {

            };
        default:
            return state;
    }
}