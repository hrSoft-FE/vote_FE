import {GET_VOTE_RECORD} from './type'
import API from '../api'
import codeHelper from 'utils/codeHelper'
import {message} from 'antd'

/**
 *
 * @param data
 * @returns {{type, payload: {}}}
 */
const getVoteRecord = (data) => {
  return {
    type: GET_VOTE_RECORD,
    payload: {
      ...data
    }
  }
}

export function getVoteData (id) {
  const token = localStorage.getItem('user.token') || 0
  if (token) {
    return dispatch => {
      fetch(API.vote + id + '/encode', {
        method: 'GET',
        headers: {
          'token': token
        }
      }).then((res) => {
        return res.json()
      }).then((json) => {
        if (json.code === 0) {
          dispatch(getVoteRecord(json.data))
          message.success('获取二维码成功')
        } else {
          codeHelper(json.code)
        }
      })
    }
  }
}
