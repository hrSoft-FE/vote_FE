import React, { Component } from 'react'
import './index.less'

class List extends Component {
  constructor (props) {
    super(props)
    this.state = {
      checked: false
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange (e) {
    e.preventDefault()
    this.setState({
      checked: !this.state.checked
    })
    if (this.state.checked === true) {
      const records = []
      let item = {
        problemId: window.localStorage.getItem('voteId'),
        optionId: e.target.id
      }
      records.push(item)
    }
  }

  render () {
    return (
      <div className='item-wrapper'>
        <input className='list-checked' type='radio' checked={this.state.checked} onChange={this.onChange} id={this.props.id} />
        <span className='list-text'>{this.props.value}</span>
      </div>
    )
  }
}
List.propTypes = {}
List.defaultProps = {}

export default List
