import {SET_VOTE_ITEM} from './type'
import API from '../api'
import codeHelper from 'utils/codeHelper'
import {message} from 'antd'

const setVoteItem = (data) => {
  return {
    type: SET_VOTE_ITEM,
    payload: {
      ...data
    }
  }
}

export function getVoteItem (reviseId) {
  return (dispatch) => {
    const token = window.localStorage.getItem('user.token')
    if (token) {
      fetch(API.voteItemInfo.replace(/:voteId/, reviseId), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'token': token
        }
      }).then((res) => {
        return res.json()
      }).then((json) => {
        if (json.code === 0) {
          // message.success(codeHelper(json.code))
          console.log(json.data)
          window.localStorage.setItem('voteItem', json.data)
          dispatch(setVoteItem(json.data))
        } else if (json.code === 20001 || json.code === 20002) {
          // message.error(codeHelper(json.code))
          window.localStorage.clear('user.token')
          localStorage.setItem('user.is_login', 'false')
          window.history.go(0)
        } else {
          // message.error(codeHelper(json.code))
        }
      })
    }
  }
}

export function reviseVoteItem (delId, callback) {
  return async () => {
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
          // message.success(codeHelper(json.code))
        }
        if (json.code === 20001) {
          message.error(codeHelper(json.code))
          window.localStorage.clear('user.token')
          window.localStorage.setItem('user.is_login', 'false')
          return json.code
        } else {
        }
      }).then(() => {
        callback()
      })
    }
  }
}
