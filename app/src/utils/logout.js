'use strict'

const targetPath = '/login'
import {browserHistory} from 'react-router'
export default () => {
  localStorage.clear()
  browserHistory.push(targetPath)
}
