import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getUserVote, delUserVote} from '../actions'
import Vote from '../components/content/vote'
import React, {Component, PropTypes} from 'react'

const mapStateToProps = (state) => {
  return {
    vote: state.vote
  }
}

const mapDispatchToProps = (dispatch) => {
  const actions = {getUserVote, delUserVote}
  const actionMap = {action: bindActionCreators(actions, dispatch)}
  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(Vote)
