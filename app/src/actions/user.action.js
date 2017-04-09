import {SET_USER_INFO, CLEAR_USER_INFO} from './type';
import API from "../api";
import Goto from '../utils/goto';

const setUserInfo = (data) => {
    return {
        type: SET_USER_INFO,
        payload: {
            ...data
        }
    }
};

const clearUserInfo = () => {
    localStorage.clear('user.token');
    localStorage.clear('user.is_login');
    return {
        type: CLEAR_USER_INFO,
        payload: {}
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
                console.log(json.data);
            }
            if (json.code === 10001) {
                console.log(json.data);
            }
            if (json.code === 10002) {
                console.log(json.data);
            }
        })
    }
}

export function forRegister(body) {
    return (dispatch) => {
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
                dispatch(setUserInfo(json.data));
                Goto('login');
            }
            if (json.code === 10003) {
                console.log(json.data);
            }
        })
    }
}