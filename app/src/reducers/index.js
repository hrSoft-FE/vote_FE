/**
 * Created by out_xu on 16/12/20.
 */
import {combineReducers} from 'redux'

import personal from './personalcenter.reducer'
import users from './user.reducer'
import raise from './raise.reducer'
import revise from './revise.reducer'
import poll from './poll.reducer'
import qrcode from './qrcode.reducer'
import vote from './vote.reducer'
const rootReducer = combineReducers({
  personal,
  users,
  raise,
  revise,
  poll,
  qrcode,
  vote
})

export default rootReducer
