import React, {Component, PropTypes} from "react";

//import './vote-item/index.js'
import VoteItem from './vote-item'
import "./index.less";
class Vote extends Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        // this.props.action.getUserVote();
    }

    render() {
        // console.log(this.props);
        // const {data} = this.props;
        // let voteItems = data.votes.map(function (item) {
        //     let status = item.endTime - Date.parse(new Date()) < 0;
        //     return (
        //         <VoteItem status={status} key={item.id} delUserVote ={this.props.action.delUserVote}/>
        //     )
        // });
        console.log(this.props);

        return (
            <div className="vote-wrapper">
                <div className="mask">
                </div>
                <div className="vote">
                    <button onClick={this.props.action.getUserVote}>点我点我！</button>
                    {/*{voteItems}*/}
                </div>
            </div>
        )
    }
}


export default Vote;
        // this.state = {
        //     data: [
        //         {
        //             status: true,
        //             id: '001'
        //         },
        //         {
        //             status: true,
        //             id: '002'
        //         },
        //         {
        //             status: false,
        //             id: '003'
        //         },
        //         {
        //             status: false,
        //             id: '005'
        //         },
        //         {
        //             status: true,
        //             id: '008'
        //         },
        //         {
        //             status: false,
        //             id: '013'
        //         }
        //     ]
        // }
