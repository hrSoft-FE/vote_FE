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
                        <input type="text" className="personal-detail" value="ueser" readOnly/>
                    </div>
                    <div className="form-item">
                        <p className="personal-label">手机号:</p>
                        <input type="text" className="personal-detail" value="18332518016" readOnly/>
                    </div>
                    <div className="form-item">
                        <p className="personal-label">密码:</p>
                        {/*<div className="personal-detail" >*/}
                            {/*<input type="text" className="" value="********" />*/}
                            {/*<button className="">修改密码</button>*/}
                        {/*</div>                        */}
                        <input type="text" className="personal-detail personal-password" value="********" readOnly />
                        <button className="">修改密码</button>
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

