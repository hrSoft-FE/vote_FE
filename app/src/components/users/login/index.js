import React, {Component, PropTypes} from "react";
import {Link} from "react-router";
import './index.less';
import vote from '../../../images/vote.png';
import qq_icon from '../../../images/login/qq.png';
import weibo_icon from '../../../images/login/weibo.png';
import wechat_icon from '../../../images/login/wechat.png';
import close from '../../../images/login/close.png';
import {Form, Icon, Input, Button} from 'antd';
const FormItem = Form.Item;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class ReduxLogin extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.form.validateFields();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.forLogin(values);
            }
        });
    };

    render() {
        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
        const mobileError = isFieldTouched('mobile') && getFieldError('mobile');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        return (
            <div className="login-wrapper">
                <div className="mask"></div>
                <div className="login">
                    <div className="window-bar">
                        <Link to="/">
                            <img src={close} alt="点击关闭" width="15px"/>
                        </Link>
                    </div>
                    <div className="logo-wrapper">
                        <img src={vote} className="logo" alt=""/>
                        <div className="logo-text">voter</div>
                    </div>
                    <div className="line-through">
                        <div className="line-through-line"></div>
                        <div className="line-through-text">第三方账号登录</div>
                        <div className="line-through-line"></div>
                    </div>
                    <div className="icon-wrapper">
                        <div className="icon-item"><img src={qq_icon} alt=""/></div>
                        <div className="icon-item"><img src={weibo_icon} alt=""/></div>
                        <div className="icon-item"><img src={wechat_icon} alt=""/></div>
                    </div>
                    <div className="line-through">
                        <div className="line-through-line"></div>
                        <div className="line-through-text">使用手机号登录</div>
                        <div className="line-through-line"></div>
                    </div>
                    <div className="form-wrapper">
                        <Form onSubmit={this.handleSubmit} className="from-boxes">
                            <FormItem
                                validateStatus={mobileError ? 'error' : ''}
                                help={mobileError || ''}
                            >
                                {getFieldDecorator('mobile', {
                                    rules: [{required: true, message: '请输入手机号'}],
                                })(
                                    <Input prefix={<Icon type="mobile" style={{fontSize: 13}}/>} placeholder="Mobile"/>
                                )}
                            </FormItem>
                            <FormItem
                                validateStatus={passwordError ? 'error' : ''}
                                help={passwordError || ''}
                            >
                                {getFieldDecorator('password', {
                                    rules: [{required: true, message: '请输入密码'}],
                                })(
                                    <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password"
                                           placeholder="Password"/>
                                )}
                            </FormItem>
                            <FormItem>
                                <Button
                                    className="from-button"
                                    type="primary"
                                    htmlType="submit"
                                    disabled={hasErrors(getFieldsError())}
                                >
                                    登录
                                </Button>
                            </FormItem>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
ReduxLogin = Form.create()(ReduxLogin);
export default ReduxLogin;
