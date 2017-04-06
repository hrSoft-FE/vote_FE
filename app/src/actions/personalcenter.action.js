import API from '../api';
import CodeHelper from '../utils/codeHelper';
import {SET_PERSONAL_CENTER, CLEAR_PERSONAL_CENTER} from './type';

/**
 * 设置用户信息
 * @param data
 */
const setPersonalCenter = (data) => {
    return {
        type: SET_PERSONAL_CENTER,
        payload: {
            ...data
        }
    }
};

/**
 * 清除用户信息
 */
const clearPersonalCenter = () => {
    return {
        type: CLEAR_PERSONAL_CENTER,
        payload: {}
    }
};

/**
 * 获取用户信息
 */
export function getUserMe() {
    return (dispatch) => {
        // const token = localStorage.getItem('user.token');
        const token = "2413499c7ffb488ea8da7b5b12c9ee6a";
        fetch(API.me, {
            method: 'GET',
            headers: {
                'token': token
            },
        }).then((res) => {
            return res.json()
        }).then((json) => {
            if (json.code === 0) {
                console.log(json.data.name);
                dispatch(setPersonalCenter(json.data));
            } else {
                localStorage.clear('user.token');
                dispatch(clearPersonalCenter());
                window.alert('登陆信息过期,请重新登陆。');
                window.history.go(0);
            }
        })
    }
}

