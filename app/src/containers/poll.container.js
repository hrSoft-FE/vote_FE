import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getVoteInfo } from '../actions/'
import Question from '../components/content/question'

class PollContainer extends Component {
  render () {
    const {poll: {poll}, action: {getVoteInfo}} = this.props
    return (
      <Question
        poll={poll}
        getVoteInfo={getVoteInfo}
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
  const actions = {getVoteInfo}
  const actionMap = {action: bindActionCreators(actions, dispatch)}
  return actionMap
}

export default connect(mapStateToProps, mapDispatchToTop)(PollContainer)
