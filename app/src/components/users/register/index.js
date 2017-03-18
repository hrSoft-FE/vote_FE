import React, {Component, PropTypes} from "react";


class ReduxRegister extends Component {
    render() {
        //you can dispatch ation by using this.props.getDemo() or
        const {data,getLogin} = this.props;

        return (
            <p> ation-> reducer-> store -> get data in container -> get data in Component</p>
        );
    }
}

ReduxRegister.propTypes = {};
ReduxRegister.defaultProps = {};


export default ReduxRegister;
