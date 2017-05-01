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
            number: 12,
            percent: 12
          },
          {
            number: 15,
            percent: 15
          },
          {
            number: 16,
            percent: 16
          }
        ]
      }
    }
  }

  componentDidMount () {
    this.props.actions.getVoteData(this.props.location.query.voteid)
  }

  render () {
    return (
      <div className='statistics-wrapper'>
        <img src={sideLeft} alt='左侧立标' className='side-left side' />
        <img src={sideRight} alt='右侧立标' className='side-right side' />
        <div className='statistics'>
          <div className='title-bar'>
            <h1>{this.state.statistics.title}</h1>
            <p className='people-number'>参与人数:{this.state.statistics.number}</p>
            <p className='single-multiple'>{this.state.statistics.type}</p>
          </div>
          <div className='progress-bar'>
            {
              this.state.statistics.options.map((entry, index) => (
                <div className='progress-item'>
                  <Progress percent={entry.percent} strokeWidth={20} /><p>票数:{entry.number}</p>
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
