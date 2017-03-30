import React, {Component, PropTypes} from "react";
import "./index.less";
import "./grid.less";
import Edit from './edit';
import API from '../../../api';
import getToken from '../../../utils/getToken';
import {Link} from 'react-router';
class Personal extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            mobile:'',
            oldpassword:'',
            newpassword:''
        };
        this._fetch=this._fetch.bind(this);
    }

    _fetch(){
        fetch(API.me, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'token':'cb52937986854448b840fef6297ef809'
            }
        }).then((res) => res.json())
            .then((json) => {
                console.log(json);
                if (json.code === 0) {
                    console.log("hi");
                    this.setState({
                        name:json.data.name,
                        mobile:json.data.mobile
                    })
                }else{
                    alert("please login")
                }
            })
    }

    componentDidMount(){
        this._fetch();
    }
    render() {
        return (
            <div className="form-wrapper personal-wrapper">
                <div className="mask"></div>
                <form className="personal-form">
                    <div className="form-item">
                        <p  className="personal-label">用户名:</p>
                        <p className="personal-detail">{this.state.name}</p>
                    </div>
                    <div className="form-item">
                        <p className="personal-label">手机号:</p>
                        <p className="personal-detail">{this.state.mobile}</p>
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

