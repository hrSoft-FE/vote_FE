import React, {Component, PropTypes} from "react";
import './index.less';

import close from '../../../images/login/close.png';
import {Link} from 'react-router'
class ReduxRegister extends Component {
    render() {
        //you can dispatch ation by using this.props.getDemo() or
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
                                <input className="register-input" type="text"/>
                            </div>
                            <div className="form-item">
                                <label htmlFor="" className="register-label">密码:</label>
                                <input className="register-input" type="password"/>
                            </div>
                            <div className="form-item">
                                <label htmlFor="" className="register-label">确认密码:</label>
                                <input className="register-input" type="password"/>
                            </div>
                            <div className="form-item">
                                <label htmlFor="" className="register-label">手机号:</label>
                                <input className="register-input" type="text"/>
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
                                <button className="create-user">创建用户</button>
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
