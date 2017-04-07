import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getUserMe} from '../actions/personalcenter.action';
import {changeInfo} from '../actions/personalcenter.action';
import Personal from '../components/content/personalcenter';
import React, {Component, PropTypes} from "react";

const mapStateToProps = (state) => {
    return {
        personal: state.personal
    }
};

const mapDispatchToTop = (dispatch) => {
    const actions = {getUserMe,changeInfo};
    const actionMap = {action: bindActionCreators(actions, dispatch)};
    return actionMap;
};

export default connect(mapStateToProps, mapDispatchToTop)(Personal)

