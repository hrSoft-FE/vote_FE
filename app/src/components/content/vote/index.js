import React, { Component } from 'react'
import { Pagination } from 'antd'
// import './vote-item/index.js'
import VoteItem from './vote-item'
import './index.less'
class Vote extends Component {
  constructor (props) {
    super(props)
  };

  componentDidMount () {
    this.props.action.getUserVote()
  }

  render () {
    const {vote = {}, action} = this.props
    const votes = vote.votes || []

    let voteItems = votes.map(function (item) {
      let status = item.endTime - Date.parse(new Date()) < 0
      if (!item.deleted) {
        return (
          <VoteItem
            status={status}
            key={item.id}
            action={action}
            voteId={item.id}
          />
        )
      }
    })

    return (
      <div className='vote-wrapper'>
        <div className='mask' />
        <div className='vote'>
          {voteItems}
          <Pagination defaultCurrent={6} total={500} />
        </div>
      </div>
    )
  }
}

export default Vote
        // let votes = vote.votes;
        // console.log(vote);
        // console.log(votes);
