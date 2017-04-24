import React, { Component } from 'react'
import logo from '../../../images/vote.png'
import './index.less'
import Goto from '../../../utils/goto'
import API from '../../../api'
import codeHelper from 'utils/codeHelper'
import {message} from 'antd'

class Poll extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: '',
      password: ''
    }
    this.enterVote = this.enterVote.bind(this)
    this.getId = this.getId.bind(this)
  }

  getId (e) {
    e.preventDefault()
    let id = e.target.value
    this.setState({
      id: id
    })
    console.log(id)
  }

  // getPassword (e) {
  //   e.preventDefault()
  //   let password = e.target.value
  //   this.setState({
  //     password: password
  //   })
  //   console.log(password)
  // }

  enterVote (e) {
    e.preventDefault()
    const id = this.state.id
    const token = window.localStorage.getItem('user.token')
    window.localStorage.setItem('voteId', id)
    fetch(API.vote + id + '/join', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'token': token
      },
      body: JSON.stringify({'voteId': id})
    }).then((res) => {
      return res.json()
    }).then((json) => {
      if (json.code === 0) {
        Goto('/question/' + id)
        message.success(codeHelper(json.code))
      } else {
        message.error(codeHelper(json.code))
      }
    })
  }

  render () {
    return (
      <div className='poll-wrapper'>
        <div className='mask' />
        <div className='poll'>
          <div className='logo-wrapper'>
            <div className='logo'>
              <img src={logo} alt='' />
            </div>
          </div>
          <div className='form-wrapper'>
            <form>
              <label className='poll-code'>请输入投票码:&nbsp;
                <input type='text' onChange={this.getId} />
              </label>
              <label className='poll-submit'>
                <button onClick={this.enterVote}>确定</button>
              </label>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
Poll.propTypes = {}
Poll.defaultProps = {}

export default Poll
