import React, { Component } from 'react'
import { Pagination } from 'antd'
// import './vote-item/index.js'
import VoteItem from './vote-item'
import './index.less'
class Vote extends Component {
  constructor (props) {
    super(props)
  };

  paginate = (currentPage) => {
    this.props.action.getUserVote(currentPage, 6)
  }

  componentDidMount () {
    const currentPage = 1
    const rows = 6
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
          <Pagination defaultCurrent={1} defaultPageSize={6} ageSize={6} total={vote.total} onChange={::this.paginate} />
        </div>
      </div>
    )
  }
}

export default Vote
        // let votes = vote.votes;
        // console.log(vote);
        // console.log(votes);
