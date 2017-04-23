import React, { Component } from 'react'
import { Link } from 'react-router'
import './index.less'
import finish from '../../../../images/content/vote/finished.png'
import going from '../../../../images/content/vote/ongoing.png'
import icon from '../../../../images/content/vote/icon.png'
import icon2 from '../../../../images/content/vote/icon2.png'
import { Modal } from 'antd'

class VoteItem extends Component {
    constructor(props) {
        super(props);
    };

    Confirm = () => {
        Modal.confirm({
            title: '删除投票后，本投票活动及相关数据都会消失，是否确认删除？',
            okText: 'OK',
            cancelText: 'Cancel',
            onOk() {
                console.log('ok');
                let voteId = VoteItem.props.id;
                VoteItem.props.delUserVote(voteId);
            }
        });
    };

    render() {
        //you can dispatch ation by using this.props.getDemo() or
        let statusSrc = this.props.status ? finish : going;
        let iconSrc = this.props.status ? icon2 : icon;
        let voteBtn = this.props.status ? "vote-item-btn vote-item-btn-finissh" : "vote-item-btn vote-item-btn-action";

        return (
            <div className="vote-item">
                <div className="vote-item-status">
                    <img src={statusSrc}/>
                </div>
                <div className="vote-item-box">
                    <img src={iconSrc} className="vote-item-icon" alt="投票"/>
                    <p>
                        <Link to="statistics">
                            <button className={voteBtn}>查看</button>
                        </Link>
                        <Link to="revise">
                             <button className={voteBtn}>编辑</button>
                        </Link>
                        <button className={voteBtn} onClick={this.Confirm}>删除</button>
                    </p>
                </div>
            </div>
        );
    }
}


export default VoteItem
