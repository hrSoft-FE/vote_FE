import {SET_VOTE_ITEM} from '../actions/type'

export default function revise (state = {}, action) {
  switch (action.type) {
    case SET_VOTE_ITEM:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
