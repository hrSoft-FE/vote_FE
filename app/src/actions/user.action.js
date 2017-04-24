import { SET_USER_INFO } from './type'
import API from '../api'
import Goto from 'utils/goto'
import { message } from 'antd'
import codeHelper from 'utils/codeHelper'

const setUserInfo = (data) => {
  return {
    type: SET_USER_INFO,
    payload: {
      ...data
    }
  }
}

export function forLogin (body) {
  return (dispatch) => {
    return fetch(API.login, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then((res) => {
      return res.json()
    }).then((json) => {
      if (json.code === 0) {
        window.localStorage.setItem('user.token', json.data.token)
        window.localStorage.setItem('user.is_login', 'true')
        dispatch(setUserInfo(json.data))
        Goto('/')
        window.history.go(0)
        message.success(codeHelper(json.code))
      } else {
        message.error(codeHelper(json.code))
      }
    })
  }
}

export function forRegister (body) {
  return () => {
    return fetch(API.register, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then((res) => {
      return res.json()
    }).then((json) => {
      if (json.code === 0) {
        Goto('login')
        message.success(codeHelper(json.code))
      }
      if (json.code === 10003) {
        message.error(codeHelper(json.code))
      } else {
        message.error(codeHelper(json.code))
      }
    })
  }
}
