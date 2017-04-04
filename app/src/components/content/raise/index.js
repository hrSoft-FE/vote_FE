import React, {Component, PropTypes} from "react";
import API from '../../../api';
import "./index.less"

import { Radio, Switch} from 'antd';
import { Icon } from 'antd';


const RadioGroup = Radio.Group;

class Raise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '投票名称',
            description: '',
            options: [                 // 选项内容及编号
                {
                    value: '选项1',
                    id: 0,
                },
                {
                    value: '选项2',
                    id: 1,
                }
            ],
            sectionLimit: 1,           // 单选or多选
            startTime: 1490427181,     // 开始时间、结束时间
            endTime: 1490859181,
            participatorLimit: 50,     // 人数限制
            anonymous: false,          // 匿名
            password: null,            // 密码
            visibilityLimit: true,     // 是否私有（此处不需要）
        };
        this.onSwitchRadio = this.onSwitchRadio.bind(this);
        this.onSwitchDate = this.onSwitchDate.bind(this);
        this.onSwitchParti = this.onSwitchParti.bind(this);
        this.onSwitchPassword = this.onSwitchPassword.bind(this);
        this.onSwitchAnony = this.onSwitchAnony.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeOption = this.onChangeOption.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeParti = this.onChangeParti.bind(this);
        this.onCreate = this.onCreate.bind(this);
    }

    // 提交事件
    onCreate = (e) => {
        e.preventDefault();
        e.stopPropagation();
        fetch(API.create, {
            method: 'POST',
            headers: {
                'token': '7617d10b37d64f8b9da23a0cc67fe3b7',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                description: this.state.description,
                anonymous: this.state.anonymous,
                participatorLimit: this.state.participatorLimit,
                visibilityLimit: this.state.visibilityLimit,
                password: this.state.password,
                startTime: this.state.startTime,
                endTime: this.state.endTime,
            })
        }).then((cofg) => cofg.json())
            .then((json) => {
                if (json.code === 0) {
                    console.log(json.data)
                }
                // if (json.code === 10003) {
                //     console.log('')
                // }
            });



        // 本地调试
        // console.log(
        //     JSON.stringify({
        //         // voteId: this.props.voteId,
        //         title: this.state.title,
        //         description: this.state.description,
        //         anonymous: this.state.anonymous,
        //         participator_limit: this.state.participatorLimit,
        //         visibility_limit: this.state.visibilityLimit,
        //         password: this.state.password,
        //         start_time: this.state.startTime,
        //         end_time: this.state.endTime,
        //         options: this.state.options,
        //     })
        // );


    };

    // 单选框：单选or复选
    onSwitchRadio = (e) => {
        this.setState({
            sectionLimit: e.target.value,
        });
    };

    // 开关按钮可清除表单数据，并通过state控制表单的开关
    onSwitchDate = (checked) => {

    };
    onSwitchParti = (checked) => {
        this.setState({
            participatorLimit: checked ? 0 : null
        })
    };
    onSwitchPassword = (checked) => {
        this.setState({
            password: checked ? '' : null
        })
    };
    onSwitchAnony = (checked) => {
        this.setState({
            anonymous: !!checked
        })
    };

    // 实时将state值与表单值同步

    onChangeOption = (e) => {

        this.state.options[e.target.id].value = e.target.value;  //此处用e.target.id，在删除选项时可能会有问题
        this.forceUpdate();

       /**
        // Q：直接调用子组件状态是被禁止的 （setState只能应用于第一层级）
        // this.state = {
        //     options: [                 // 选项内容及编号
        //         {
        //             value: '选项1',
        //             id: '1',
        //         },
        //         {
        //             value: '选项2',
        //             id: '2',
        //         }
        //     ]
        // }
        //
        // this.setState({
        //     options[0].value: '...';
        // })
        //
        // 试图用数组方法越过去自然也是太好用的
        // this.state.options.map((option) => {
        //     console.log(e.target.id);
        //     if (option.id == e.target.id) {
        //         setState({
        //
        //         });
        //         console.log(option.value);
        //     }
        // });
        //
        // 原因在于 => React的setState方法不提倡组件逻辑过于复杂（而不是React忘记设计state的嵌套调用）
        //            如果组件冗杂在一起，会影响React局部渲染的渲染效率
        //
        // 解决思路有两种：
        // (1)强行state并强制渲染
        // (2)拆子组件
        //
        **/
    };
    onChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        });
    };
    onChangeParti = (e) => {
        this.setState({
            participatorLimit: e.target.value
        });
    };
    onChangePassword = (e) => {
        this.setState({
            password: e.target.value - 0
        });
    };

    render() {
        let options = [];
        options = this.state.options.map((option) => {
            return (
                <div className="options-item"  key={option.id}>
                    <Icon type="minus-circle" id={option.id}/>
                    <input defaultValue={option.value}
                           onChange={this.onChangeOption}
                           id={option.id}
                    />
                </div>
            )}
        );
        return (
            <div className="raise-wrapper">
                <div className="mask"></div>
                <div className="raise">
                    <div className="header">
                        <input type="text"
                               defaultValue={this.state.title}
                               onChange={this.onChangeTitle}/>
                    </div>
                    <div className="options">
                        {options}
                        <div className="options-bar">
                            <span>
                                <Icon type="plus-circle" />
                                <span className="options-bar-add">添加选项</span>
                            </span>
                            <div className="options-bar-selection">
                                <RadioGroup onChange={this.onSwitchRadio} value={this.state.sectionLimit}>
                                    <Radio value={1}>单选</Radio>
                                    <Radio value={2}>多选</Radio>
                                </RadioGroup>
                            </div>
                        </div>
                    </div>
                    <div className="option-more">
                        <div className="option-more-item">
                            <span className="option-more-item-span">截止日期</span>
                            <input type="text"
                                   defaultValue={this.state.startTime}/>
                            <Switch defaultChecked={true}
                                    onChange={this.onSwitchDate}/>
                        </div>
                        <div className="option-more-item">
                            <span className="option-more-item-span">人数限制</span>
                            <input type="text"
                                   defaultValue={this.state.participatorLimit}
                                   onChange={this.onChangeParti}
                                   disabled={this.state.participatorLimit==null}/>
                            <Switch defaultChecked={true}
                                    onChange={this.onSwitchParti}/>
                        </div>
                        <div className="option-more-item">
                            <span className="option-more-item-span">密码</span>
                            <input type="text"
                                   defaultValue={this.state.password}
                                   onChange={this.onChangePassword}
                                   disabled={this.state.password==null}/>
                            <Switch defaultChecked={false}
                                    onChange={this.onSwitchPassword}/>
                        </div>
                        <div className="option-more-item">
                            <span className="option-more-item-span">是否匿名</span>
                            <Switch defaultChecked={false}
                                    onChange={this.onSwitchAnony}/>
                        </div>
                    </div>
                    <button className="push" onClick={this.onCreate}>发起投票</button>
                </div>
            </div>
        )
    }
}


export default Raise;