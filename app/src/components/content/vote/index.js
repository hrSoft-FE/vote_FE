import React, {Component, PropTypes} from "react";


class Vote extends Component {
    render() {
        //you can dispatch ation by using this.props.getDemo() or
        const {data,getVote} = this.props;

        return (
            <div>Vote</div>
        );
    }
}

Vote.propTypes = {};
Vote.defaultProps = {};


export default Vote;
