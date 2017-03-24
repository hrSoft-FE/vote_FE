import React, {Component, PropTypes} from "react";
import logo from "../../../images/vote.png"
import "./index.less"
// import {Link} from "react-router";
import QuestionList from './questionList';
class Question extends Component {
    constructor(props) {
        super(props);
        this.handleItemChange = this.handleItemChange.bind(this);
    }

    handleItemChange(item) {

    }

    render() {
        const {data, getQuestion} = this.props;
        const quesTitile = 'test';
        let list = [
            {
                text: '1',
                checked: false
            },
            {
                text: '2',
                checked: true
            }
        ]
        return (
            <div className="question-wrapper">
                <div className="mask"></div>
                <div className="list-wrapper">
                    <form action="">
                        <select className="selection">
                            <option value="single" className="selection-item">单选</option>
                            <option value="multiple" className="selection-item">单选</option>
                        </select>
                    </form>
                    <div className="question-list">
                        <QuestionList
                            list={list}
                            handleItemChange={this.handleItemChange}
                        />
                    </div>
                    <label htmlFor="" className="poll-submit">
                        <button>确定</button>
                    </label>
                </div>
            </div>
        );
    }
}
Question.propTypes = {};
Question.defaultProps = {};


export default Question;
