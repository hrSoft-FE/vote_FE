import {POLL_VOTE,GET_VOTE} from './type';
import API from "../api";
import Goto from '../utils/goto';

/**
 *
 * @param data
 * @returns {{type, payload: {}}}
 */
const getVote = (data) => {
    return {
        type: GET_VOTE,
        payload: {
            ...data
        }
    }
};

export function getVoteInfo(id) {
   return dispatch=>{
       fetch(API.vote+id+'/join',{
           method:'GET'
       }).then((res)=>{
           return res.json();
       }).then((json)=>{
           if(json.data===0){
               dispatch(getVote(json.data));
               Goto('/question');
           }
       })
   }
}
