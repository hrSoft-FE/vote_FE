import {SET_USER_INFO, CLEAR_USER_INFO} from './type';
import API from "../api";
import Goto from '../utils/goto';
import { message } from 'antd';

const setUserInfo = (data) => {
    return {
        type: SET_USER_INFO,
        payload: {
            ...data
        }
    }
};


export function forLogin(body) {
    return (dispatch) => {
        return fetch(API.login, {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then((res) => {
            return res.json();
        }).then((json) => {
            if (json.code === 0) {
                localStorage.setItem("user.token", json.data.token);
                localStorage.setItem("user.is_login", "true");
                dispatch(setUserInfo(json.data));
                Goto('/');
                window.history.go(0);
                console.log('登录成功');
            }
            if (json.code === 10001) {
                message.error('密码输入错误');
            }
            if (json.code === 10002) {
                message.error('手机号输入错误');
            }
        })
    }
}

export function forRegister(body) {
    return () => {
        return fetch(API.register, {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then((res) => {
            return res.json();
        }).then((json) => {
            if (json.code === 0) {
                console.log(json);
                Goto('login');
                message.success("注册成功");
            }
            if (json.code === 10003) {
                message.error("手机号已被注册，请更换手机号重新注册");
            }
        })
    }
}