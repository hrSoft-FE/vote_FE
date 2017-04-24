import React, { Component, PropTypes } from 'react'
import List from './list'
import './index.less'
import { Radio } from 'antd'
const RadioGroup = Radio.Group

class QuestionList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: []
    }
  }

  onChange = (e) => {
    console.log('radio checked', e.target.value)
    this.setState({
      value: e.target.value
    })
    const records = []
    let item = {
      problemId: window.localStorage.getItem('voteId'),
      optionId: e.target.value
    }
    records.push(item)
  }

  render () {
    const {list = [], type} = this.props
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px'
    }
    console.log('type', type)
    return (
      <div className='question-list-item'>
        {
          type === '多选' && list.map((entry, index) => (
            <List
              key={`list-${index}`}
              value={entry.value}
              id={entry.id}
            />
          ))
        }
        <RadioGroup onChange={this.onChange} value={this.state.value}>
          {
            type === '单选' && list.map((entry, index) => (
              <Radio style={radioStyle} value={entry.id} key={'radio-' + index}>{entry.value}</Radio>
            ))
          }
        </RadioGroup>
      </div>
    )
  }
}
QuestionList.propTypes = {}
QuestionList.defaultProps = {}

export default QuestionList
