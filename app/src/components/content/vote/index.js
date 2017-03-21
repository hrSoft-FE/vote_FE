import React, {Component, PropTypes} from "react";

//import './vote-item/index.js'
import VoteItem from './vote-item'
class Vote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    status: true,
                    id: '001'
                },
                {
                    status: true,
                    id: '002'
                },
                {
                    status: false,
                    id: '003'
                }
            ]
        }
    };

    render() {
        //you can dispatch ation by using this.props.getDemo() or
        const {data, getVote} = this.props;
        let voteItems = this.state.data.map(function (item) {
            return (
                <VoteItem status={item.status} key={item.id} />
            )
        });

        return (
            <div className="vote_wrapper">
                <div className="mask"></div>
                <div className="vote">
                    {voteItems}
                </div>
            </div>
        )
    }
}

Vote.propTypes = {};
Vote.defaultProps = {};


export default Vote;
