import React, {Component, PropTypes} from "react";

import './index.less'
import finish from '../../../../images/content/vote/finished.png';
import going from '../../../../images/content/vote/ongoing.png';
import icon from '../../../../images/content/vote/icon.png';
import icon2 from '../../../../images/content/vote/icon2.png';
import warn from '../../../../images/content/vote/warn.png';

class VoteItem extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        //you can dispatch ation by using this.props.getDemo() or
        const {data,getVote} = this.props;
        let statusSrc = this.props.status ? finish : going;
        let iconSrc = this.props.status ? icon2 : icon;

        return (
            <div className="vote-item">
                <div className="vote-item-status" >
                    <img src={statusSrc} />
                </div>
                <div className="vote-item-box">
                    <img src={iconSrc} className="vote-item-icon" alt="投票"/>
                    <p>
                        <button className="vote-item-btn">查看</button>
                        <button className="vote-item-btn">编辑</button>
                        <button className="vote-item-btn">删除</button>
                    </p>
                </div>
                <div className="vote-confirm">
                    <div>
                        <img src={warn} />
                    </div>
                    <div>
                        <button >取消</button>
                        <button >确认</button>
                    </div>
                </div>
            </div>
        );
    }
}

VoteItem.propTypes = {};
VoteItem.defaultProps = {};


export default VoteItem;
