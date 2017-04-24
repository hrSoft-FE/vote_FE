import {GET_QRC_URL} from './type'
import API from '../api'
import codeHelper from 'utils/codeHelper'
import {message} from 'antd'

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
  const token = localStorage.getItem('user.token') || 0
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
          message.success(codeHelper(json.code))
        } else {
          message.error(codeHelper(json.code))
        }
      })
    }
  }
}
