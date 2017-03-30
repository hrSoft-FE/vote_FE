'use strict';

const targetPath = '/home/login';
import {browserHistory} from 'react-router';
export default ()=> {
    localStorage.clear();
    browserHistory.push(targetPath);
}

