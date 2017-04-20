import API from '../api';
import {SET_PERSONAL_CENTER, CLEAR_PERSONAL_CENTER} from './type';
import Goto from '../utils/goto';
import { message } from 'antd';
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
        const token = localStorage.getItem('user.token');
        if (token) {
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
                    message.success('获取个人信息成功');
                }
                if (json.code === 20001) {
                    localStorage.clear();
                    dispatch(clearPersonalCenter());
                    message.error('登陆信息过期,请重新登陆。');
                    Goto('login');
                    window.history.go(0);
                }
            })
        }
    }
}

export function changeInfo(body) {
    return (dispatch) => {
        const token = localStorage.getItem('user.token');
        if (token) {
            if (body.name) {
                fetch(API.name, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'token': token
                    },
                    body: JSON.stringify(body.name)
                }).then((res) => res.json())
                    .then((json) => {
                        if (json.code === 0) {
                            console.log('用户名修改成功.');
                            dispatch(setPersonalCenter(json.data));
                            Goto('/');
                        }
                    });
            }

            if (body.password) {
                fetch(API.password, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'token': token
                    },
                    body: JSON.stringify(body.password)
                }).then((res) => res.json())
                    .then((json) => {
                        if (json.code === 0) {
                            console.log('密码修改成功!');
                            dispatch(setPersonalCenter(json.data));
                            Goto('/');
                        }
                    });
            }
        } else {
            console.log('修改失败,登陆失效,请重新登陆.')
        }
    }
}



