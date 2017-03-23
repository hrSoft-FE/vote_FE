import React, {Component, PropTypes} from "react";
import logo from "../../../images/vote.png"
import "./index.less"
// import {Link} from "react-router";
class Ques extends Component {

    render() {

        const {data, getQues} = this.props;
        const quesTitile = 'test';
        return (
            <div className="ques-wrapper">
                <div className="mask"></div>
                <div className="">
                        <div className="ques-text">
                            {quesTitile}
                        </div>
                    <div className="list-wrapper">
                        <form action="">
                            <select className="selection">
                                <option value="single" className="selection-item">单选</option>
                                <option value="multiple" className="selection-item">单选</option>
                            </select>
                        </form>
                        <div className="ques-wrapper">
                            {/*<QuesList></QuesList>*/}
                        </div>
                        <label htmlFor="" className="poll-submit">
                            <button>确定</button>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}
Ques.propTypes = {};
Ques.defaultProps = {};


export default Ques;
