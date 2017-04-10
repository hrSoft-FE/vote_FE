/**
 * Created by out_xu on 16/12/20.
 */
import {combineReducers} from 'redux';

import demo from './demo.reducer';
import personal from './personalcenter.reducer';
import users from './user.reducer';
import raise from './raise.reducer';
const rootReducer = combineReducers({
    demo,
    personal,
    users,
    raise
});

export default rootReducer;
