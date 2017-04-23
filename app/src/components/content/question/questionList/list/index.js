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

  onChange () {
    this.setState({
      checked: !this.state.checked
    })
  }

  render () {
    return (
      <div className='item-wrapper'>
        <input className='list-checked' type='radio' checked={this.state.checked} onChange={this.onChange} />
        <span className='list-text'>{this.props.value}</span>
      </div>
    )
  }
}
List.propTypes = {}
List.defaultProps = {}

export default List
