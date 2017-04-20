/**
 * Created by out_xu on 16/12/20.
 */
import {combineReducers} from 'redux';

import demo from './demo.reducer';
import personal from './personalcenter.reducer';
import users from './user.reducer';
import raise from './raise.reducer';
import poll from './poll.reducer';
import qrcode from './qrcode.reducer';
const rootReducer = combineReducers({
    demo,
    personal,
    users,
    raise,
    poll,
    qrcode
});

export default rootReducer;
