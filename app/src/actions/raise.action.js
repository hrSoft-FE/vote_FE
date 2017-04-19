import {INITIATE_VOTE} from './type';
import API from '../api';
import Goto from '../utils/goto';
import {message} from 'antd';

/**
 * 发起投票
 * @param data
 * @returns {{type: *, payload: {}}}
 */
export const initiateVote = (data) => {
    return {
        type: INITIATE_VOTE,
        payload: {
            ...data
        }
    }
};

/**
 *
 * @param body
 */
export function fetchVote(body) {
    return (dispatch) => {
        console.log('hi,action');
        const token = localStorage.getItem('user.token');
        if (token) {
            fetch(API.create, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token
                },
                body: JSON.stringify(body)
            }).then((res) => {
                return res.json()
            }).then((json) => {
                if (json.code === 0) {
                    console.log('hi');
                    dispatch(initiateVote(json.data));
                    localStorage.setItem('voteId',json.data.vote.id);
                    Goto('qrcode');
                }
                if(json.code === 30001){
                    message.warning("投票已存在");
                }
            })
        } else {
            message.warning("登录失效");
        }
    }
}
