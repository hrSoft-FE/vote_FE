import React, {Component, PropTypes} from "react";


class Vote extends Component {
    render() {
        //you can dispatch ation by using this.props.getDemo() or
        const {data,getVote} = this.props;

        return (
            <p>Vote</p>
        );
    }
}

Vote.propTypes = {};
Vote.defaultProps = {};


export default Vote;
