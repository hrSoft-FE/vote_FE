import {GET_QRC_URL} from './type'
import API from '../api'

/**
 *
 * @param data
 * @returns {{type, payload: {}}}
 */
const getQrcodeUrl = (data) => {
  return {
    type: GET_QRC_URL,
    payload: {
      ...data
    }
  }
}

export function getQRCode (id) {
  const token = localStorage.getItem('user.token')
  const url = 'http://localhost:8080/#/question' + id
  if (token) {
    return dispatch => {
      fetch(API.vote + id + '/encode', {
        method: 'POST',
        headers: {
          'token': token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({'url': url})
      }).then((res) => {
        return res.json()
      }).then((json) => {
        if (json.code === 0) {
          dispatch(getQrcodeUrl(json.data))
          console.log('二维码获取成功')
        }
      })
    }
  } else {
    console.log('token不存在')
  }
}
