import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { getVoteData } from '../actions'
import Statistics from '../components/content/vote/statistics'

const mapStateToProps = (state) => {
  return {
    statistics: state.statistics
  }
}

const mapDispatchToProps = (dispatch) => {
  const actions = { getVoteData }
  const actionMap = {action: bindActionCreators(actions, dispatch)}
  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(Statistics)
