import {SET_USER_VOTE} from './type'
import API from '../api'
import codeHelper from 'utils/codeHelper'
import {message} from 'antd'
import Goto from 'utils/goto'

const setUserVote = (data) => {
  return {
    type: SET_USER_VOTE,
    payload: {
      ...data
    }
  }
}

export function getUserVote (page = 2, rows = 80) {
  return (dispatch) => {
    const token = window.localStorage.getItem('user.token')
    // 此处为了替换2处，连写了2次replace，有点累赘
    const url = API.voteInfo.replace(/pnum/, page).replace(/rnum/, rows)
    if (token) {
      fetch(url, {
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
          // window.localStorage.clear('user.token')
          // localStorage.setItem('user.is_login', 'false')
          // window.history.go(0)
          Goto('login')
        }
      })
    }
  }
}

export function delUserVote (delId, callback) {
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
          message.success('删除成功')
          window.history.go(0)
        } else if (json.code === 20001) {
          codeHelper(json.code)
          // window.localStorage.clear('user.token')
          // window.localStorage.setItem('user.is_login', 'false')
          return json.code
        } else {
          console.log(json.code)
        }
      }).then(() => {
        callback()
      })
    }
  }
}
