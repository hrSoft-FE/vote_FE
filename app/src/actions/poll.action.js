import { GET_VOTE } from './type'
import API from '../api'
import codeHelper from 'utils/codeHelper'
import {message} from 'antd'
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
        message.success(codeHelper(json.code))
      } else {
        message.error(codeHelper(json.code))
      }
    })
  }
}

export function submitVote (body) {
  let token = window.localStorage.getItem('user.token')
  let id = window.localStorage.getItem('voteID')
  return dispatch => {
    fetch(API.vote + id + '/submit', {
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
        dispatch(getVote(json.data))
        message.success(codeHelper(json.code))
      } else {
        message.error(codeHelper(json.code))
      }
    })
  }
}
