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
  const url = API.record.replace(/id/, id)
  console.log(url)
  if (token) {
    return dispatch => {
      fetch(url, {
        method: 'GET',
        headers: {
          'token': token
        }
      }).then((res) => {
        return res.json()
      }).then((json) => {
        if (json.code === 0) {
          console.log(json.data)
          dispatch(getVoteRecord(json.data))
          message.success('投票结果获取成功')
        } else {
          codeHelper(json.code)
        }
      })
    }
  }
}
