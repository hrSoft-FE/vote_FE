import React, {Component, PropTypes} from "react";

import './index.less'
import icon from '../../../../images/content/vote/vote-icon.png';

class VoteItem extends Component {
    constructor(props) {
        super(props);
    };
    handleClick = function(){

    };

    render() {
        //you can dispatch ation by using this.props.getDemo() or
        const {data,getVote} = this.props;

        return (
            <div className="vote-details">

            </div>
        );
    }
}

VoteItem.propTypes = {};
VoteItem.defaultProps = {};


export default VoteItem;
