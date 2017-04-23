import {GET_VOTE} from '../actions/type'

export default function Poll (state = {}, action) {
  switch (action.type) {
    case GET_VOTE:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
