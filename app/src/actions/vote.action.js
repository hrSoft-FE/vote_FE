import {SET_USER_VOTE} from './type'
import API from '../api'
import codeHelper from 'utils/codeHelper'
import {message} from 'antd'

const setUserVote = (data) => {
  return {
    type: SET_USER_VOTE,
    payload: {
      ...data
    }
  }
}

export function getUserVote () {
  return (dispatch) => {
    const token = window.localStorage.getItem('user.token')
    if (token) {
      fetch(API.voteInfo, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'token': token
        }
      }).then((res) => {
        return res.json()
      }).then((json) => {
        if (json.code === 0) {
          message.success('投票获取成功')
          window.localStorage.setItem('vote', json.data)
          dispatch(setUserVote(json.data))
        } else {
          codeHelper(json.code)
          window.localStorage.clear('user.token')
          localStorage.setItem('user.is_login', 'false')
          window.history.go(0)
        }
      })
    }
  }
}

export function delUserVote (delId) {
  return () => {
    const token = window.localStorage.getItem('user.token')
    const url = API.delVote
    if (token) {
      fetch(url.replace(/:voteId/, delId), {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'token': token
        }
      }).then((res) => {
        return res.json()
      }).then((json) => {
        if (json.code === 0) {
          message.success(codeHelper(json.code))
        } else {
          window.localStorage.clear('user.token')
          window.localStorage.setItem('user.is_login', 'false')
          codeHelper(json.code)
          window.history.go(0)
        }
      })
    }
  }
}
