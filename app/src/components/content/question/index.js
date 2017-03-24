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
        let title = 'test title';
        let list = [
            {
                text: '选项1',
                checked: false
            },
            {
                text: '选项2',
                checked: true
            },
            {
                text: '选项3',
                checked: false
            }
        ];
        return (
            <div className="question-wrapper">
                <div className="mask"></div>
                <div className="list-wrapper">
                    <div className="title">{title}</div>
                    <form action="" className="toggle">
                        {/*<select className="selection">*/}
                        {/*<option value="single" className="selection-item">单选</option>*/}
                        {/*<option value="multiple" className="selection-item">多选</option>*/}
                        {/*</select>*/}
                        <input type="radio" className="multiple"/>
                        <span className="toggle-text">多选</span>
                    </form>
                    <div className="question-list">
                        <QuestionList
                            list={list}
                            handleItemChange={this.handleItemChange}
                        />
                    </div>
                    <label htmlFor="" className="question-submit">
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
