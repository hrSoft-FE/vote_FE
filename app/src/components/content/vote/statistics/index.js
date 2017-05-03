import React, { Component } from 'react'
import { Progress } from 'antd'
import './index.less'
import './grid.less'
import { Link } from 'react-router'
const sideLeft = require('../../../../images/content/vote/sideimgleft.png')
const sideRight = require('../../../../images/content/vote/sideimgright.png')

class Statistics extends Component {
  constructor (props) {
    super(props)
    this.state = {
      statistics: {
        title: 'hello',
        number: 12,
        type: '多选',
        options: [
          {
            key: 1,
            number: 12,
            percent: 12
          },
          {
            key: 2,
            number: 15,
            percent: 15
          },
          {
            index: 3,
            number: 16,
            percent: 16
          }
        ]
      }
    }
  }

  componentDidMount () {
    this.props.action.getVoteData(this.props.location.query.voteid)
  }

  render () {
    const {statistics} = this.props
    console.log(statistics)
    const option = statistics.option || this.state.statistics.options
    return (
      <div className='statistics-wrapper'>
        <img src={sideLeft} alt='左侧立标' className='side-left side' />
        <img src={sideRight} alt='右侧立标' className='side-right side' />
        <div className='statistics'>
          <div className='title-bar'>
            <h1>{statistics.problemTitle || '无'}</h1>
            <p className='people-number'>参与人数:{statistics.total || 0}</p>
            <p className='single-multiple'>{statistics.type === 1 ? '单选' : '多选' || '单选'}</p>
          </div>
          <div className='progress-bar'>
            {
              option.map((value, index) => (
                <div className='progress-item' key={index}>
                  <Progress percent={value.percent} strokeWidth={20} /><p className='vote-title'>选项:{value.optionTitle}</p><p>票数:{value.num}</p>
                </div>
              ))
            }
          </div>
          <Link to='vote'>
            <button>返回</button>
          </Link>
        </div>
      </div>
    )
  }
}
export default Statistics
