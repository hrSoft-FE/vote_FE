import React, {Component, PropTypes} from "react";
// import Banner from "../../../components/plugin/banner";
import "./index.less";
import {Link} from 'react-router';
class Home extends Component {
    render() {
        return (

            <Link to="poll">
                <button className="vote-button"><span>发起投票</span></button>
            </Link>

        );
    }
}

Home.propTypes = {};
Home.defaultProps = {};


export default Home;