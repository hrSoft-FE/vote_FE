/**
 * Created by out_xu on 16/12/20.
 */
import {combineReducers} from 'redux';

import demo from './demo.reducer'
import personal from './personalcenter.reducer'
const rootReducer = combineReducers({
    demo,
    personal,
});

export default rootReducer;
