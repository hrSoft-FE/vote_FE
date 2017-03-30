import React, {Component, PropTypes} from "react";
import "./index.less";
import "./grid.less";
import Edit from './edit';
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
                        <p className="personal-detail">**********</p>
                    </div>
                    <div className="form-item">
                        <Edit className="save-password"/>
                        <button className="save-password">返回</button>
                    </div>
                </form>
            </div>
        );
    }
}

Personal.propTypes = {};
Personal.defaultProps = {};


export default Personal;

