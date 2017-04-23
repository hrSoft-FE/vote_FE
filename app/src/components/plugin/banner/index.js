import React, {Component} from 'react'
const banner1 = require('../../../images/plugin/swiper/banner01.png')
const banner2 = require('../../../images/plugin/swiper/banner02.png')
const banner3 = require('../../../images/plugin/swiper/banner03.png')
import './index.less'
import {Carousel} from 'antd'

class Banner extends Component {
  render () {
    return (
      <Carousel effect='fade' autoplay>
        <div><img src={banner1} /></div>
        <div><img src={banner2} /></div>
        <div><img src={banner3} /></div>
      </Carousel>)
  }
}

export default Banner
