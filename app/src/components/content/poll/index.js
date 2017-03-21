import React, {Component, PropTypes} from "react";
import logo from "../../../images/vote.png"
import "./index.less"
// import {Link} from "react-router";
class Poll extends Component {

    render() {

        const {data, getPoll} = this.props;
        const voteTitile = "test";
        return (
            <div className="poll-wrapper">
                <div className="mask"></div>
                <div className="poll">
                    <div className="logo-wrapper">
                        <div className="logo">
                            <img src={logo} alt=""/>
                        </div>
                        <div className="logo-text">
                            <strong>题目:</strong>
                            {voteTitile}
                        </div>
                    </div>
                    <div className="form-wrapper">
                        <form action="">
                            <label htmlFor="" className="poll-code">请输入投票码:&nbsp;
                                <input type="text"/>
                            </label>
                            <label htmlFor="" className="poll-submit">
                                <button>确定</button>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
Poll.propTypes = {};
Poll.defaultProps = {};


export default Poll;
