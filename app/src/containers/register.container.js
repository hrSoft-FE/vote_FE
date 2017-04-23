import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { forRegister } from '../actions/'
import ReduxRegister from '../components/users/register'

class RegisterContainer extends Component {
  render () {
    const {users: {users}, action: {forRegister}} = this.props
    return (
      <ReduxRegister
        users={users}
        forRegister={forRegister}
      />
    )
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToTop = (dispatch) => {
  const actions = {forRegister}
  const actionMap = {action: bindActionCreators(actions, dispatch)}
  return actionMap
}

export default connect(mapStateToProps, mapDispatchToTop)(RegisterContainer)
