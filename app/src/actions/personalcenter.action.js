import API from '../api';
import CodeHelper from '../utils/codeHelper';
import {SET_PERSONAL_CENTER, CLEAR_PERSONAL_CENTER} from './type';
import urlEncoder from '../utils/urlEncoder';
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
                    body: urlEncoder(body.name)
                }).then((res) => res.json())
                    .then((json) => {
                        if (json.code === 0) {
                            console.log(json.data);
                            dispatch(setPersonalCenter(json.data));
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
                    body: urlEncoder(body.password)
                }).then((res) => res.json())
                    .then((json) => {
                        if (json.code === 0) {
                            console.log(json.data);
                            alert('密码修改成功!');
                        }
                    });
            }
        } else {
            alert('修改失败,登陆失效,请重新登陆.')
        }
    }
}



