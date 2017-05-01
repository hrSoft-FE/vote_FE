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
    const currentPage = 2
    const rows = 80
    this.props.action.getUserVote(currentPage, rows)
  }

  render () {
    const {vote = {}, action} = this.props
    const list = vote.list || []
    let voteItems = list.map(function (item) {
      if (!item.deleted) {
        return (
          <VoteItem
            status={item.endTime - Date.parse(new Date()) < 0}
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
          {/*<Pagination defaultCurrent={6} total={500} />*/}
        </div>
      </div>
    )
  }
}

export default Vote
        // let votes = vote.votes;
        // console.log(vote);
        // console.log(votes);
