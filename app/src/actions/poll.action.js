import { GET_VOTE } from './type'
import API from '../api'
import codeHelper from 'utils/codeHelper'
import {message} from 'antd'
import Goto from 'utils/goto'
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
}

export function getVoteInfo (id) {
  const token = window.localStorage.getItem('user.token')
  return dispatch => {
    fetch(API.vote + id + '/info', {
      method: 'GET',
      headers: {
        'token': token
      }
    }).then((res) => {
      return res.json()
    }).then((json) => {
      if (json.code === 0) {
        dispatch(getVote(json.data))
        message.success('投票信息获取成功')
      } else {
        codeHelper(json.code)
      }
    })
  }
}

export function submitVote (body) {
  let token = window.localStorage.getItem('user.token')
  let id = window.localStorage.getItem('voteId')
  return dispatch => {
    fetch(API.vote + id + '/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'token': token
      },
      body: JSON.stringify({'records': body})
    }).then((res) => {
      return res.json()
    }).then((json) => {
      if (json.code === 0) {
        dispatch(getVote(json.data))
        message.success('投票成功')
        Goto('/')
      } else {
        codeHelper(json.code)
      }
    })
  }
}
