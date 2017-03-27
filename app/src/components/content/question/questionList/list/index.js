import React,{Component} from "react";
import "./index.less";
class List extends Component {
    render() {
        return (
            <div className="item-wrapper">
                <input className="list-checked" type="radio" checked={this.props.checked} onChange={this.props.onChange}/>
                <span className="list-text">{this.props.value}</span>
            </div>
        );
    }
}
List.propTypes = {};
List.defaultProps = {};


export default List;