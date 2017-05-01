import {GET_VOTE_RECORD} from '../actions/type'

export default function statistics (state = {}, action) {
  switch (action.type) {
    case GET_VOTE_RECORD:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
