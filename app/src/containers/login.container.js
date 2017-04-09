import React, {Component, PropTypes} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {forLogin} from '../actions/';
import ReduxLogin from '../components/users/login';

class LoginContainer extends Component {
    render() {
        const {users:{users}, action:{forLogin}} = this.props;
        return (
            <ReduxLogin
                users={users}
                forLogin={forLogin}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
};

const mapDispatchToTop = (dispatch) => {
    const actions = {forLogin};
    const actionMap = {action: bindActionCreators(actions, dispatch)};
    return actionMap;
};

export default connect(mapStateToProps, mapDispatchToTop)(LoginContainer)
