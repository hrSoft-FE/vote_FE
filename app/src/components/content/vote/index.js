import React, {Component, PropTypes} from "react";


class ReduxVote extends Component {
    render() {
        //you can dispatch ation by using this.props.getDemo() or
        const {data,getVote} = this.props;

        return (
            <p>Vote</p>
        );
    }
}

ReduxVote.propTypes = {};
ReduxVote.defaultProps = {};


export default ReduxVote;
