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
        let statusSty = {
            background: this.props.status?'#22bd34':'yellow'
        };

        return (
            <div className="vote-item">
                <div className="vote-item-status" >
                    <span style={statusSty}>{this.props.status?'投票中':'已完成'}</span>
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
