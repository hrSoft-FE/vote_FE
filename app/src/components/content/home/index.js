import React, {Component, PropTypes} from "react";
// import Banner from "../../../components/plugin/banner";
import "./index.less";

class Home extends Component {
    render() {
        return (
            <button className="vote-button"><span>发起投票</span></button>

        );
    }
}

Home.propTypes = {};
Home.defaultProps = {};


export default Home;
