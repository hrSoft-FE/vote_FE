import React, {Component} from 'react';
import 'swiper/dist/css/swiper.css';
import 'swiper/dist/js/swiper';
const banner1 = require('../../../images/plugin/swiper/banner01.png');
const banner2 = require('../../../images/plugin/swiper/banner02.png');
const banner3 = require('../../../images/plugin/swiper/banner03.png');

class Banner extends Component {
    componentDidMount() {
        let mySwiper = new Swiper('.swiper-container', {
            mode: 'horizontal',
            loop: true,
            dot: false,
            pagination: '.swiper-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            autoplay: 3000,
        });
    }

    render() {
        return (
            <div className="slider">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src={banner1} alt="第一张图片"/>
                        </div>
                        <div className="swiper-slide">
                            <img src={banner2}/>
                        </div>
                        <div className="swiper-slide">
                            <img src={banner3}/>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </ div >
        )
    }
}

export default Banner;

