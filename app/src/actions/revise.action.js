import {SET_VOTE_ITEM} from './type'
import API from '../api'
import codeHelper from 'utils/codeHelper'
import {message} from 'antd'
import Goto from '../utils/goto'

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
          message.success('获取问题成功')
          // console.log(json.data)
          // window.localStorage.setItem('voteItem', json.data)
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
export function reviseVoteItem (body) {
  const {id, title} = body
  const tempack = {
    voteId: id,
    title: title
  }
  return (dispatch) => {
    const token = localStorage.getItem('user.token')
    if (token) {
      fetch(API.title.replace(/:voteId/, 291), {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'token': token
        },
        body: JSON.stringify(tempack)
      }).then((res) => {
        return res.json()
      }).then((json) => {
        if (json.code === 0) {
          dispatch(setVoteItem(json.data))
          message.success('成功修改投票')
          Goto('vote')
        } else {
          codeHelper(json.code)
        }
      })
    }
  }
}