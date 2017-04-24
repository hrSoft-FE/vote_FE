import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getVoteInfo, submitVote } from '../actions/'
import Question from '../components/content/question'

class PollContainer extends Component {
  render () {
    const {poll, action: {getVoteInfo, submitVote}} = this.props
    return (
      <Question
        poll={poll}
        getVoteInfo={getVoteInfo}
        submitVote={submitVote}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    poll: state.poll
  }
}

const mapDispatchToTop = (dispatch) => {
  const actions = {getVoteInfo, submitVote}
  const actionMap = {action: bindActionCreators(actions, dispatch)}
  return actionMap
}

export default connect(mapStateToProps, mapDispatchToTop)(PollContainer)
