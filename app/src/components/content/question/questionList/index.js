import React, {Component, PropTypes} from "react";
import List from "./list";
import "./index.less"
// import Item from "antd/lib/transfer/item.d";
// import {Link} from "react-router";
class QuestionList extends Component {
    static defaultProps = {
        list: [],
        handleItemChange: () => {
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            list: this.props.list.map((entry) => ({
                text: entry.text,
                checked: entry.checked
            })),
        };
    }

    onItemChange(entry) {
        const {list} = this.state;
        this.setState({
            list: list.map((prevEntry) => ({
                text: prevEntry.text,
                checked: prevEntry.text === entry.text ? !prevEntry.checked : prevEntry.checked
            })),
        });
        this.props.handleItemChange(entry);
    }

    render() {
        return (
            <div className="question-list-item">
                <ul>
                    {this.state.list.map((entry, index) => (
                        <List
                            key={`list-${index}`}
                            value={entry.text}
                            checked={entry.checked}
                            onChange={this.onItemChange.bind(this, entry)}
                        />
                    ))}
                </ul>
            </div>
        );
    }

}
QuestionList.propTypes = {};
QuestionList.defaultProps = {};


export default QuestionList;
