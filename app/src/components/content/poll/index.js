import React, {Component, PropTypes} from "react";
import logo from "../../../images/vote.png"
import "./index.less"
import Goto from '../../../utils/goto';
import API from '../../../api';
class Poll extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: ''
        };
        this.enterVote = this.enterVote.bind(this);
        this.getId = this.getId.bind(this);
    }

    getId(e) {
        e.preventDefault();
        let id = e.target.value;
        this.setState({
            id: id
        });
        console.log(id);
    }

    enterVote() {
        console.log('hihihi');
        Goto('/question');
        const id = this.state.id;
        localStorage.setItem('vote.id', id);
        fetch(API.vote + id + '/join', {
            method: 'POST'
        }).then((res) => {
            return res.json();
        }).then((json) => {
            if (json.data === 0) {
                Goto('/question');
            }
        })
    }


    render() {

        const voteTitile = 'test';
        return (
            <div className="poll-wrapper">
                <div className="mask"></div>
                <div className="poll">
                    <div className="logo-wrapper">
                        <div className="logo">
                            <img src={logo} alt=""/>
                        </div>
                        <div className="logo-text">
                            <strong>题目:</strong>
                            {voteTitile}
                        </div>
                    </div>
                    <div className="form-wrapper">
                        <form action="">
                            <label htmlFor="" className="poll-code">请输入投票码:&nbsp;
                                <input type="text" onChange={this.getId}/>
                            </label>
                            <label htmlFor="" className="poll-submit">
                                <button onClick={this.enterVote}>确定</button>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
Poll.propTypes = {};
Poll.defaultProps = {};


export default Poll;
