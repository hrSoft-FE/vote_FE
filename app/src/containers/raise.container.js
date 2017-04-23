import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchVote } from '../actions/'
import Raise from '../components/content/raise'

class RaiseContainer extends Component {
  render () {
    const {raise: {raise}, action: {fetchVote}} = this.props
    return (
      <Raise
        raise={raise}
        fetchVote={fetchVote}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    raise: state.raise
  }
}

const mapDispatchToTop = (dispatch) => {
  const actions = {fetchVote}
  const actionMap = {action: bindActionCreators(actions, dispatch)}
  return actionMap
}

export default connect(mapStateToProps, mapDispatchToTop)(RaiseContainer)
