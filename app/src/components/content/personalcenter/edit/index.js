import React, {Component, PropTypes} from "react";
import {Link} from 'react-router';
import API from '../../../../api';
import getToken from '../../../../utils/getToken';
import { Button, Modal, Form, Input } from 'antd';
const FormItem = Form.Item;

const CollectionCreateForm = Form.create()(
    (props) => {
        const { visible, onCancel, onSave, form } = props;
        const { getFieldDecorator } = form;
        return (
            <Modal
                visible={visible}
                title="编辑个人信息"
                okText="保存"
                onCancel={onCancel}
                onOk={onSave}
            >
                <Form layout="vertical">
                    <FormItem label="昵称">
                        {getFieldDecorator('newName')(<Input type="text" />)}
                    </FormItem>
                    <FormItem label="旧密码">
                        {getFieldDecorator('oldPassword')(<Input type="password" />)}
                    </FormItem>
                    <FormItem label="新密码">
                        {getFieldDecorator('newPassword')(<Input type="password" />)}
                    </FormItem>
                </Form>
            </Modal>
        );
    }
);

class Edit extends Component {
    state = {
        visible: false,
    };
    showModal = () => {
        this.setState({ visible: true });
    };
    handleCancel = () => {
        this.setState({ visible: false });
    };
    handleSave = () => {
        const form = this.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            if(values.newName){
                console.log('Received values of form: ', values);
                fetch(API.name, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'token':'cb52937986854448b840fef6297ef809'
                    },
                    body: JSON.stringify({
                        newName:values.newName
                    })
                }).then((res) => res.json())
                    .then((json) => {
                        console.log(json);
                        if (json.code === 0) {
                            console.log("name");
                        }
                        if(json.code === 10001){
                            alert("密码输入错误。")
                        }
                        if(json.code === 10002){
                            alert("手机号输入错误。")
                        }
                    });
            }
            if(values.newPassword&&values.oldPassword){
                console.log('Received values of form: ', values);
                fetch(API.password, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'token':'cb52937986854448b840fef6297ef809'
                    },
                    body: JSON.stringify({
                        oldPassword:values.oldPassword,
                        newPassword:values.newPassword
                    })
                }).then((res) => res.json())
                    .then((json) => {
                        console.log(json);
                        if (json.code === 0) {
                            console.log("mima");
                        }
                        if(json.code === 10001){
                            alert("密码输入错误。")
                        }
                        if(json.code === 10002){
                            alert("手机号输入错误。")
                        }
                    });
            }
            form.resetFields();
            this.setState({ visible: false });
        });
    };
    saveFormRef = (form) => {
        this.form = form;
    };
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>编辑信息</Button>
                <CollectionCreateForm
                    ref={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onSave={this.handleSave}
                />
            </div>
        );
    }
}

Edit.propTypes = {};
Edit.defaultProps = {};


export default Edit;


