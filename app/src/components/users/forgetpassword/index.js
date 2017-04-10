import React, {Component, PropTypes} from "react";
import "./index.less";
import "./grid.less";
import close from '../../../images/login/close.png';
class Forgetpw extends Component {
    render() {
        return (
            <div className="forget-wrapper">
                <div className="form-wrapper forgetpw-wrapper">
                    <div className="window-bar">
                        <a href="#">
                            <img src={close} alt="点击关闭" width="15px"/>
                        </a>
                    </div>
                    <form className="forgetpw-form">
                        <div className="form-item">
                            <label htmlFor="" className="forgetpw-label">手机号:</label>
                            <input className="forgetpw-input" type="text"/>
                            <button className="forgetpw-button">发送验证码</button>
                        </div>
                        <div className="form-item">
                            <label htmlFor="" className="forgetpw-label">验证码:</label>
                            <input className="forgetpw-input" type="text"/>
                        </div>
                        <div className="form-item">
                            <button className="create-user">登陆</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

Forgetpw.propTypes = {};
Forgetpw.defaultProps = {};


export default Forgetpw;