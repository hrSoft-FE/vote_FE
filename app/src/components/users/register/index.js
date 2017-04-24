import React, { Component, PropTypes } from 'react'
import './index.less'
import close from '../../../images/login/close.png'
import { Link } from 'react-router'
import Rege from '../../../utils/regx'

//表单控件
import { Form, Input, Row, Col, Checkbox, Button } from 'antd'
const FormItem = Form.Item

class ReduxRegister extends Component {
  constructor (props) {
    super(props)
    this.state = {
      is_login: localStorage.getItem('user.is_login') ? localStorage.getItem('user.is_login') : false
    }
  }

  state = {
    confirmDirty: false,
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const {mobile, name, password} = values
        const body = {mobile, name, password}
        this.props.forRegister(body)
      }
    })
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value
    this.setState({confirmDirty: this.state.confirmDirty || !!value})
  }
  checkPassword = (rule, value, callback) => {
    const form = this.props.form
    if (value && value !== form.getFieldValue('password')) {
      callback('两次密码输入不一致!')
    } else {
      callback()
    }
  }
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], {force: true})
    }
    callback()
  }

  render () {
    const {getFieldDecorator} = this.props.form
    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 8},
      },
      wrapperCol: {
        xs: {span: 18},
        sm: {span: 14},
      },
    }
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    }

    return (
      <div className="register-wrapper">
        <div className="mask"></div>
        <div className="register">
          <div className="form-wrapper">
            <div className="window-bar">
              <Link to="/">
                <img src={close} alt="点击关闭" width="15px" />
              </Link>
            </div>
            <Form onSubmit={this.handleSubmit} className="register-form">
              <FormItem
                {...formItemLayout}
                label="用户名"
                hasFeedback
                className="from-item"
              >
                {getFieldDecorator('name', {
                  rules: [{
                    required: true, message: '请输入你的用户名!', whitespace: true
                  }],
                })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="密码"
                hasFeedback
                className="from-item"
              >
                {getFieldDecorator('password', {
                  rules: [{
                    required: true, message: '请输入密码!',
                  }, {
                    validator: this.checkConfirm,
                  }, {
                    pattern: Rege.password, message: '请输入6-20位有效密码！'
                  }],
                })(
                  <Input type="password" />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="确认密码"
                hasFeedback
                className="from-item"
              >
                {getFieldDecorator('confirm', {
                  rules: [{
                    required: true, message: '请再次输入你的密码!',
                  }, {
                    validator: this.checkPassword,
                  }],
                })(
                  <Input type="password" onBlur={this.handleConfirmBlur} />
                )}
              </FormItem>

              <FormItem
                {...formItemLayout}
                label="手机号"
                className="from-item"
              >
                {getFieldDecorator('mobile', {
                  rules: [{
                    required: true, message: '请输入手机号!'
                  }, {
                    pattern: Rege.mobile, message: '请输入11位有效手机号！'
                  }],
                })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="验证码"
                className="from-item"
              >
                <Row gutter={8}>
                  <Col span={12}>
                    {getFieldDecorator('captcha', {
                      rules: [{required: true, message: '请输入你收到的验证码!'}],
                    })(
                      <Input size="large" />
                    )}
                  </Col>
                  <Col span={12}>
                    <Button size="large">发送验证码</Button>
                  </Col>
                </Row>
              </FormItem>
              <FormItem className="from-item">
                {getFieldDecorator('agreement', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>我已阅读并接受<a>VOTER服务条款</a></Checkbox>
                )}
                <a className="login-form-forgot"><Link to="login">已有账号,立即登录</Link></a>
              </FormItem>
              <FormItem {...tailFormItemLayout} className="from-item">
                <Button type="primary"
                        htmlType="submit"
                        size="large"
                        className="button-register">
                  注册
                </Button>
              </FormItem>
            </Form>

          </div>
        </div>
      </div>
    )
  }
}

ReduxRegister.propTypes = {}
ReduxRegister.defaultProps = {}
ReduxRegister = Form.create()(ReduxRegister)

export default ReduxRegister
