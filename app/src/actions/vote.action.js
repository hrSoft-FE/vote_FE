import {SET_USER_VOTE} from './type'
import API from '../api'

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
          console.log('获取成功！')
          window.localStorage.setItem('vote', json.data)
          dispatch(setUserVote(json.data))
        }
        if (json.code === 20001) {
          window.localStorage.clear('user.token')
          window.localStorage.setItem('user.is_login', 'false')
          window.alert('登陆信息过期,请重新登陆。')
        }
      })
    } else {
      window.localStorage.clear('user.token')
      window.localStorage.setItem('user.is_login', 'false')
      window.alert('登陆信息过期,请重新登陆。')
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
          console.log('Successfully deleted!')
        }
        if (json.code === 20001) {
          window.localStorage.clear('user.token')
          window.localStorage.setItem('user.is_login', 'false')
          window.alert('登陆信息过期,请重新登陆。')
        }
      })
    } else {
      window.localStorage.clear('user.token')
      window.localStorage.setItem('user.is_login', 'false')
      window.alert('登陆信息过期,请重新登陆。')
    }
  }
}
