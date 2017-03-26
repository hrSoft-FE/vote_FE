import React, {Component, PropTypes} from "react";
import './index.less';
import API from '../../../api';
import close from '../../../images/login/close.png';
import {Link} from 'react-router';
import Regx from '../../../utils/regx';
class ReduxRegister extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mobile: '',
            name: '',
            password: ''
        };

        this._register = this._register.bind(this);
        this.checkMobile = this.checkMobile.bind(this);
        this.checkPassword = this.checkPassword.bind(this);
        this.checkSecondPassword = this.checkSecondPassword.bind(this);
        this.registerName = this.registerName.bind(this);
    }

    registerName(e) {
        const name = e.target.value;
        this.setState({
            name: name
        })
    }

    checkMobile(e) {
        const mobile = e.target.value;
        if (!Regx.mobile.test(mobile)) {
            alert('手机号应为11位，请重新输入。')
        }
        this.setState({
            mobile: mobile
        })
    };

    checkPassword(e) {
        const password = e.target.value;
        if (!Regx.password.test(password)) {
            alert('密码应为6-20位，请重新输入。')
        }
        this.setState({
            password: password
        })
    }

    checkSecondPassword(e) {
        const secondpassword = e.target.value;
        if (secondpassword !== this.state.password) {
            alert('两次密码输入不一致！')
        }
    }

    _register() {

        fetch(API.register, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                mobile: this.state.mobile,
                name: this.state.name,
                password: this.state.password
            })
        }).then((res) => res.json())
            .then((json) => {
                if (json.code == 0) {
                    alert("注册成功,请登录。")
                }
                if (json.code == 10003) {
                    alert("手机号已被注册。")
                }
            })
    }

    render() {

        const {data, getLogin} = this.props;

        return (
            <div className="register-wrapper">
                <div className="mask"></div>
                <div className="register">
                    <div className="form-wrapper">
                        <div className="window-bar">
                            <a href="#">
                                <img src={close} alt="点击关闭" width="15px"/>
                            </a>
                        </div>
                        <form className="register-form">
                            <div className="form-item">
                                <label htmlFor="" className="register-label">登录名称:</label>
                                <input className="register-input" type="text" onBlur={this.registerName}/>
                            </div>
                            <div className="form-item">
                                <label htmlFor="" className="register-label">密码:</label>
                                <input className="register-input" type="password" onBlur={this.checkPassword}/>
                            </div>
                            <div className="form-item">
                                <label htmlFor="" className="register-label">确认密码:</label>
                                <input className="register-input" type="password" onBlur={this.checkSecondPassword}/>
                            </div>
                            <div className="form-item">
                                <label htmlFor="" className="register-label">手机号:</label>
                                <input className="register-input" type="text" onBlur={this.checkMobile}/>
                                <button className="register-button">发送验证码</button>
                            </div>
                            <div className="form-item">
                                <label htmlFor="" className="register-label">验证码:</label>
                                <input className="register-input" type="text"/>
                            </div>
                            <div className="form-item">
                                <input type="checkbox" className="register-checkbox"/><span>我已经阅读接受voter<a
                                href="#">服务条款</a></span>
                            </div>
                            <div className="form-item">
                                <button className="create-user" onClick={this._register}>创建用户</button>
                            </div>
                        </form>
                        <div className="login"><Link to="login">已有账号,立即登录</Link></div>
                    </div>
                </div>
            </div>
        );
    }
}

ReduxRegister.propTypes = {};
ReduxRegister.defaultProps = {};


export default ReduxRegister;
