import React, {Component, PropTypes} from "react";


class ReduxLogin extends Component {
    render() {
        //you can dispatch ation by using this.props.getDemo() or
        const {data,getLogin} = this.props;

        return (
            <p> ation-> reducer-> store -> get data in container -> get data in Component</p>
        );
    }
}

ReduxLogin.propTypes = {};
ReduxLogin.defaultProps = {};


export default ReduxLogin;
