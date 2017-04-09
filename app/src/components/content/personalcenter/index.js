import React, {Component, PropTypes} from "react";
import "./index.less";
import "./grid.less";
import Edit from './edit';
import {Link} from 'react-router';

class Personal extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.action.getUserMe();
    }


    render() {
        const {personal} = this.props;
        return (
            <div className="form-wrapper personal-wrapper">
                <div className="mask"></div>
                <form className="personal-form">
                    <div className="form-item">
                        <p className="personal-label">用户名:</p>
                        <p className="personal-detail">{personal.name} </p>
                    </div>
                    <div className="form-item">
                        <p className="personal-label">手机号:</p>
                        <p className="personal-detail">{personal.mobile} </p>
                    </div>
                    <div className="form-item">
                        <p className="personal-label">密码:</p>
                        <p className="personal-detail">**********</p>
                    </div>
                    <div className="form-item">
                        <Edit className="save-password" changeInfo={this.props.action.changeInfo}/>
                        <Link to="/">
                            <button className="save-password">返回</button>
                        </Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default Personal;

