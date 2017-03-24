import React, {Component, PropTypes} from "react";
import {Progress} from 'antd';
import './index.less';
import './grid.less';

class Statistics extends Component {
    render() {
        return (
            <div className="statistics-wrapper">
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
                <button>返回</button>
            </div>
        )
    }
}

export default Statistics;