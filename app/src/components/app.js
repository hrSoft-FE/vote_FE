import React, {Component} from 'react'
import {Link} from 'react-router'
// import StyleSheet from "react-style";
import 'whatwg-fetch'
import 'fetch-ie8/fetch.js'

import logo from '../images/vote.png'
import Banner from './plugin/banner'
import Home from './content/home'
import './app.less'
class AppComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      is_login: false
    }
  }
  componentDidMount () {
    this.setState({
      is_login: localStorage.getItem('user.is_login') || false
    })
  }

  render () {
    let nav = ''
    if (this.state.is_login) {
      nav = (<div className='nav'>
        <Link to='/'>首页</Link>
        <Link to='vote'>我的投票</Link>
        <Link to='personalCenter'>个人中心</Link>
        <Home />
      </div>)
    } else {
      nav = (<div className='nav'>
        <Link to='login'>登录</Link>
        <Link to='register'>注册</Link>
      </div>)
    }
    return (
      <div className='App'>
        <div className='nav-wrapper'>
          <div className='bar'>
            <img src={logo} className='logo' alt='logo' />
            <div className='logo-text'>VOTE</div>
          </div>
          {nav}
        </div>
        <div className='children-wrapper'>
          {this.props.children}
        </div>
        <div className='banner-wrapper'>
          <Banner />
        </div>
        <Link to='poll'>
          <div className='join-wrapper'>
            <button className='join-button'>
              <span>参与投票</span>
            </button>
          </div>
        </Link>
      </div>
    )
  }
}

export default AppComponent
