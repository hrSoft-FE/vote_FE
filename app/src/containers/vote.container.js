import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getUserVote, delUserVote, getVoteItem} from '../actions'
import Vote from '../components/content/vote'

const mapStateToProps = (state) => {
  return {
    vote: state.vote
  }
}

const mapDispatchToProps = (dispatch) => {
  const actions = {getUserVote, delUserVote, getVoteItem}
  const actionMap = {action: bindActionCreators(actions, dispatch)}
  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(Vote)
