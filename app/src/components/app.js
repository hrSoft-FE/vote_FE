import React, {Component} from 'react';
import {Link} from 'react-router'
// import StyleSheet from "react-style";
import "whatwg-fetch";
import "fetch-ie8/fetch.js";

require('console-polyfill');
require('es6-promise');

import logo from '../images/vote.png';
import Banner from './plugin/banner';
import Login from './users/login';
import Register from './users/register';
import './app.less'
class AppComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true
        }
    }



    render() {
        let nav = "";
        if (this.state.login) {
            nav = (<div className="nav">
                <Link to="home">首页</Link>
                <Link to="vote">我的投票</Link>
                <Link to="personalCenter">个人中心</Link>
            </div>)
        } else {
            nav = (<div className="nav">
                <a></a>
                <Link to="login">登陆</Link>
                <Link to="register">注册</Link>
            </div>)
        }
        return (
            <div className="App">
                <div className="nav-wrapper">
                    <div className="bar">
                        <img src={logo} className="logo" alt="logo"/>
                        <div className="logo-text">VOTE</div>
                    </div>
                    {nav}
                </div>
                <div className="children-wrapper">
                    {this.props.children}
                </div>
                <div className="banner-wrapper">
                    <Banner/>
                </div>

            </div>
        )
    }
}

export default AppComponent;
