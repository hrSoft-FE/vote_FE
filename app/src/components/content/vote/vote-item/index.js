import React, { Component } from 'react'
import { Link } from 'react-router'
import './index.less'
import finish from 'images/content/vote/finished.png'
import going from 'images/content/vote/ongoing.png'
import icon from 'images/content/vote/icon.png'
import icon2 from 'images/content/vote/icon2.png'
import { Modal } from 'antd'
import urlEncoder from 'utils/urlEncoder'
class VoteItem extends Component {
  constructor (props) {
    super(props)
    this.Confirm = this.Confirm.bind(this)
  };

  Confirm () {
    const {voteId, action} = this.props
    Modal.confirm({
      title: '删除投票后，本投票活动及相关数据都会消失，是否确认删除？',
      okText: 'OK',
      cancelText: 'Cancel',
      async onOk () {
        await action.delUserVote(voteId, action.getUserVote)
      }
    })
  }

  render () {
    // you can dispatch action by using this.props.getDemo() or
    let statusSrc = this.props.status ? finish : going
    let iconSrc = this.props.status ? icon2 : icon
    let voteBtn = this.props.status ? 'vote-item-btn vote-item-btn-finish' : 'vote-item-btn vote-item-btn-action'
    const query = {
      'voteid': this.props.voteId
    }
    return (
      <div className='vote-item'>
        <div className='vote-item-status'>
          <img src={statusSrc} />
        </div>
        <div className='vote-item-box'>
          <img src={iconSrc} className='vote-item-icon' alt='投票' />
          <p>
            <Link to='statistics'>
              <button className={voteBtn}>查看</button>
            </Link>
            <Link to={urlEncoder('revise', query)}>
              <button className={voteBtn}>编辑</button>
            </Link>
            <button
              className={voteBtn}
              onClick={this.Confirm}
            >
              删除
            </button>
          </p>
        </div>
      </div>
    )
  }
}

VoteItem.propTypes = {}
VoteItem.defaultProps = {}

export default VoteItem
