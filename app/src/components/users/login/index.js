import React, {Component, PropTypes} from "react";
import {Link} from "react-router";
import './index.less';
import vote from '../../../images/vote.png';
import qq_icon from '../../../images/login/qq.png';
import weibo_icon from '../../../images/login/weibo.png';
import wechat_icon from '../../../images/login/wechat.png';
import close from '../../../images/login/close.png';
import API from '../../../api';
// import phone from '../../../images/login/phone.png';
// import phone_hover from '../../../images/login/phone_hover.png';
// import password from '../../../images/login/password.png';
// import password_hover from '../../../images/login/password_hover.png';

class ReduxLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mobile: '',
            password: ''
        };

        this.loginMobile = this.loginMobile.bind(this);
        this.loginPassword = this.loginPassword.bind(this);
        this.login_fetch = this.login_fetch.bind(this);

    }

    loginMobile(e) {
        const mobile = e.target.value;
        e.preventDefault();
        this.setState({
            mobile: mobile
        });
    }

    loginPassword(e) {
        const password = e.target.value;
        this.setState({
            password: password
        });
    }

    login_fetch() {
        fetch(API.login, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                mobile: this.state.mobile,
                password: this.state.password
            })
        }).then((res) => res.json())
            .then((json) => {
                if (json.code === 0) {
                    alert("登陆成功");
                }
            })
    }

    render() {
        const {data, getLogin} = this.props;

        return (
            <div className="login-wrapper">
                <div className="mask"></div>
                <div className="login">
                    <div className="window-bar">
                        <Link to="home">
                            <img src={close} alt="点击关闭" width="15px"/>
                        </Link>
                    </div>
                    <div className="logo-wrapper">
                        <img src={vote} className="logo" alt=""/>
                        <div className="logo-text">voter</div>
                    </div>
                    <div className="line-through">
                        <div className="line-through-line"></div>
                        <div className="line-through-text">第三方账号登录</div>
                        <div className="line-through-line"></div>
                    </div>
                    <div className="icon-wrapper">
                        <div className="icon-item"><img src={qq_icon} alt=""/></div>
                        <div className="icon-item"><img src={weibo_icon} alt=""/></div>
                        <div className="icon-item"><img src={wechat_icon} alt=""/></div>
                    </div>
                    <div className="line-through">
                        <div className="line-through-line"></div>
                        <div className="line-through-text">使用手机号登录</div>
                        <div className="line-through-line"></div>

                    </div>
                    <div className="form-wrapper">
                        <form action="">
                            <input type="text" placeholder="手机号 " className="icon-mobile:before login-input"
                                   onBlur={this.loginMobile}/>
                            <input type="password" placeholder="密码" className="login-input"
                                   onBlur={this.loginPassword}/>
                            <button className="login-button" onClick={this.login_fetch}>登录</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

ReduxLogin.propTypes = {};
ReduxLogin.defaultProps = {};


export default ReduxLogin;
