import {GET_QRC_URL} from "../actions/type";

export default function qrcode(state = {}, action) {
    switch (action.type) {
        case GET_QRC_URL:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state
    }
}