import React, { Component } from 'react'
import './index.less'
import QuestionList from './questionList'
class Question extends Component {
  constructor (props) {
    super(props)
    this.handleItemChange = this.handleItemChange.bind(this)
  }

  componentDidMount () {
    const id = window.localStorage.getItem('voteId')
    this.props.getVoteInfo(id)
  }

  handleItemChange () {
    this.props.submitVote()
  }

  render () {
    const {vote = {}, problems = {}, options = {}} = this.props
    let option = []
    Object.keys(options).forEach(key => {
      let item = {
        'value': options[key].value,
        'id': options[key].id
      }
      option.push(item)
    })
    let list = option
    console.log(list)
    const isMuti = (t = {type: 0}) => {
      return t.type === 1 ? '单选' : '多选'
    }
    return (
      <div className='question-wrapper'>
        <div className='mask' />
        <div className='list-wrapper'>
          <div className='title'>{vote.title}</div>
          <form className='toggle'>
            <span className='toggle-text'>{isMuti(problems[0])}</span>
          </form>
          <div className='question-list'>
            <QuestionList
              list={list}
              type={isMuti(problems[0])}
            />
          </div>
          <label className='question-submit'>
            <button onClick={this.handleItemChange}>确定</button>
          </label>
        </div>
      </div>
    )
  }
}
Question.propTypes = {}
Question.defaultProps = {}

export default Question
