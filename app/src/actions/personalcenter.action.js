import API from '../api'
import { SET_PERSONAL_CENTER, CLEAR_PERSONAL_CENTER } from './type'
import Goto from 'utils/goto'
import { message } from 'antd'
import codeHelper from 'utils/codeHelper'
/**
 * 设置用户信息
 * @param data
 */
const setPersonalCenter = (data) => {
  return {
    type: SET_PERSONAL_CENTER,
    payload: {
      ...data
    }
  }
}

/**
 * 清除用户信息
 */
const clearPersonalCenter = () => {
  return {
    type: CLEAR_PERSONAL_CENTER,
    payload: {}
  }
}

/**
 * 获取用户信息
 */
export function getUserMe () {
  return (dispatch) => {
    const token = localStorage.getItem('user.token')
    if (token) {
      fetch(API.me, {
        method: 'GET',
        headers: {
          'token': token
        }
      }).then((res) => {
        return res.json()
      }).then((json) => {
        if (json.code === 0) {
          dispatch(setPersonalCenter(json.data))
          message.success('信息获取成功')
        }
        if (json.code === 20001 || json.code === 20002) {
          localStorage.clear()
          dispatch(clearPersonalCenter())
          Goto('login')
          codeHelper(json.code)
          window.history.go(0)
        }
      })
    }
  }
}

export function changeInfo (body) {
  return (dispatch) => {
    const token = localStorage.getItem('user.token')
    if (token) {
      if (body.name) {
        fetch(API.name, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'token': token
          },
          body: JSON.stringify(body.name)
        }).then((res) => res.json())
          .then((json) => {
            if (json.code === 0) {
              dispatch(setPersonalCenter(json.data))
              Goto('/')
              message.success('信息修改成功')
            } else {
              codeHelper(json.code)
            }
          })
      }

      if (body.password) {
        fetch(API.password, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'token': token
          },
          body: JSON.stringify(body.password)
        }).then((res) => res.json())
          .then((json) => {
            if (json.code === 0) {
              dispatch(setPersonalCenter(json.data))
              Goto('personalcenter')
              message.success('密码修改成功!')
            } else {
              codeHelper(json.code)
            }
          })
      }
    }
  }
}
