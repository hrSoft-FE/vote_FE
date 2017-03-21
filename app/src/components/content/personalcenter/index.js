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
                        <label htmlFor="" className="personal-label">手机号:</label>
                        <input className="personal-input" type="text"/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="" className="personal-label">密码:</label>
                        <input className="personal-input" type="password"/>
                    </div>
                    <div className="form-item">
                        <button className="create-user">保存</button>
                    </div>
                </form>
            </div>
        );
    }
}

Personal.propTypes = {};
Personal.defaultProps = {};


export default Personal;

