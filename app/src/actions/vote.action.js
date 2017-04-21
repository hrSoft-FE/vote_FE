import {SET_USER_VOTE} from './type';
import API from '../api';

const setUserVote = (data) => {
    return {
        type: SET_USER_VOTE,
        payload: {
            ...data
        }
    }
};

export function getUserVote() {
    return (dispatch) => {
        const token = localStorage.getItem('user.token');
        if (token) {
            fetch(API.voteInfo, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token,
                },
            }).then((res) => {
                return res.json();
            }).then((json) => {
                console.log(json);
                if (json.code === 0) {
                    console.log('qevet');
                    console.log(json.data);
                    console.log('jiuwe');
                    localStorage.setItem('vote', json.data);
                    dispatch(setUserVote(json.data));
                }
                if (json.code === 20001) {
                    localStorage.clear('user.token');
                    localStorage.setItem("user.is_login", "false");
                    window.alert('登陆信息过期,请重新登陆。');
                }
            })
        } else {
            localStorage.clear('user.token');
            localStorage.setItem("user.is_login", "false");
            window.alert('登陆信息过期,请重新登陆。');
        }
    }
}

export function delUserVote(delId) {
    return (dispatch) => {
        const token = localStorage.getItem('user.token');
        if (token) {
            fetch(API.delVote.replace(/:voteId/,delId), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token,
                },
            }).then((res) => {
                return res.json();
            }).then((json) => {
                if (json.code === 0) {
                    console.log('Successfully deleted!');
                    getUserVote();    // 刷新删除后的视图
                }
                if (json.code === 20001) {
                    localStorage.clear('user.token');
                    localStorage.setItem("user.is_login", "false");
                    window.alert('登陆信息过期,请重新登陆。');
                }
            })
        } else {
            localStorage.clear('user.token');
            localStorage.setItem("user.is_login", "false");
            window.alert('登陆信息过期,请重新登陆。');
        }
    }
}