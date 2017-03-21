import React, {Component, PropTypes} from "react";
import AMUIReact from 'amazeui-react';
import {Slider} from 'amazeui-react';

class AmuiPic extends Component {
   onSelect =(index, direction)=> {
    console.log('激活的幻灯片编号：', index, '，滚动方向：', direction);
};
    render() {
        //you can dispatch ation by using this.props.getDemo() or
        const {data,getVote} = this.props;

        return (
            <p>layout component</p>
        );
    }
}

AmuiPic.propTypes = {};
AmuiPic.defaultProps = {};


export default AmuiPic;
