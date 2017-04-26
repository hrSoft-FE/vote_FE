import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { getVoteItem, reviseVoteItem } from '../actions'
import Revise from '../components/content/vote/revise'

const mapStateToProps = (state) => {
  return {
    revise: state.revise
  }
}

const mapDispatchToProps = (dispatch) => {
  const actions = { getVoteItem, reviseVoteItem }
  const actionMap = {action: bindActionCreators(actions, dispatch)}
  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(Revise)
