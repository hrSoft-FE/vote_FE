import React, {Component, PropTypes} from "react";


class ReduxTopbar extends Component {
    render() {
        //you can dispatch ation by using this.props.getDemo() or
        const {data,getTopbar} = this.props;

        return (
            <p> TopBar Compontent</p>
        );
    }
}

ReduxTopbar.propTypes = {};
ReduxTopbar.defaultProps = {};


export default ReduxTopbar;
