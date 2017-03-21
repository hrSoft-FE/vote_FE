import React, {Component, PropTypes} from "react";

import './index.less'
import icon from '../../../../images/content/vote/vote-icon.png';

class VoteItem extends Component {
    constructor(props) {
        super(props);
    };
    
    render() {
        //you can dispatch ation by using this.props.getDemo() or
        const {data,getVote} = this.props;

        return (
            <div className="vote-item">
                <div className="vote-item-state" >
                    <span>进行中</span>
                </div>
                <div className="vote-item-box">
                    <img src={icon} className="vote-item-icon" alt="投票"/>
                    <p>
                        <button className="vote-item-operate">查看</button>
                        <button className="vote-item-operate">编辑</button>
                        <button className="vote-item-operate">删除</button>
                    </p>
                </div>


            </div>
        );
    }
}

VoteItem.propTypes = {};
VoteItem.defaultProps = {};


export default VoteItem;
