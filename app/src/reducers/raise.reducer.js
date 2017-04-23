import {INITIATE_VOTE} from '../actions/type'

export default function Raise (state = {}, action) {
  switch (action.type) {
    case INITIATE_VOTE:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
