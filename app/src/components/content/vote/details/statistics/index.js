import React, {Component, PropTypes} from "react";
import {Progress} from 'antd';
import './index.less';
import './grid.less';
import {Link} from "react-router";
const sideLeft = require('../../../../../images/content/vote/sideimgleft.png');
const sideRight = require('../../../../../images/content/vote/sideimgright.png');

class Statistics extends Component {

    render() {
        return (
            <div className="statistics-wrapper">
                <img src={sideLeft} alt="左侧立标" className="side-left side"/>
                <img src={sideRight} alt="右侧立标" className="side-right side"/>
                <div className="statistics">
                    <div className="title-bar">
                        <h1>投票题目</h1>
                        <p className="people-number">参与人数:12</p>
                        <p className="single-multiple">单选/多选</p>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-item">
                            <Progress percent={30} strokeWidth={20}/><p>票数:12</p>
                        </div>
                        <div className="progress-item">
                            <Progress percent={50} strokeWidth={20}/><p>票数:12</p>
                        </div>
                        <div className="progress-item">
                            <Progress percent={70} strokeWidth={20}/><p>票数:12</p>
                        </div>
                    </div>
                    <Link to="vote">
                        <button>返回</button>
                    </Link>
                </div>
            </div>
        )
    }

}

export default Statistics;