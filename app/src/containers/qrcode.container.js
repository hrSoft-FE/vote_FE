import React, {Component, PropTypes} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getQRCode} from '../actions/';
import Qrcode from '../components/content/qrcode';

class QrcodeContainer extends Component {
    render() {
        const {qrcode, action:{getQRCode}} = this.props;
        console.log(qrcode)
        return (
            <Qrcode
                qrcode={qrcode}
                getQRCode={getQRCode}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        qrcode: state.qrcode
    }
};

const mapDispatchToTop = (dispatch) => {
    const actions = {getQRCode};
    const actionMap = {action: bindActionCreators(actions, dispatch)};
    return actionMap;
};

export default connect(mapStateToProps, mapDispatchToTop)(QrcodeContainer)


