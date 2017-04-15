import React, {Component, PropTypes} from "react";
import "./index.less"
import {Form, Input, Icon, Button, InputNumber, Switch, Radio} from 'antd';
import {DatePicker} from 'antd';
import moment from 'moment';
const FormItem = Form.Item;
const RangePicker = DatePicker.RangePicker;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;


let uuid = 0;

function onChange(dates, dateStrings) {
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
}

class Raise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            participatorLimitDisable: true,
            passwordDisable: true,
            anonymous: false,
            visibility: false
        };
        this.isShowParticipator = this.isShowParticipator.bind(this);
        this.isShowPassword = this.isShowPassword.bind(this);
        this.isAnonymous = this.isAnonymous.bind(this);
        this.isVisibility = this.isVisibility.bind(this);
    }

    remove = (k) => {
        const {form} = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        // We need at least one passenger
        if (keys.length === 1) {
            return;
        }

        // can use data-binding to set
        form.setFieldsValue({
            keys: keys.filter(key => key !== k),
        });
    };

    add = () => {
        uuid++;
        const {form} = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(uuid);
        // can use data-binding to set
        // important! notify form to detect changes
        form.setFieldsValue({
            keys: nextKeys,
        });
    };

    isShowParticipator() {
        this.setState({
            participatorLimitDisable: !this.state.participatorLimitDisable
        })
    }

    isShowPassword() {
        this.setState({
            passwordDisable: !this.state.passwordDisable
        })
    }

    isAnonymous() {
        this.setState({
            anonymous: !this.state.anonymous
        })
    }

    isVisibility() {
        this.setState({
            visibility: !this.state.visibility
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values);
                let options = [];
                Object.keys(values).forEach(key => {
                    if (key.match(/^name?/)) {
                        let item = {'value': values[key]};
                        options.push(item)
                    }
                });
                console.log(options);
                const {title, participator_limit, password, type, time} = values;
                const anonymous = this.state.anonymous;
                const visibility_limit = this.state.visibility;
                const start_time = Date.parse(time[0]);
                const end_time = Date.parse(time[1]);
                const problem = {options, type};
                const body = {
                    title,
                    participator_limit,
                    visibility_limit,
                    password,
                    start_time,
                    end_time,
                    anonymous,
                    problem,
                    time
                };
                this.props.fetchVote(body);
                console.log('body: ', body);
            }
        });
    };

    render() {

        const {getFieldDecorator, getFieldValue} = this.props.form;

        const formItemLayout = {
            wrapperCol: {
                xs: {span: 24, offset: 0},
                sm: {span: 20, offset: 4},
            },
        };
        getFieldDecorator('keys', {initialValue: []});
        const keys = getFieldValue('keys');
        const formItems = keys.map((k) => {
            return (
                <FormItem
                    {...formItemLayout}
                    required={false}
                    key={k}
                >
                    <Icon
                        className="dynamic-delete-button"
                        type="minus-circle-o"
                        disabled={keys.length === 1}
                        onClick={() => this.remove(k)}
                    />
                    {getFieldDecorator(`names-${k}`, {
                        validateTrigger: ['onChange', 'onBlur'],
                        rules: [{
                            required: true,
                            whitespace: true,
                            message: "请输入选项内容",
                        }],
                    })(
                        <Input placeholder="选项" style={{width: '77%', marginLeft: 5}}/>
                    )}
                </FormItem>
            );
        });
        return (
            <div className="raise-wrapper">
                <div className="mask"></div>
                <div className="raise">
                    <Form onSubmit={this.handleSubmit} className="raise-form">
                        <FormItem
                            {...formItemLayout}
                            style={{marginLeft: 240, marginTop: 20}}
                        >
                            {getFieldDecorator('type')(
                                <RadioGroup>
                                    <RadioButton value="1">单选</RadioButton>
                                    <RadioButton value="2">多选</RadioButton>
                                </RadioGroup>
                            )}
                        </FormItem>
                        <FormItem style={{marginLeft: 78}}>
                            {getFieldDecorator('title', {
                                rules: [{required: true, message: '请输入投票题目'}],
                            })(
                                <Input style={{width: '80%'}} placeholder="投票名称"/>
                            )}
                        </FormItem>
                        {formItems}
                        <FormItem {...formItemLayout}>
                            <Button type="dashed" onClick={this.add} style={{width: '85%'}}>
                                <Icon type="plus"/> 添加选项
                            </Button>
                        </FormItem>
                        {getFieldDecorator('time')(
                            <RangePicker
                                ranges={{
                                    Today: [moment(), moment()],
                                    'This Month': [moment(), moment().endOf('month')]
                                }}
                                showTime format="YYYY-MM-DD HH:mm:ss" onChange={onChange}
                                style={{width: '67%', marginLeft: 78, marginBottom: 25}}
                            />
                        )}
                        <FormItem
                            {...formItemLayout}
                        >
                            <FormItem style={{marginTop: 10}}>
                                {getFieldDecorator('participatorLimit')(
                                    <InputNumber placeholder="人数限制" style={{width: '70%'}}
                                                 disabled={this.state.participatorLimitDisable}/>
                                )}
                            </FormItem>
                            <FormItem style={{marginLeft: 268}}>
                                {getFieldDecorator('switch-participator', {valuePropName: 'checked'})(
                                    <Switch onChange={this.isShowParticipator} className="switch"/>
                                )}
                            </FormItem>
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                        >
                            <FormItem style={{marginTop: 10}}>
                                {getFieldDecorator('password')(
                                    <Input placeholder="投票密码" type="password" style={{width: '70%', marginRight: 8}}
                                           disabled={this.state.passwordDisable}/>
                                )}
                            </FormItem>
                            <FormItem style={{marginLeft: 268}}>
                                {getFieldDecorator('switch-password', {valuePropName: 'checked'})(
                                    <Switch onChange={this.isShowPassword} className="switch"/>
                                )}
                            </FormItem>
                        </FormItem>
                        <FormItem {...formItemLayout}>
                            <span>是否匿名</span>
                            <Switch style={{marginLeft: 11, marginRight: 105}} onChange={this.isAnonymous}/>
                            <span>是否私有</span>
                            <Switch style={{marginLeft: 11}} onChange={this.isVisibility}/>
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            style={{marginLeft: 130}}
                        >
                            <Button type="primary" htmlType="submit" size="large">发起投票</Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        )
    }
}
Raise = Form.create()(Raise);
export default Raise;