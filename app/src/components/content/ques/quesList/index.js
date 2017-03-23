import React, {Component, PropTypes} from "react";
import logo from "../../../../images/vote.png"
import "./index.less"
// import {Link} from "react-router";
class QuesList extends Component {

    render() {

        const {data, getQues} = this.props;
        const quesTitile = 'test';
        return (
            <div className="ques-wrapper">
                <p>testtest</p>
            </div>
        );
    }
}
QuesList.propTypes = {};
QuesList.defaultProps = {};


export default QuesList;
