import React, { Component } from 'react'
import './index.less'
import { Radio, Checkbox } from 'antd'
const RadioGroup = Radio.Group
const CheckboxGroup = Checkbox.Group

class Question extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      flag: true
    }
    this.handleItemChange = this.handleItemChange.bind(this)
  }

  componentDidMount () {
    const id = window.localStorage.getItem('voteId')
    this.props.getVoteInfo(id)
  }

  async onChangeMore (checkedValues) {
    await this.setState({
      value: checkedValues
    })
    console.log(this.state.value)
  }

  async onChange (e) {
    console.log('radio checked', e.target.value)
    await this.setState({
      value: e.target.value
    })
  }

  handleItemChange () {
    let value = this.state.value
    const id = window.localStorage.getItem('voteId')
    let records = []
    Object.keys(value).forEach(key => {
      let item = {
        'problemId': id,
        'optionId': parseInt(value[key])
      }
      records.push(item)
    })
    console.log(records)
    if (records.length === 0) {
      let recordItem = {
        'problemId': id,
        'optionId': parseInt(this.state.value)
      }
      records.push(recordItem)
    }
    console.log(records)
    this.props.submitVote(records)
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
    const isMuti = (t = {type: 0}) => {
      return t.type === 1 ? '单选' : '多选'
    }
    const type = isMuti(problems[0])
    const _options = list.map((item, index) => {
      return ({
        key: index,
        label: item.value,
        value: item.id
      })
    })
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px'
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
            <div className='question-list-item'>
              {
                type === '多选' && <CheckboxGroup options={_options} onChange={::this.onChangeMore} style={radioStyle} />
              }
              <RadioGroup onChange={::this.onChange} value={this.state.value}>
                {
                  type === '单选' && list.map((entry, index) => (
                    <Radio style={radioStyle} value={entry.id} key={'radio-' + index}>{entry.value}</Radio>
                  ))
                }
              </RadioGroup>
            </div>
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
