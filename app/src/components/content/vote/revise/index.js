import React, { Component } from 'react'
import './index.less'
import { Form, Input, Icon, Button, InputNumber, Switch, Radio, DatePicker } from 'antd'
import moment from 'moment'
const FormItem = Form.Item
const RangePicker = DatePicker.RangePicker
const RadioGroup = Radio.Group

let uuid = 1

function onTimeChange (dates, dateStrings) {
  // console.log('From: ', dates[0], ', to: ', dates[1])
  // console.log('From: ', dateStrings[0], ', to: ', dateStrings[1])
}

class Revise extends Component {
  constructor (props) {
    super(props)
    this.state = {
      participatorLimitDisable: true,
      passwordDisable: true,
      anonymous: false,
      visibility: false,
      value: 1
    }
    this.isShowParticipator = this.isShowParticipator.bind(this)
    this.isShowPassword = this.isShowPassword.bind(this)
    this.isAnonymous = this.isAnonymous.bind(this)
    this.isVisibility = this.isVisibility.bind(this)
  }

  onChange = (e) => {
    console.log('radio checked', e.target.value)
    this.setState({
      value: e.target.value
    })
  }

  remove = (k) => {
    const {form} = this.props
    // can use data-binding to get
    const keys = form.getFieldValue('keys')
    // We need at least one passenger
    if (keys.length === 1) {
      return
    }

    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter(key => key !== k)
    })
  }

  add = () => {
    uuid++
    const {form} = this.props
    // can use data-binding to get
    const keys = form.getFieldValue('keys')
    const nextKeys = keys.concat(uuid)
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys
    })
  }

  isShowParticipator () {
    this.setState({
      participatorLimitDisable: !this.state.participatorLimitDisable
    })
  }

  isShowPassword () {
    this.setState({
      passwordDisable: !this.state.passwordDisable
    })
  }

  isAnonymous () {
    this.setState({
      anonymous: !this.state.anonymous
    })
  }

  isVisibility () {
    this.setState({
      visibility: !this.state.visibility
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values)
        let options = []
        Object.keys(values).forEach(key => {
          if (key.match(/^name?/)) {
            let item = {'value': values[key]}
            options.push(item)
          }
        })
        console.log(options)
        const {title, participatorLimit, password, time} = values
        const type = this.state.value
        const anonymous = this.state.anonymous
        const visibilityLimit = this.state.visibility
        const startTime = Date.parse(time[0])
        const endTime = Date.parse(time[1])
        const problem = {options, type}
        // 与raise的body不同的地方
        const voteId = this.props.location.query.voteid
        const problemId = this.props.revise.problems[0].id
        console.log(voteId, problemId)
        const body = {
          voteId,
          title,
          participatorLimit,
          visibilityLimit,
          password,
          startTime,
          endTime,
          anonymous,
          problem,
          time
        }
        // this.props.action.reviseVoteItem(body)
        console.log('body: ', body)
      }
    })
  }

  componentDidMount () {
    this.props.action.getVoteItem(this.props.location.query.voteid)
    // 获取并设置原有的表单数据
    const { revise: {vote = {}, problems = []} } = this.props
    const { anonymous = false, participatorLimit = 0, password = null, visibilityLimit = false } = vote
    const { type = 1 } = problems[0] || {}
    const { form } = this.props
    this.setState({
      value: type,
      anonymous: anonymous,
      participatorLimit: participatorLimit,
      visibilityLimit: visibilityLimit,
      participatorLimitDisable: !participatorLimit
    })
    form.setFieldsValue({
      participatorLimit: participatorLimit,
      password: password
    })
  }

  render () {
    const { getFieldDecorator, getFieldValue } = this.props.form
    const { revise: {vote = {}, options = []} } = this.props
    const { title } = vote
    const { startTime = 1490427181000, endTime = 1490427183000 } = vote
    const formItemLayout = {
      wrapperCol: {
        xs: {span: 24, offset: 0},
        sm: {span: 20, offset: 4}
      }
    }
    getFieldDecorator('keys', {initialValue: options})
    const keys = getFieldValue('keys')
    const formItems = keys.map((k) => {
      return (
        <FormItem
          {...formItemLayout}
          required={false}
          key={k.id}
        >
          <Icon
            className='dynamic-delete-button'
            type='minus-circle-o'
            disabled={keys.length === 1}
            onClick={() => this.remove(k)}
          />
          {getFieldDecorator(`names-${k.id}`, {
            validateTrigger: ['onChange', 'onBlur'],
            initialValue: k.value,
            rules: [{
              required: true,
              whitespace: true,
              message: '请输入选项内容'
            }]
          })(
            <Input placeholder='选项' style={{width: '77%', marginLeft: 5}} />
          )}
        </FormItem>
      )
    })
    return (
      <div className='raise-wrapper'>
        <div className='mask' />
        <div className='raise'>
          <Form onSubmit={this.handleSubmit} className='raise-form'>
            <FormItem
              {...formItemLayout}
              style={{marginLeft: 240, marginTop: 20}}
            >
              <RadioGroup onChange={this.onChange} value={this.state.value}>
                <Radio value={1}>单选</Radio>
                <Radio value={2}>多选</Radio>
              </RadioGroup>
            </FormItem>
            <FormItem style={{marginLeft: 78}}>
              {getFieldDecorator('title', {
                initialValue: title,
                rules: [{required: true, message: '请输入投票题目'}]
              })(
                <Input style={{width: '80%'}} placeholder='投票名称' />
              )}
            </FormItem>
            {formItems}
            {/*<FormItem {...formItemLayout}>*/}
              {/*<Button type='dashed' onClick={this.add} style={{width: '85%'}}>*/}
                {/*<Icon type='plus' /> 添加选项*/}
              {/*</Button>*/}
            {/*</FormItem>*/}
            {getFieldDecorator('time', {
              initialValue: [
                moment(moment.unix(startTime / 1000), 'YYYY-MM-DD HH:mm:ss'),
                moment(moment.unix(endTime / 1000), 'YYYY-MM-DD HH:mm:ss')
              ]
            })(
              <RangePicker
                ranges={{
                  Today: [moment(), moment()],
                  'This Month': [moment(), moment().endOf('month')]
                }}
                showTime format='YYYY-MM-DD HH:mm:ss' onChange={onTimeChange}
                style={{width: '67%', marginLeft: 78, marginBottom: 25}}
              />
            )}
            <FormItem
              {...formItemLayout}
            >
              <FormItem style={{marginTop: 10}}>
                {getFieldDecorator('participatorLimit')(
                  <InputNumber
                    placeholder='人数限制' style={{width: '70%'}}
                    disabled={this.state.participatorLimitDisable}
                  />
                )}
              </FormItem>
              <FormItem style={{marginLeft: 268}}>
                {getFieldDecorator('switch-participator', {
                  valuePropName: 'checked',
                  initialValue: !!this.state.participatorLimit
                })(
                  <Switch onChange={this.isShowParticipator} className='switch' />
                )}
              </FormItem>
            </FormItem>
            <FormItem
              {...formItemLayout}
            >
              <FormItem style={{marginTop: 10}}>
                {getFieldDecorator('password')(
                  <Input
                    placeholder='投票密码'
                    type='password'
                    style={{width: '70%', marginRight: 8}}
                    disabled={this.state.passwordDisable}
                  />
                )}
              </FormItem>
              <FormItem style={{marginLeft: 268}}>
                {getFieldDecorator('switch-password', {
                  valuePropName: 'checked',
                  // initialValue: this.state.visibilityLimit
                })(
                  <Switch onChange={this.isShowPassword} className='switch' />
                )}
              </FormItem>
            </FormItem>
            <FormItem {...formItemLayout}>
              <span>是否匿名</span>
              <Switch style={{marginLeft: 11, marginRight: 105}} checked={this.state.anonymous} onChange={this.isAnonymous} />
              <span>是否私有</span>
              <Switch style={{marginLeft: 11}} defaultChecked={this.state.visibilityLimit} onChange={this.isVisibility} />
            </FormItem>
            <FormItem
              {...formItemLayout}
              style={{marginLeft: 130}}
            >
              <Button type='primary' htmlType='submit' size='large'>保存修改</Button>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}
Revise = Form.create()(Revise)

export default Revise
