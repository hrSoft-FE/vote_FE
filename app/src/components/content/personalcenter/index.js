import React, {Component, PropTypes} from "react";
import "./index.less";
import "./grid.less";
import {Link} from 'react-router';
class Personal extends Component {
    render() {
        return (
            <div className="form-wrapper personal-wrapper">
                <div className="mask"></div>
                <form className="personal-form">
                    <div className="form-item">
                        <p  className="personal-label">用户名:</p>
                        <p className="personal-detail">user</p>
                    </div>
                    <div className="form-item">
                        <p className="personal-label">手机号:</p>
                        <p className="personal-detail">18332518016</p>
                    </div>
                    <div className="form-item">
                        <p className="personal-label">密码:</p>
                        <div className="personal-password" style={{display:'none'}}>
                            <p className="personal-detail">**********</p>
                            <button>修改密码</button>
                        </div>
                        <div>
                            <input type="password" className="personal-password"/>
                        </div>
                    </div>
                    <div className="form-item">
                        <button className="save-password">保存</button>
                    </div>
                </form>
            </div>
        );
    }
}

Personal.propTypes = {};
Personal.defaultProps = {};


export default Personal;

